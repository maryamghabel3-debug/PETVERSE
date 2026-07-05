# PetVerse 🐾
**خانه دوم پت‌دارها – v1.1 Full**

Super-App: PetConnect Social + VetCare Hub + Commerce هوشمند + Insurance + PetPal AI + IoT + Blockchain

**Repo:** https://github.com/maryamghabel3-debug/PETVERSE
**PM:** Agent Mode – Arena.ai
**Team:** 7 Agent تخصصی

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/maryamghabel3-debug/PETVERSE&root-directory=apps/web)

**v1.1 – 5 July 2026**
- ✅ PetPal RAG 200 مقاله فارسی دامپزشکی – GPT-4o
- ✅ LiveKit ویدیوویزیت – e-prescription
- ✅ Insurance Marketplace – Lemonade / Cover Genius
- ✅ IoT Hub – GPS + Feeder
- ✅ NFT Badge – Polygon L2
- ✅ Admin شفاف :3001
- ✅ Mobile Expo
- ✅ Pitch Deck – `docs/PetVerse_Investor_Deck.pptx`

## بازار شروع
- Phase 1 FA: ایران - Social + AI (بدون پرداخت)
- Phase 1 INT: UAE - Social + VetCare + Commerce
- Phase 2: UK - Insurance

## Stack
- Frontend: Next.js 14 RSC, Tailwind, React Query, React Native Expo
- Backend: NestJS, Postgres, Redis, OpenSearch
- AI: GPT-4o / Claude 3.5 + Llama 3.1, CLIP/ViT, PGVector/FAISS
- Infra: Docker, TurboRepo, GitHub Actions

## Quick Start
```bash
pnpm install
cp .env.example .env
pnpm docker:up
pnpm dev
```
- web: http://localhost:3000
- api: http://localhost:4000
- ai-pal: http://localhost:4100

## Agent Team
7 Agent تخصصی در `/agents` – PM Orchestrator مدیریت می‌کند.

## ماژول‌ها
1. PetConnect
2. Commerce هوشمند
3. VetCare Hub
4. Insurance Marketplace
5. PetPal AI

## Deploy
- Web: Vercel – apps/web – `vercel.json` ready – region fra1
- API/AI: Railway – `railway.toml` ready
- LiveKit: wss://petverse.livekit.cloud (set LIVEKIT_API_KEY)
- OpenAI: GPT-4o RAG – set OPENAI_API_KEY → auto-switch from rag-fallback to gpt-4o-rag

See `docs/DEPLOY.md`
