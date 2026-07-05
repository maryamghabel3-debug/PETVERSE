import Fastify from 'fastify';
const app = Fastify({ logger: true });

app.get('/health', async () => ({ status: 'ok', service: 'ai-pal', version: '0.1.0' }));

// PetPal triage endpoint
app.post('/triage', async (req, reply) => {
  const body:any = req.body;
  // TODO: RAG + red-flag classifier + GPT-4o
  return {
    mode: body.mode || 'health',
    lang: body.lang || 'fa',
    red_flag: false,
    summary: 'علائم ثبت شد. فعلاً در نسخه MVP پاسخ آزمایشی.',
    recommendation: 'اگر بی‌حالی شدید یا استفراغ خونی: اورژانس.',
    next_action: 'vetcare_booking_suggested',
    confidence: 0.42
  };
});

app.post('/train', async()=>({plan:'هفته 1: ...'}));
app.post('/nutrition', async()=>({calories:320}));

app.listen({ port: 4100, host: '0.0.0.0' });
console.log('PetPal AI on http://localhost:4100');
