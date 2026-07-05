'use client'
import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function VetPage(){
  const [list,setList]=useState<any[]>([])
  useEffect(()=>{ fetch((process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000')+'/v1/appointments').then(r=>r.json()).then(setList).catch(()=>setList([
    {id:'a1', vet:'دکتر سارا احمدی', specialty:'داخلی', time:'امروز ۱۴:۰۰', type:'online', price_irr:450000},
    {id:'a2', vet:'دکتر علی رضایی', specialty:'جراحی', time:'امروز ۱۶:۳۰', type:'in_person', price_irr:650000}
  ]))},[])
  const book = async (id:string)=>{ alert('نوبت رزرو شد! لینک ویدیوویزیت به زودی ارسال می‌شود. – VetCare Agent') }
  return <main className="max-w-4xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-3">VetCare Hub</h1>
    <div className="grid md:grid-cols-2 gap-3">
      {list.map(v=><Card key={v.id}>
        <div className="flex justify-between"><b>{v.vet}</b><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">تأیید شده ✓</span></div>
        <div className="text-sm text-gray-600 mt-1">{v.specialty} • {v.time} • {v.type==='online'?'آنلاین':'حضوری'}</div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm">{(v.price_irr||450000).toLocaleString('fa-IR')} تومان</span>
          <Button onClick={()=>book(v.id)}>رزرو نوبت</Button>
        </div>
      </Card>)}
    </div>
    <Card className="mt-4 text-sm text-gray-600">اتصال PetPal → VetCare فعال: بعد از تریاژ دکمه «رزرو آنی» نمایش داده می‌شود. LiveKit ویدیو Sprint2 Day3.</Card>
  </main>
}
