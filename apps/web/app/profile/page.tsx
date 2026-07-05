import { Card } from '@/components/ui/Card'
export default function Profile(){return <main className="max-w-3xl mx-auto p-4">
<h1 className="text-2xl font-bold mb-3">پروفایل پت</h1>
<div className="grid md:grid-cols-2 gap-3">
<Card><b>لونا 🐶</b><p className="text-sm text-gray-600">هاسکی • ۱۸ ماه • ۲۲kg</p><p className="text-xs mt-2">واکسن هاری: ✅ ۱۴۰۴/۱۲ – بعدی ۱۴۰۵/۱۲</p><p className="text-xs">IoT: GPS آنلاین • باتری 78%</p></Card>
<Card><b>Badge ها</b><div className="text-sm mt2">🏅 مهربون محله • 🥾 پارک‌گرد • 🎓 مربی توله</div><p className="text-xs text-gray-500 mt-2">Mint NFT اختیاری – Polygon</p></Card>
</div>
</main>}
