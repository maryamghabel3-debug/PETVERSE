import Fastify from 'fastify'; import cors from '@fastify/cors';
const app = Fastify({logger:true}); await app.register(cors,{origin:true});
app.get('/health',()=>({service:'iot-hub',version:'1.0'}));
app.post('/sync', async (req:any)=>{ const d=req.body||{}; return { steps_today: Math.floor(Math.random()*8000+2000), calories_burned: 180, last_feeder: new Date().toISOString(), gps:{lat:35.78,lng:51.42,fuzzed:true}, device_id: d.device_id||'demo-collar-01'} });
app.get('/devices/:petId', async (r:any)=>({petId:r.params.petId, devices:[{type:'gps_collar',status:'online',battery:78},{type:'smart_feeder',status:'online'}]}));
app.listen({port:4300,host:'0.0.0.0'});
