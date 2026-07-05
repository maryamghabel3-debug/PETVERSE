const kpis=[
  {l:'WAU', v:'3,842'},
  {l:'MAU', v:'11,200'},
  {l:'Triage→Booking', v:'19.4%'},
  {l:'GMV ماه', v:'$42.1k'},
  {t:'Take rate', v:'6.7%'},
  {l:'Vet NPS', v:'58'},
];
export default function Admin(){return <main style={{maxWidth:1100,margin:'0 auto',padding:24}}>
<h1>PetVerse Admin – شفاف</h1>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
{kpis.map(k=><div key={k.l} style={{background:'#fff',padding:16,borderRadius:16,border:'1px solid #eee'}}><div style={{color:'#666',fontSize:12}}>{k.l}</div><div style={{fontSize:24,fontWeight:700}}>{k.v}</div></div>)}
</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:16}}>
<div style={{background:'#fff',padding:16,borderRadius:16}}><b>درآمد شفاف</b><ul><li>تراکنش 5-8%: $2,820</li><li>VetCare 15%: $1,940</li><li>اشتراک حرفه‌ای: $1,200</li><li>داده Opt-in: $420</li></ul></div>
<div style={{background:'#fff',padding:16,borderRadius:16}}><b>مدیریت رضایت داده</b><p>Opt-in: 2,341 کاربر (68%) – Revenue share فعال</p></div>
<div style={{background:'#fff',padding:16,borderRadius:16}}><b>IoT آنلاین</b><p>412 قلاده GPS • 188 ظرف هوشمند</p></div>
<div style={{background:'#fff',padding:16,borderRadius:16}}><b>Trust & Safety</b><p>گزارش: 0.21% – میانگین پاسخ مودریشن 4.2 دقیقه</p></div>
</div>
<p style={{marginTop:16,fontSize:13,color:'#666'}}>Admin Panel – Next.js :3001 – /admin</p>
</main>}
