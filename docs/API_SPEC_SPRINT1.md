# PetVerse API – Sprint 1
Base: http://localhost:4000/v1

## Pets
GET /v1/pets
POST /v1/pets
Body: {name, species: "dog"|"cat", breed, ageMonth, weightKg, interests:[]}

## Posts / Feed
GET /v1/posts/feed?club=&near=&lat_fuzzy=&lng_fuzzy=
Response: [{id, pet, club, text, likes, location_fuzzy}]

## Chat
WS /socket.io – rooms: club:{slug}
Events: message.send, message.new – E2E encrypted client-side

## AI Pal
POST http://localhost:4100/triage
Body: {text, lang:"fa"|"en", pet:{species,ageMonth}}
Response: {red_flag:boolean, level, summary, recommendation, next_action, confidence, disclaimer}

POST /train → {plan_fa:[]}
POST /nutrition → {calories_per_day}

Auth: Bearer JWT – OAuth2.1 – Sprint2
Rate limit: 60/min IP
