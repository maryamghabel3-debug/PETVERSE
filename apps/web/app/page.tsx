import Link from 'next/link'
const nav=[
  ['/onboarding','شروع'],['/feed','فید'],['/chat','چت'],['/pal','PetPal'],['/vet','VetCare'],['/shop','خرید'],['/insurance','بیمه'],['/events','رویداد'],['/profile','پروفایل']
]
export default function Home(){
  return (<main className="max-w-6xl mx-auto p-6">
    <header className="py-10 text-center">
      <h1 className="text-5xl font-bold text-[#FF6B4A]">PetVerse 🐾</h1>
      <p className="mt-3 text-xl text-gray-700">خانه دوم پت‌دارها – v1.0 Full</p>
      <p className="text-sm text-gray-500">Social • VetCare • Commerce • Insurance • AI • IoT • Blockchain</p>
      <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm">
        {nav.map(([h,l])=><Link key={h} href={h} className="px-3 py-1 bg-white rounded-full border hover:bg-orange-50">{l}</Link>)}
      </div>
    </header>
    <div className="grid md:grid-cols-3 gap-4">
      {[
        {t:'PetConnect',d:'شبکه اجتماعی صمیمی',href:'/feed',e:'💬'},
        {t:'PetPal AI',d:'تریاژ GPT-4o RAG FA/EN',href:'/pal',e:'🧠'},
        {t:'VetCare Hub',d:'نوبت + LiveKit ویدیو',href:'/vet',e:'🩺'},
        {t:'Commerce',d:'Visual Search CLIP',href:'/shop',e:'🛒'},
        {t:'Insurance',d:'Lemonade / Cover Genius',href:'/insurance',e:'🛡️'},
        {t:'رویداد محلی',d:'Check-in QR',href:'/events',e:'📍'},
        {t:'IoT Sync',d:'GPS + Feeder',href:'/profile',e:'📡'},
        {t:'NFT Badge',d:'Polygon L2 Opt-in',href:'/profile',e:'🔗'},
        {t:'Admin شفاف',d:'KPI / Revenue',href:'http://localhost:3001',e:'📊'},
      ].map(c=>(
        <Link key={c.t} href={c.href} className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 block hover:shadow-md transition">
          <div className="text-2xl">{c.e}</div>
          <h3 className="font-bold text-lg mt1">{c.t}</h3>
          <p className="text-gray-600 mt-1 text-sm">{c.d}</p>
        </Link>
      ))}
    </div>
    <div className="mt-8 bg-white rounded-2xl p-5 border text-sm">
      <b>PetVerse v1.0 – Full Super-App</b>
      <ul className="list-disc mr-5 mt2 space-y-1 text-gray-700">
        <li>✅ Phase 1: Social + AI + VetCare + Commerce – DONE</li>
        <li>✅ Phase 2: Insurance UK + IoT + NFT – DONE</li>
        <li>✅ Phase 3: Admin شفاف + Data Marketplace Opt-in + Mobile Expo – DONE</li>
        <li>7 Agent – 9 service – 3 app (web, admin, mobile)</li>
        <li>Stack: Next.js 14, NestJS, Postgres+pgvector, Redis, OpenSearch, GPT-4o, LiveKit, Polygon</li>
      </ul>
    </div>
  </main>)
}
