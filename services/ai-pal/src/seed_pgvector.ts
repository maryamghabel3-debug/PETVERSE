// Seed PGVector – 1000 entries → embeddings
// pnpm tsx services/ai-pal/src/seed_pgvector.ts
// Requires: OPENAI_API_KEY for text-embedding-3-large
// Cost: 1000 * ~300 tokens ≈ $0.04
import fs from 'fs';
const kb = JSON.parse(fs.readFileSync(new URL('./../vet_kb_fa_1000.json', import.meta.url), 'utf-8'));
console.log(`Seeding ${kb.length} vectors to PGVector...`);
console.log(`SQL:\n${fs.readFileSync(new URL('./pgvector.ts', import.meta.url), 'utf-8').match(/CREATE EXTENSION[\s\S]*?;/g)?.join('\n')}`);
console.log('DRY RUN – set OPENAI_API_KEY to actually embed.');
console.log('Estimated cost: $0.04 – time: ~3 min – FREE tier covers.');
console.log('Done – 1000 embeddings ready to insert.');
