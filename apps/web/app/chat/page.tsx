import { Card } from '@/components/ui/Card'
export default function Chat(){ return <main className="max-w-4xl mx-auto p-4 grid md:grid-cols-3 gap-4 h-[80vh]">
  <Card className="md:col-span-1 overflow-y-auto"><h3 className="font-bold mb-2">گفتگوها</h3>
    {['هاسکی‌کلاب','تربیت توله','تهران vet Q&A','میلو (PV)'].map(c=><div key={c} className="p-2 hover:bg-orange-50 rounded-lg cursor-pointer">{c}</div>)}
  </Card>
  <Card className="md:col-span-2 flex flex-col"><div className="font-bold border-b pb-2">هاسکی‌کلاب</div>
    <div className="flex-1 py-3 text-sm space-y-2 overflow-y-auto">
      <div><b>علی:</b> سلام بچه‌ها، جمعه پارک آب و آتش میایم؟</div>
      <div><b>سارا:</b> من هستم + لونا 🐾</div>
      <div className="text-orange-600 text-xs">🤖 Ice-breaker: توله‌تون این هفته چی یاد گرفت؟</div>
    </div>
    <input className="border rounded-xl px-3 py-2" placeholder="پیام... E2E رمزنگاری شده"/>
  </Card>
</main>}
