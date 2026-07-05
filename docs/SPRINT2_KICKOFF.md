# Sprint 2 Kickoff – W5-6 VetCare + Auth
Start: 5 جولای 2026 – بعد از QA Green Sprint1

## Goals
- VetCare booking API live
- Auth OTP JWT FA
- LiveKit token endpoint (stub)
- PetPal → VetCare 1-click chain
- Commerce UI visual search (frontend)

## Delivered Day 0 (امروز)
- ✅ POST /v1/appointments – book – returns livekit_url + message_fa
- ✅ GET /v1/appointments – لیست ۲ دکتر دمو
- ✅ POST /v1/auth/otp + /v1/auth/verify – JWT 7d
- ✅ /vet page – لیست کلینیک، رزرو، قیمت IRR
- ✅ /shop page – Visual Search UI، Best Price badge
- ✅ PetPal → VetCare CTA chain آماده

## Next 72h – Agent Tasks
Frontend Agent:
- [ ] تقویم نوبت شمسی
- [ ] LiveKit room join UI
- [ ] پروفایل Vet detail

Backend Agent:
- [ ] Prisma Appointment create real DB
- [ ] LiveKit token sign (server)
- [ ] rate-limit + Zod validation

AI Agent:
- [ ] OpenAI GPT-4o RAG connect – /triage v2
- [ ] embedding PGVector store
- [ ] nutrition calculator with breed DB

Commerce Agent:
- [ ] Digikala affiliate scraper 1k products
- [ ] CLIP embedding pipeline
- [ ] Price compare worker

QA Agent:
- [ ] e2e Playwright: onboarding→feed→pal→vet booking
- [ ] load test /triage 100 rps

## KPI Sprint2
- triage → booking conversion >12%
- booking API p95 <250ms
- auth OTP success >98%
- Vet list TTFB <400ms

Status: KICKED OFF – agents running
