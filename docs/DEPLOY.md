# Deploy PetVerse

## Vercel – Web (Next.js)
1. import GitHub: maryamghabel3-debug/PETVERSE
   Root Directory: apps/web
   Framework: Next.js
   Install: pnpm install
   Build: pnpm build
2. Env:
NEXT_PUBLIC_API_URL=https://petverse-api.up.railway.app
NEXT_PUBLIC_AI_URL=https://petverse-ai.up.railway.app
3. Region: fra1 (Frankfurt – نزدیک IR/TR)
4. Domain: app.petverse.ir (optional)

## Railway – API + AI
- New Project → Deploy from GitHub
- Service 1: api
  Start: pnpm --filter=api start
  Port: 4000
  Env: DATABASE_URL, JWT_SECRET, LIVEKIT_API_KEY, LIVEKIT_SECRET
- Service 2: ai-pal
  Start: pnpm --filter=ai-pal start
  Port: 4100
  Env: OPENAI_API_KEY, ANTHROPIC_API_KEY
- Add Postgres (+pgvector), Redis

## LiveKit Cloud
- app.livekit.cloud → new project petverse
- API_KEY / SECRET → Railway env
- URL: wss://petverse.livekit.cloud

## OpenAI
- platform.openai.com → key sk-...
- set OPENAI_API_KEY in Railway ai-pal service
- model: gpt-4o
- Fallback: RAG local (works without key)

## Quick local test
pnpm docker:up
pnpm dev
web http://localhost:3000
api http://localhost:4000/v1/vets → wait wrong path → /v1/vetcare/vets
ai http://localhost:4100/health

Test triage:
curl -X POST http://localhost:4100/triage -H "Content-Type: application/json" -d '{"text":"استفراغ خونی","lang":"fa"}'
→ red_flag:true
