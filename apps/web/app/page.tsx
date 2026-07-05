export default function Home(){
  return (<main className="max-w-5xl mx-auto p-6">
    <header className="py-10 text-center">
      <h1 className="text-4xl font-bold text-[#FF6B4A]">PetVerse 🐾</h1>
      <p className="mt-3 text-xl text-gray-700">خانه دوم پت‌دارها</p>
      <p className="mt-2 text-gray-500">PetConnect • VetCare • Commerce • PetPal AI</p>
    </header>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        {t:'PetConnect',d:'شبکه اجتماعی صمیمی، نزدیک من، باشگاه‌های نژادی'},
        {t:'PetPal AI',d:'تریاژ هوشمند، تربیت، تغذیه - فارسی/انگلیسی'},
        {t:'VetCare Hub',d:'نوبت آنلاین، ویدیوویزیت، پرونده الکترونیک'},
        {t:'Commerce هوشمند',d:'جستجوی تصویری، Best Price Assist'}
      ].map(c=>(
        <div key={c.t} className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100">
          <h3 className="font-bold text-lg">{c.t}</h3>
          <p className="text-gray-600 mt-2 text-sm">{c.d}</p>
        </div>
      ))}
    </div>
    <div className="mt-8 bg-white rounded-2xl p-5 border">
      <h2 className="font-bold">Phase 1 - Hybrid</h2>
      <ul className="mt-3 text-sm space-y-1 text-gray-700 list-disc mr-5">
        <li>هفته 1-2: PetConnect Core + Onboarding</li>
        <li>هفته 3-4: PetPal تریاژ FA/EN</li>
        <li>هفته 5-6: VetCare booking + LiveKit</li>
        <li>هفته 7-8: Commerce Visual Search</li>
        <li>هفته 9-10: رویداد محلی + Beta UAE/IR</li>
      </ul>
    </div>
  </main>)
}
