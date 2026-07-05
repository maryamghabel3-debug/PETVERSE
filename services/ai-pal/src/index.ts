import Fastify from 'fastify';
import cors from '@fastify/cors';
const app = Fastify({ logger: true });
await app.register(cors, { origin: true });

const RED_FLAGS_FA = ['خون','تشنج','بیهوش','نفس تنگ','استفراغ خونی','اسهال خونی','نمی‌تونه راه بره'];
const RED_FLAGS_EN = ['blood','seizure','unconscious','can\'t breathe','collapse'];

function checkRedFlag(text:string){
  const t=text.toLowerCase();
  return [...RED_FLAGS_FA, ...RED_FLAGS_EN].some(k=> t.includes(k.toLowerCase()));
}

app.get('/health', async () => ({ status: 'ok', service: 'ai-pal', version: '0.2.0-sprint1' }));

app.post('/triage', async (req, reply) => {
  const body:any = req.body;
  const text = (body.text||'') + ' ' + (body.symptoms||'');
  const red = checkRedFlag(text);
  const lang = body.lang==='en'?'en':'fa';
  if(red){
    return {
      red_flag: true,
      level: 'emergency',
      summary: lang==='fa' ? 'علائم خطر شناسایی شد.' : 'Red flag detected.',
      recommendation: lang==='fa' ? 'فوراً به اورژانس دامپزشکی مراجعه کنید. با ۱۰۹۱۲۰ تماس بگیرید.' : 'Go to emergency vet NOW.',
      next_action: 'emergency_vet',
      confidence: 0.96,
      disclaimer: 'این ابزار آموزشی‌ست، جایگزین ویزیت نیست.'
    }
  }
  // simple rule-based demo
  let summary = lang==='fa' ? 'علائم خفیف تا متوسط به نظر می‌رسد.' : 'Mild to moderate signs.';
  if(text.includes('استفراغ')||text.includes('vomit')) summary = lang==='fa' ? 'احتمال گاستریت خفیف. ۱۲ ساعت ناشتا، آب کم‌کم.' : 'Possible mild gastritis.';
  return {
    red_flag: false,
    level: 'monitor',
    summary,
    recommendation: lang==='fa' ? 'پایش ۲۴ ساعته، اگر بدتر شد نوبت آنلاین بگیرید.' : 'Monitor 24h.',
    next_action: 'vetcare_booking_suggested',
    confidence: 0.64,
    follow_up_questions: lang==='fa' ? ['تب دارد؟','آخرین واکسن کی بود؟','اشتها چطوره؟'] : ['Fever?','Last vaccine?','Appetite?'],
    disclaimer: 'PetPal – آموزشی/تریاژ – جایگزین ویزیت نیست.'
  }
});

app.post('/train', async (req)=>({ plan_fa: ['روز ۱-۲: اسم + توجه','روز ۳-۴: بشین','روز ۵-۷: بمون'], videos:['/t/sit-fa.mp4'] }));
app.post('/nutrition', async (req:any)=>{ const b=req.body||{}; const w=b.weightKg||12; return {calories_per_day: Math.round(70*(w**0.75)*1.6), protein_g: Math.round(w*2.5), lang:'fa' }});

app.listen({ port: 4100, host: '0.0.0.0' });
console.log('PetPal AI Sprint1 on http://localhost:4100');
