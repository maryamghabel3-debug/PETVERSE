# استراتژی اجرا – تیم ایران/ترکیه
تاریخ: 5 جولای 2026

## جمع‌بندی پاسخ‌های شما
- مکان تیم: **ایران / ترکیه**
- فاز 1: **Hybrid** (تأیید)
- جامعه فارسی: **نمیدونم** → پیشنهاد ما: بله، فارسی اول
- تیم: **Agent Team** – شما PM هستید، اجرا با 7 Agent

## تصمیم نهایی PM
با توجه به لوکیشن IR/TR:

**Track A – فارسی First (ماه 1-2):**
- PetConnect + PetPal FA کامل
- VetCare Lite: دایرکتوری کلینیک تهران/استانبول، booking تلفنی
- Commerce: Affiliate داخلی (دیجی‌کالا، پت‌شاپ‌آنلاین TR) – بدون Stripe
- پرداخت: زرین‌پال / زیبال (IRR) + Iyzico TR (اختیاری)
- میزبانی: Hetzner آلمان / ترکیه – جدا از تحریم US
- بدون بیمه، بدون ادعای مالی بین‌المللی

**Track B – UAE Bridge (ماه 3):**
- ثبت IFZA Dubai ~$4,800
- Stripe UAE + حساب WIO/ENBD
- لانچ EN/AR
- 10 کلینیک anchor دبی
- درآمد بین‌المللی فعال

**Track C – UK Insurance (ماه 5-6)**

اینطوری ریسک تحریم صفر، و جامعه فارسی از روز 1 می‌سازیم.

## نقشه 10 هفته – نسخه IR/TR
W1-2: Onboarding FA/RTL، فید، چت، باشگاه هاسکی/پرشین‌کت
W3-4: PetPal FA – 200 case red-flag فارسی، RAG منابع دامپزشکی فارسی
W5-6: VetCare دایرکتوری + تقویم ساده + LiveKit test
W7-8: Commerce affiliate scraper دیجی‌کالا (10k محصول)
W9-10: رویداد پارک ملت/آب و آتش – Beta 500 کاربر

## 7 Agent فعال
1. pm-agent – من – Burndown روزانه
2. frontend-agent – Next.js 14 RTL
3. backend-agent – NestJS
4. ai-agent – PetPal FA/EN
5. vetcare-agent – Booking
6. commerce-agent – Affiliate IR
7. qa-agent – Safety

همه در `/agents` مستند شدند.

## Next Step (48 ساعت آینده)
- [ ] تکمیل UI Onboarding + Pet profile
- [ ] PetPal /triage endpoint واقعی با OpenAI
- [ ] Prisma migrate + seed 20 نژاد فارسی
- [ ] Deploy Preview: Vercel (web) + Railway (api)
- [ ] کانال تلگرام Beta testers

اگر OK هست، بگو «شروع Sprint 1» تا Agent ها را run کنم.
