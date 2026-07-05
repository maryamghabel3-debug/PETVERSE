import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
export default function Insurance(){return <main className="max-w-4xl mx-auto p-4"><h1 className="text-2xl font-bold mb-3">بازار بیمه حیوانات</h1>
<div className="grid md:grid-cols-2 gap-3">
{[ 
  {p:'Lemonade',plan:'Accident',price:'$35/mo',cov:'$10,000'},
  {p:'Cover Genius',plan:'Comprehensive',price:'$56/mo',cov:'$15,000'},
].map(o=><Card key={o.p}><b>{o.p}</b> – {o.plan}<div className="mt-2">{o.price} • پوشش {o.cov}</div><Button className="mt-3 w-full">دریافت پیش‌فاکتور</Button></Card>)}
</div>
<Card className="mt-4 text-sm text-gray-600">صدور توسط شریک دارای مجوز – مدیریت خسارت هوشمند – ثبت مدارک OCR</Card>
</main>}
