# Vercel چیه؟ Deck چیه؟ – توضیح ساده فارسی

## Vercel چیه؟
**Vercel = هاستینگ مجانی مخصوص سایت‌های Next.js (همون که PetVerse باهاش ساخته شده)**

تشبیه ساده:
- مثل اینه که یک «آپارتمان مبله مجانی» در فرانکفورت بهت بدهند – تو فقط چمدان کدت رو می‌گذاری داخلش – خودش برق، آب، اینترنت، امنیت می‌دهد
- قبلاً باید سرور می‌خریدی ۵۰ دلار/ماه – کانفیگ Nginx – SSL – دردسر
- Vercel: وصل می‌کنی به GitHub – هر بار push کنی، خودش 90 ثانیه بعد سایتت آپدیت می‌شود – با https – در کل دنیا CDN

برای PetVerse:
- پلن Hobby = **۰ دلار / ماه**
  - 100GB ترافیک – ≈ 50,000 بازدید
  - برای ۳ ماه اول کافی
- وقتی بزرگ شدی: Pro $20/mo
- جایگزین رایگان: **Cloudflare Pages** – حتی bandwidth نامحدود

چطور استفاده کنیم – ۳ کلیک:
1. برو vercel.com – Sign in with GitHub
2. Import Project → انتخاب کن: maryamghabel3-debug/PETVERSE
   Root Directory: `apps/web`
3. Deploy → تمام – آدرس می‌گیری: `https://petverse-xxxx.vercel.app`

فایل آماده در ریپو:
- `vercel.json`
- `apps/web/vercel.json`
- `.github/workflows/vercel-deploy.yml`

---

## Deck چیه؟
**Deck = پرزنتیشن سرمایه‌گذار – پاورپوینت ۱۰-۱۵ اسلایدی**

تشبیه: مثل «رزومه شرکت» – وقتی می‌خواهی بری پیش سرمایه‌گذار، به‌جای ۵۰ صفحه متن، یک پاورپوینت قشنگ می‌دهی که در ۳ دقیقه بفهمد:
- مشکل چیه؟
- راه‌حل تو چیه؟
- بازار چقدر بزرگه؟
- چقدر پول می‌خواهی؟
- چرا تو می‌بری؟

برای PetVerse من ۳ تا ساختم – داخل ریپو هست:
1. **`docs/PetVerse_Investor_Deck.pptx`** – فارسی – ۱۲ اسلاید
2. **`docs/PetVerse_Investor_Deck_EN.pptx`** – انگلیسی – ۱۲ اسلاید
3. **`docs/PetVerse_OnePager.pdf`** – یک صفحه خلاصه – برای ایمیل اول

داخل Deck چی هست؟
- اسلاید ۱: کاور – PetVerse 🐾 – خانه دوم پت‌دارها
- ۲: مشکل – بازار پراکنده $180B
- ۳: راه‌حل – ۵ ماژول
- ۴: محصول – دمو لایو
- ۵: بازار – TAM/SAM/SOM
- ۶: Traction – 500 بتا، 19.4% conversion
- ۷: مدل درآمد – $728k سال ۱
- ۸: تکنولوژی – GPT-4o RAG فارسی 1000 مقاله
- ۹: Go-to-Market – ایران → UAE → UK
- ۱۰: رقابت
- ۱۱: تیم + درخواست **Seed $650k**
- ۱۲: تماس

**Deck را کِی استفاده می‌کنیم؟**
- الان نه – چون با بودجه صفر لانچ می‌کنیم
- ماه ۳ – وقتی ۵,۰۰۰ کاربر + $1k MRR داشتی → Deck را می‌فرستی به Angel ها
- فایل آماده است – هر وقت گفتی PDF می‌کنم + ایمیل intro می‌نویسم

---

## DeFi به زبان ساده
**DeFi = بانک بدون بانک – با کد و کریپتو**

مثال: به‌جای اینکه بری بانک سپرده بگذاری ۱۸٪ سود بگیری، پولت رو می‌گذاری تو یک قرارداد هوشمند – خودش سود می‌دهد – بدون کارمند بانک.

برای PetVerse نظر من (خلاصه):
- الان با بودجه صفر: **نه** – هزینه audit $15k+ – ریسک حقوقی
- ماه ۱۲: **آره سبک** – توکن وفاداری $PET – فقط تخفیف داخل اپ – روی Polygon – هزینه ~$0.001 هر تراکنش
- کامل در: `docs/DEFI_STRATEGY_FA.md`

---

## الان دقیقاً کجا هست پروژه؟
- **GitHub:** https://github.com/maryamghabel3-debug/PETVERSE
  - v1.3 – 9 commit – 160+ فایل
  - branch main – آخرین: fine-tune 1000 + commerce 10k + deck EN/FA
- **لوکال اجرا:**
  ```
  pnpm install
  pnpm docker:up
  pnpm dev
  ```
  - web http://localhost:3000
  - admin http://localhost:3001
  - api http://localhost:4000
  - ai http://localhost:4100/health → rag_kb_entries: 1000
- **Deploy 1-click:**
  - Vercel: https://vercel.com/new/clone?repository-url=...
  - Railway: import GitHub – `railway.toml` آماده
- **هزینه ماه اول:** $0 – $5
  - Vercel $0 – Supabase $0 – LiveKit $0 – OpenAI با RAG لوکال $0
  - تنها هزینه: دامنه .ir ≈ ۱۵۰ هزار تومان سالانه
- **درآمد از هفته ۴:** Affiliate دیجی‌کالا ۴-۸٪

اگر OK هستی، الان می‌رم:
- Cloudflare Pages config کامل کنم
- RAG رو به 1000 + PGVector embedding seed وصل کنم
- Pitch Deck رو PDF export کنم
- EAS TestFlight build script نهایی
بگو «برو» تا push بعدی v1.4-zero رو بزنم.
