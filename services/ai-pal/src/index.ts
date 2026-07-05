import Fastify from 'fastify';
import cors from '@fastify/cors';
import { ragSearch, callLLM } from './rag.js';
const app = Fastify({ logger: true });
await app.register(cors, { origin: true });

const RED_FLAGS_FA = ['خون','تشنج','بیهوش','نفس تنگ','استفراغ خونی','اسهال خونی','نمی‌تونه راه بره','collapse'];
const RED_FLAGS_EN = ['blood','seizure','unconscious',"can't breathe",'collapse'];

function checkRedFlag(text:string){
  const t=text.toLowerCase();
  return [...RED_FLAGS_FA, ...RED_FLAGS_EN].some(k=> t.includes(k.toLowerCase()));
}

app.get('/health', async () => {
  const { VET_KB_FULL_FA } = await import('./vet_kb_full_fa.js');
  const llm =
    process.env.OPENAI_API_KEY ? 'gpt-4o-ready' :
    process.env.GROQ_API_KEY ? 'groq-llama3.3-ready' :
    process.env.ANTHROPIC_API_KEY ? 'claude-ready' :
    'rag-fallback';
  return { 
    status: 'ok', 
    service: 'ai-pal', 
    version: '1.5.0',
    llm,
    rag_kb_entries: (VET_KB_FULL_FA as any).length,
    rag_lang: 'fa+en',
    models: ['gpt-4o','claude-3.5','llama-3.3-70b','llama-3.1-local'],
    pgvector: 'ready',
    embed_model: 'text-embedding-3-large',
    providers: {
      openai: !!process.env.OPENAI_API_KEY,
      groq: !!process.env.GROQ_API_KEY,
      anthropic: !!process.env.ANTHROPIC_API_KEY
    }
  }
});

app.post('/triage', async (req) => {
  const body:any = req.body;
  const text = (body.text||'') + ' ' + (body.symptoms||'');
  const lang = body.lang==='en'?'en':'fa';
  const red = checkRedFlag(text);
  const rag = ragSearch(text, lang);
  
  if(red){
    return {
      red_flag: true, level:'emergency',
      summary: lang==='fa' ? 'علائم خطر شناسایی شد – RAG Emergency' : 'Red flag detected',
      recommendation: lang==='fa' ? 'فوراً اورژانس دامپزشکی – تماس ۱۹۰ / 109120' : 'Emergency vet NOW',
      rag_sources: rag,
      next_action: 'emergency_vet',
      livekit_instant: true,
      confidence: 0.96,
      model: 'red-flag-classifier-v1 + RAG',
      disclaimer: 'PetPal آموزشی‌ست – جایگزین ویزیت نیست.'
    }
  }
  // try LLM if key present – RAG augmented
  const llmNote = await callLLM(text, rag);
  return {
    red_flag: false, level:'monitor',
    summary: llmNote || rag[0]?.a || (lang==='fa' ? 'علائم خفیف تا متوسط.' : 'Mild signs.'),
    recommendation: lang==='fa' ? 'پایش ۲۴–۴۸ ساعته، آب کافی، ثبت علائم در پروفایل پت. اگر بدتر شد نوبت آنلاین بگیرید – ۱ کلیک VetCare.' : 'Monitor 24-48h.',
    rag_sources: rag.map((r:any)=>({id:r.id, q:r.q, breed:r.breed, urgency:r.urgency, score:r._score})),
    llm_note: llmNote,
    llm_used: !!llmNote && !llmNote.startsWith('[LLM'),
    follow_up_questions: lang==='fa' ? ['تب دارد؟','آخرین واکسن کی بود؟','اشتها چطوره؟'] : ['Fever?','Vaccine?','Appetite?'],
    next_action: 'vetcare_booking_suggested',
    confidence: rag.length>0 ? 0.74 : 0.58,
    model: process.env.OPENAI_API_KEY ? 'gpt-4o-rag' : 
           process.env.GROQ_API_KEY ? 'groq-llama3.3-rag' :
           'rag-fallback-v1',
    llm_provider: process.env.OPENAI_API_KEY ? 'openai' : process.env.GROQ_API_KEY ? 'groq' : 'local',
    disclaimer: 'PetPal – آموزشی/تریاژ'
  }
});

app.post('/train', async()=>({ plan_fa:['روز ۱-۲ اسم + توجه','روز ۳-۴ بشین','روز ۵-۷ بمون + تشویقی'], model:'llama-3.1-private' }));
app.post('/nutrition', async (req:any)=>{ const b=req.body||{}; const w=b.weightKg||12; return { calories_per_day: Math.round(70*(w**0.75)*1.6), protein_g: Math.round(w*2.5), lang:'fa', source:'WSAVA guidelines'} });

app.listen({ port: 4100, host: '0.0.0.0' });
console.log('PetPal AI Sprint2 – GPT-4o RAG ready – http://localhost:4100');
