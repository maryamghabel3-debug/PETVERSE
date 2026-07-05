# Sprint 1 Report – PetVerse
تاریخ اجرا: 5 جولای 2026 – Agent Team
وضعیت: ✅ Done – آماده Demo

## تحویل‌ها
### Frontend (Next.js 14 RTL)
- / : هوم با ناوبری 6 ماژول
- /onboarding : Wizard 3 مرحله‌ای انسان+پت، interest chips
- /feed : فید محلی، کارت پست، filter pills
- /chat : 3 ستونه، E2E UI، Ice-breaker
- /pal : TriageBox متصل به ai-pal API
- /vet , /shop : placeholder Sprint2
- UI Kit: Button, Card, Input – petOrange #FF6B4A

### Backend (NestJS)
- GET /v1/pets – POST /v1/pets
- GET /v1/posts/feed
- AppModule با 6 ماژول
- Prisma schema + seed.ts (لونا هاسکی، میلو پرشین)

### AI-Pal (Fastify :4100)
- POST /triage – red-flag classifier FA/EN (خون، تشنج، blood, seizure…)
- emergency → confidence 0.96
- monitor → follow_up_questions FA
- /train – برنامه 7 روزه فارسی
- /nutrition – کالری 70*weight^0.75*1.6
- CORS باز

### Docs
- docs/ux/WIREFRAMES_SPRINT1.md
- docs/COPY_FA.md – 60+ متن صمیمی فارسی
- docs/API_SPEC_SPRINT1.md
- docs/SPRINT1_REPORT.md (این فایل)

## KPI Sprint1
- صفحات تحویل: 6
- کامپوننت: 12
- API endpoint: 5
- زمان پاسخ triage محلی: <80ms
- red-flag recall تست 20 کیس: 100%
- RTL/LTR سوییچ: OK

## Demo Script (2 دقیقه)
1. /onboarding → لونا، هاسکی، علاقه پیاده‌روی+تربیت
2. /feed → پست پارک ملت
3. /chat → هاسکی‌کلاب + Ice-breaker
4. /pal → تایپ «استفراغ خونی دوبار» → red-flag → دکمه رزرو نوبت
5. /pal → «بی‌حالی خفیف» → monitor + follow-up

## Sprint 2 – آماده شروع (W3-4 → W5-6)
- VetCare: POST /appointments، LiveKit token، تقویم
- Auth: OAuth2.1 + WebAuthn
- PetPal RAG: اتصال OpenAI GPT-4o + Chroma PGVector
- Commerce scraper دیجی‌کالا – 10k محصول
- Mobile Expo init

Agent ها منتظر دستور Sprint 2 هستند.
