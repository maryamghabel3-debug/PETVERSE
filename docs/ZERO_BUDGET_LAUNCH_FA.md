# لانچ PetVerse با بودجه صفر – راهنمای عملی
تاریخ: 5 جولای 2026 – تیم: ایران/ترکیه

## اصل: $0 upfront – پرداخت از درآمد
همه سرویس‌ها tier رایگان دارند.

### 1) هاست وب – $0
- **Vercel Hobby** – https://vercel.com
  - 100GB bandwidth/mo – مناسب 10k کاربر
  - Next.js native – Deploy از GitHub 1-click
  - دامنه: petverse-vercel.app رایگان
- **Backup: Cloudflare Pages** – نامحدود bandwidth – رایگان
  - فایل: `wrangler.toml` اضافه شد

### 2) بک‌اند API – $0-5
- **Railway** – $5 free credit – 1-2 ماه اول رایگان
- **Fly.io** – 3 VM small free forever
- **Oracle Cloud Always Free** – 2 VM Ampere – قوی – رایگان دائم
- **یا Hetzner CX11** – €4.15/mo – ارزان‌ترین پولی (≈ 250k تومان)

### 3) دیتابیس – $0
- **Supabase Free** – Postgres + pgvector – 500MB – 50k MAU
  - https://supabase.com – sign up – New project – region Frankfurt
  - Connection string → `DATABASE_URL`
- **Neon Free** – 0.5GB – branching
- **Upstash Redis Free** – 10k cmd/day

### 4) AI – $0-20
- ماه 1-2: **RAG لوکال 1000 مقاله** – بدون OpenAI – 0 دلار
- بعد 100 triage/day: OpenAI – **$15-25/mo**
  - Cache جواب‌ها – 60% صرفه‌جویی
  - Fallback Llama 3.1 local via Groq Free tier
- **Groq Cloud** – Llama 3.1 70B – **رایگان** – 14,400 req/day

### 5) ویدیو – $0
- **LiveKit Cloud** – 10,000 participant-minutes/mo free
  - ≈ 160 ساعت ویدیوویزیت رایگان
- Backup: **Jitsi self-host** – $0

### 6) پرداخت – 0 upfront
- **ایران:** زرین‌پال – ثبت رایگان – کارمزد 1% از تراکنش (نه upfront)
  - زیبال – مشابه
- **ترکیه:** Iyzico sandbox رایگان – production 2.9% از تراکنش
- **بین‌الملل (وقتی UAE ثبت شد):** Stripe – 0 ماهانه – 2.9%+30¢ از تراکنش

### 7) دامنه / ایمیل – تنها هزینه نقدی
- دامنه .ir – nic.ir – **150,000 تومان / سال** ≈ $3
- ایمیل: Zoho Mail Free – 5 کاربر رایگان
- یا Cloudflare Email Routing – رایگان

### 8) موبایل – $0
- **Expo EAS** – build رایگان – TestFlight رایگان
- Apple Developer: $99/year – **ماه 4 به بعد** – اول با Expo Go تست
- Google Play: $25 یک‌بار – ماه 3

### 9) مانیتورینگ – $0
- Sentry Free – 5k errors/mo
- UptimeRobot – 50 monitors free
- PostHog Cloud Free – 1M events/mo

## جمع هزینه ماه 1-3
| قلم | هزینه |
|---|---|
| Vercel | $0 |
| Railway/Fly | $0-5 |
| Supabase DB | $0 |
| Redis Upstash | $0 |
| AI (RAG local) | $0 |
| LiveKit | $0 |
| دامنه .ir | $3 / سال |
| ایمیل Zoho | $0 |
| **جمع ماهانه** | **$0 – $5** |
| **جمع 3 ماه** | **<$15** |

## درآمد از هفته 4
- Affiliate دیجی‌کالا: 4-8% – بدون انبار – تسویه ماهانه
- Vet مشاوره تلفنی: 15% – پرداخت در محل
- هدف ماه 2: $400-800 MRR → کاور هزینه‌ها

## چک‌لیست لانچ 48 ساعته – 0 دلار
- [ ] GitHub repo ✅ – هست
- [ ] Vercel import → deploy – 5 دقیقه
- [ ] Supabase project free – copy DATABASE_URL
- [ ] Railway – deploy api – free tier
- [ ] دامنه ir وصل به Vercel – 150k تومان
- [ ] زرین‌پال – ثبت – 0 تومان
- [ ] کانال تلگرام + اینستا – 0 تومان
- [ ] 20 Community Host دعوت – 0 تومان
- [ ] Beta 100 کاربر – TestFlight / PWA

## نتیجه
**با < $15 در 3 ماه اول می‌توان PetVerse FA را به 2,000 کاربر رساند.**
بعد از رسیدن به $500/mo درآمد → ارتقا سرور → جذب سرمایه Seed.
