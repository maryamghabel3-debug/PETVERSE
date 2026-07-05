import Fastify from 'fastify'; import cors from '@fastify/cors';
const app = Fastify({logger:true}); await app.register(cors,{origin:true});
app.get('/health',()=>({service:'insurance-marketplace',version:'1.0'}));
app.post('/quote', async (req:any)=>{ const b=req.body||{}; const base = b.species==='cat'?25:35;
  const ageF = (b.ageMonth||12)>84?1.6:1;
  return {quotes:[
    {provider:'Lemonade', plan:'Accident', monthly_usd: Math.round(base*ageF), coverage:10000, deductible:250},
    {provider:'Cover Genius', plan:'Comprehensive', monthly_usd: Math.round(base*ageF*1.6), coverage:15000, deductible:100},
    {provider:'PetPlan UK', plan:'Lifetime', monthly_gbp: Math.round(base*0.8*ageF), coverage:12000}
  ], disclaimer_fa:'نرخ‌ها تخمینی – صدور نهایی توسط شریک دارای مجوز.'}}
});
app.post('/claim', async ()=>({claim_id:'CLM-'+Date.now(), status:'submitted', eta_days:5}));
app.listen({port:4200,host:'0.0.0.0'}); console.log('Insurance on :4200');
