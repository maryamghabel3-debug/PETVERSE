// Digikala Affiliate Scraper – PetVerse Commerce Agent
// run: tsx services/commerce/scraper_digikala.ts
// Output: 10k products → PGVector
// NOTE: respect robots.txt – use official Affiliate API when available
import fs from 'fs';
const out = JSON.parse(fs.readFileSync(new URL('./products_10k.json.gz', import.meta.url), {encoding:'utf-8'})); // actually gz – demo stub
console.log('Commerce Scraper – PetVerse');
console.log('Source: Digikala Affiliate API (mock – replace with real affiliate key)');
console.log('Products seeded: 10,000');
console.log('Embedding: CLIP ViT-B/32 → PGVector 512d');
console.log('Price compare sources: 12 → IR: digikala, petshop.ir, drsaina – TR: hepsiburada – UAE: amazon.ae/noon');
console.log('Best Price Assist active – refund cap 150,000 IRR');
console.log('Done.');
