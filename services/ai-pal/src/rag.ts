// PetVerse RAG – GPT-4o + vet knowledge base FA/EN
// Full KB: 200 entries FA
import { VET_KB_FULL_FA } from './vet_kb_full_fa.js';

export const VET_KB_FA = VET_KB_FULL_FA.slice(0,5); // keep legacy export

export function ragSearch(text:string, lang='fa', topK=5){
  const t = text.toLowerCase();
  const terms = t.split(/\s+/).filter(s=>s.length>2);
  const scored = (VET_KB_FULL_FA as any[]).map((e:any)=>{
    let score = 0;
    const q = e.q_fa || e.q_en || e.q || '';
    const a = e.a_fa || e.a_en || e.a || '';
    const hay = (q+' '+a+' '+(e.tags||[]).join(' ')).toLowerCase();
    terms.forEach((term:string)=>{ if(hay.includes(term)) score+=2 });
    // breed boost (fa+en)
    if(e.breed && t.includes(String(e.breed).toLowerCase())) score+=3;
    // urgency boost
    if(e.urgency==='emergency' && /(خون|تشنج|بیهوش|seizure|blood|emergency|collapse)/.test(t)) score+=5;
    // species boost
    if(e.species && t.includes(e.species)) score+=1;
    return {...e, _score:score};
  }).filter((x:any)=>x._score>0).sort((a:any,b:any)=>b._score-a._score).slice(0,topK);
  return scored.length ? scored : (VET_KB_FULL_FA as any[]).slice(0,3);
}

export async function callLLM(prompt:string, context:any[]=[]){
  const apiKey = process.env.OPENAI_API_KEY;
  if(!apiKey) return null;
  try{
    // Dynamic import to avoid hard dep in dev
    const {default: OpenAI} = await import('openai');
    const openai = new OpenAI({apiKey});
    const sys = `تو PetPal هستی – دستیار دامپزشکی تریاژ. فارسی صمیمی حرف بزن. هرگز دارو تجویز نکن. همیشه disclaimer بده: «آموزشی‌ست، جایگزین ویزیت نیست». اگر red-flag دیدی بگو اورژانس.`;
    const ctx = context.map((c:any)=>`- ${c.q}: ${c.a}`).join('\n');
    const resp = await openai.chat.completions.create({
      model: 'gpt-4o',
      temperature: 0.3,
      max_tokens: 400,
      messages:[
        {role:'system', content:sys},
        {role:'user', content:`علائم: ${prompt}\n\nدانش مرتبط:\n${ctx}\n\nپاسخ فارسی کوتاه، ساختار: خلاصه / توصیه / هشدار / زمان مراجعه`}
      ]
    });
    return resp.choices[0]?.message?.content || null;
  }catch(e:any){
    return `[LLM error: ${e.message}]`;
  }
}

export const RAG_STATS = {
  entries: VET_KB_FULL_FA.length,
  languages: ['fa','en'],
  last_update: '2026-07-05',
  coverage: ['gastro','derma','respiratory','neuro','ortho','ophthalmo','dental','nutrition','emergency','prevention']
};
