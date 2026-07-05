import { Card } from '@/components/ui/Card'
export default function Events(){return <main className="max-w-3xl mx-auto p-4"><h1 className="text-2xl font-bold mb-3">رویدادهای محلی</h1>
{[
 {t:'پیاده‌روی گروهی هاسکی‌ها',where:'پارک آب و آتش – تهران',when:'جمعه ۱۰ صبح',going:24},
 {t:'Vet Q&A – تغذیه توله',where:'آنلاین – LiveKit',when:'شنبه ۱۹:۰۰',going:56},
].map(e=><Card key={e.t} className="mb-3"><b>{e.t}</b><div className="text-sm text-gray-600">{e.where} • {e.when}</div><div className="text-xs mt1">🧍 {e.going} نفر می‌آیند • چک‌این QR در محل</div></Card>)}
</main>}
