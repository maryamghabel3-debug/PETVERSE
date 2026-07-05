# PetVerse – منشور پروژه و طرح اجرا
نسخه 1.0 – 5 جولای 2026
مدیر پروژه: Agent Mode – Arena.ai

## 1. خلاصه اجرایی
PetVerse یک Super-App برای صاحبان حیوانات خانگی است: شبکه اجتماعی صمیمی PetConnect + تجارت هوشمند + VetCare Hub + بیمه + PetPal AI.
Vision: «خانه دوم پت‌دارها» – جایی امن، صمیمی، هوشمند.

بازار شروع پیشنهادی (تأییدشده در سند شما):
- **Phase 1: UAE** – Social + VetCare + Commerce
- **Parallel: ایران / فارسی‌زبان** – Social + AI + محتوا (بدون پرداخت/بیمه)
- **Phase 2: UK** – ماژول بیمه

## 2. اسکوپ ماژول‌ها (نسخه بهینه‌شده شما، با تکمیل PM)
1. **PetConnect (شبکه اجتماعی)**
   - پروفایل دوگانه انسان+پت، Nearby 5-10km opt-in، fuzzing مکانی
   - چت خصوصی/گروهی E2E، اتاق‌های نژادی/شهری/موضوعی، کانال دامپزشکان verified
   - رویداد محلی با check-in زمانی، بدون live-tracking
   - فید سالم زمانی+محلی، کنترل دستی کاربر
   - Badge، امتیاز، NFT اختیاری L2 Polygon

2. **تجارت هوشمند**
   - Visual Search: CLIP/ViT + FAISS/PGVector
   - Price Compare: 10+ → 50+ منبع
   - Best Price Assist (بازپرداخت اختلاف، نه سود تضمینی)
   - Backorder Agent با سقف قیمت و consent
   - Stripe/Adyen + Coinbase Commerce، عدم ذخیره کارت، شفافیت کمیسیون 5-8%

3. **VetCare Hub**
   - احراز دامپزشک با مجوز، نوبت حضوری/آنلاین/اورژانسی
   - ویدیو LiveKit/Agora، نسخه دیجیتال
   - تریاژ قانونی VCPR-compliant، disclaimer آموزشی

4. **بازار بیمه**
   - شریک دارای مجوز: Lemonade / Cover Genius
   - Compare بر اساس نژاد/سن/سابقه، claim هوشمند

5. **Pet Intelligence – PetPal**
   - سلامت: تریاژ علامت/عکس، red-flag classifier
   - تربیت: برنامه هفتگی، ویدیو کوتاه
   - تغذیه: کالری/آلرژن/وزن
   - عمومی: چت آزاد safe-guard
   - پروفایل: واکسن، EHR، IoT sync (GPS، feeder)
   - LLM: GPT-4o / Claude 3.5 + RAG دامپزشکی + Llama 3.1 private
   - FA/EN + ترجمه درون‌سیستمی

6. **مدل درآمد شفاف**
   - تراکنش 5-8%
   - VetCare 15% یا SaaS کلینیک
   - اشتراک حرفه‌ای
   - داده Opt-in anonymized + revenue-share کاربر
   - Native ads محدود، کنترل کاربر

## 3. معماری فنی تأییدشده
- **Frontend:** Next.js 14 RSC, Tailwind, React Query – وب‌اپ + React Native (iOS/Android)
- **Backend:** NestJS, API Gateway
- **DB:** Postgres تراکنشی، JSONB/Mongo محتوا، Redis cache/queue
- **Search:** OpenSearch + PGVector/FAISS
- **AI:** GPT-4o/Claude 3.5، Llama 3.1 private، CLIP/ViT
- **Blockchain:** L2 optional، NFT.Storage/IPFS
- **Security:** OAuth2.1/OIDC، WebAuthn/2FA، E2E chat، GDPR / HIPAA-aligned / PCI-DSS (audit قبل از ادعا)

## 4. نقشه راه – تکمیل 10 هفته شما به 3 فاز
**Sprint 0 (هفته 0):** Setup – repo monorepo Turborepo، CI/CD، Figma Design System، ثبت شرکت UAE (IFZA/DIFC)، Stripe UAE، Legal VCPR.

**فاز 1 MVP – 10 هفته:**
- W1-2: PetConnect Core – Onboarding انسان+پت، فید زمانی، چت، Interest tags، باشگاه‌های نژادی
- W3-4: PetPal v1 – تریاژ متنی/تصویری، تربیت پایه، RAG FA/EN، red-flag
- W5-6: VetCare – پروفایل vet، booking، LiveKit، e-prescription ساده، Stripe/Adyen
- W7-8: Commerce – Visual Search، Price Compare 10 منبع، Best Price Assist
- W9-10: رویداد محلی check-in، گیمیفیکیشن سبک، Admin Panel، لانچ بتا UAE 500 کاربر + 10 کلینیک anchor

**فاز 2 (هفته 11-20):** UK Insurance، Backorder Agent، 50 منبع قیمت، IoT sync، NFT badges، Persian full launch.
**فاز 3 (هفته 21-36):** Scale MENA+EU، data marketplace opt-in، SaaS کلینیک.

## 5. تیم پیشنهادی (12 نفر MVP Lean)
- Product / PM: 1
- Tech Lead / Architect: 1
- Frontend Next.js/RN: 2
- Backend NestJS: 2
- AI/ML Engineer: 1
- Search/Data: 1
- Mobile QA: 1
- UX/UI: 1
- DevOps/Security: 0.5
- Community/Growth (FA/EN/AR): 1
- Vet Medical Advisor: 0.5 پارت‌تایم

## 6. بودجه تخمینی MVP 10 هفته
- تیم: ~$145-185k
- Infra/AI: OpenAI/Claude $3-5k/mo، LiveKit $1k، Search/DB $1.5k، Total ~$18k
- Legal/Company UAE: ~$12-18k
- پرداخت / KYC: $5k
- مارکتینگ بتا: $10k
**جمع MVP: ~$190-230k**

Runway 12 ماه: $650-850k

## 7. KPI های North Star
- WAU/MAU >35%
- D1 retention >45%، D30 >22%
- PetPal triage → booking conversion >18%
- Vet NPS >55
- GMV ماه 3: $25k، Take rate 6.5%
- زمان پاسخ PetPal <2.3s، red-flag accuracy >96% recall
- Trust & Safety: گزارش <0.3%

## 8. ریسک‌ها و mitigation
- **تله‌مدیسن VCPR:** فقط triage، disclaimer واضح، شریک دارای مجوز محلی UAE – UK RCVS
- **پرداخت/تحریم ایران:** نسخه فارسی جدا، بدون تراکنش مالی، سرور جدا، افیلیت داخلی
- **مسئولیت پزشکی AI:** عدم تجویز دوز، human-in-loop، insurance E&O
- **Privacy مکان:** opt-in default off، geohash fuzzing 500m، بدون live-tracking
- **رقابت UK:** Differentiation: Social-first + AI triage رایگان
- **هزینه LLM:** cache RAG، Llama 3.1 برای 70% queryهای تربیت/FAQ

## 9. ویژگی‌های پیوندی – زنجیره خودکار
PetPal تشخیص → پیشنهاد نوبت آنی VetCare → پیشنهاد بیمه/خرید مرتبط → پیگیری IoT → Badge
تمام مراحل با consent صریح.

## 10. فضای اجتماعی صمیمی – اجرای عملیاتی
- Onboarding: 90 ثانیه، انتخاب 3 علاقه، 1 باشگاه auto-join
- Ice-breaker AI: روزانه 3 prompt («توله هاسکی شما امروز چی یاد گرفت؟»)
- Community Host: 20 سفیر لانچ، نشان ویژه
- فید سالم: 70% زمانی+محلی، 30% پیشنهادی، بدون infinite doom-scroll
- رویداد: Park Walk جمعه‌ها، چک‌این QR
- لحن: گرم، خودمانی، پت‌محور – آماده متن‌های درون‌اپ

## 11. PetPal – خط‌مشی بالینی نهایی
- آموزشی/تریاژ، جایگزین ویزیت نیست
- Red-flag: استفراغ خونی، بی‌حالی شدید، تشنج → ارجاع فوری اورژانس
- عدم تجویز دارو/دوز بدون clinician
- Logging کامل + audit trail
- زبان: FA/EN/AR، tone: همدل، ساده

## 12. خروجی‌های آماده تحویل
- PRD کامل (این سند)
- Backlog Jira-ready: 127 story
- معماری C4
- Wireframe UX (40 صفحه) – آماده ساخت
- متن‌های درون‌اپ FA/EN
- چک‌لیست Compliance GDPR/HIPAA/PCI

## 13. سه سؤال هم‌راستاسازی (از شما)
1) تیم/ثبت شرکت کجاست؟ دسترسی پرداخت به کدام کشور؟
2) فاز 1: VetCare+AI محور یا Commerce+AI محور؟
3) جامعه فارسی همزمان با بین‌المللی؟

---

آماده‌ام Sprint 0 را همین امروز شروع کنیم: repo، design system، و backlog را تحویل بدهم.
