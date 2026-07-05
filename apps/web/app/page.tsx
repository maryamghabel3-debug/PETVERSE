import Link from 'next/link'
export default function Home(){
  return (<main className="max-w-5xl mx-auto p-6">
    <header className="py-10 text-center">
      <h1 className="text-4xl font-bold text-[#FF6B4A]">PetVerse 🐾</h1>
      <p className="mt-3 text-xl text-gray-700">خانه دوم پت‌دارها</p>
      <div className="flex justify-center gap-3 mt-4 text-sm">
        {[
          ['/onboarding','شروع'],
          ['/feed','فید'],
          ['/chat','چت'],
          ['/pal','PetPal'],
          ['/vet','VetCare'],
          ['/shop','خرید'],
        ].map(([h,l])=><Link key={h} href={h} className="px-3 py-1 bg-white rounded-full border hover:bg-orange-50">{l}</Link>)}
      </div>
    </header>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        {t:'PetConnect',d:'شبکه اجتماعی صمیمی، نزدیک من، باشگاه‌های نژادی',href:'/feed'},
        {t:'PetPal AI',d:'تریاژ هوشمند، تربیت، تغذیه - فارسی/انگلیسی',href:'/pal'},
        {t:'VetCare Hub',d:'نوبت آنلاین، ویدیوویزیت، پرونده الکترونیک',href:'/vet'},
        {t:'Commerce هوشمند',d:'جستجوی تصویری، Best Price Assist',href:'/shop'}
      ].map(c=>(
        <Link key={c.t} href={c.href} className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 block hover:shadow-md transition">
          <h3 className="font-bold text-lg">{c.t}</h3>
          <p className="text-gray-600 mt-2 text-sm">{c.d}</p>
        </Link>
      ))}
    </div>
    <div className="mt-8 bg-white rounded-2xl p-5 border">
      <h2 className="font-bold">Sprint 1 – در حال اجرا – Hybrid IR/TR</h2>
      <ul className="mt-3 text-sm space-y-1 text-gray-700 list-disc mr-5">
        <li>✅ Onboarding انسان+پت FA/RTL</li>
        <li>✅ Feed محلی + Club filter</li>
        <li>✅ Chat E2E UI + Ice-breaker</li>
        <li>✅ PetPal Triage UI → /triage API</li>
        <li>🔄 VetCare booking API (W5-6)</li>
        <li>🔄 Commerce Visual Search (W7-8)</li>
      </ul>
    </div>
  </main>)
}
