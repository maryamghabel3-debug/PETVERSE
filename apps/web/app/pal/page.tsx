import TriageBox from '@/components/pal/TriageBox'
export default function Pal(){ return <main className="max-w-5xl mx-auto p-4">
  <h1 className="text-2xl font-bold mb-1">PetPal AI 🧠</h1>
  <p className="text-sm text-gray-600 mb-4">تریاژ • تربیت • تغذیه – فارسی/English</p>
  <TriageBox/>
  <div className="grid md:grid-cols-3 gap-3 mt-6 text-sm">
    <div className="bg-white p-4 rounded-2xl border"><b>تربیت</b><p className="text-gray-600 mt-1">برنامه ۷ روزه توله – بشین / بمون</p></div>
    <div className="bg-white p-4 rounded-2xl border"><b>تغذیه</b><p className="text-gray-600 mt-1">۳۲۰ kcal/day برای ۱۲kg</p></div>
    <div className="bg-white p-4 rounded-2xl border"><b>چت آزاد</b><p className="text-gray-600 mt-1">می‌تونی درباره هرچی بپرسی</p></div>
  </div>
</main>}
