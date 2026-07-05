'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
export default function Shop(){
  const [q,setQ]=useState('')
  return <main className="max-w-4xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-3">Commerce هوشمند</h1>
    <Card>
      <div className="flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="جستجو یا آپلود عکس..." className="flex-1 border rounded-xl px-3 py-2"/>
        <Button>🔍 Visual Search</Button>
        <Button>📷</Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">CLIP/ViT + FAISS – 10 منبع قیمت – Best Price Assist</p>
    </Card>
    <div className="grid md:grid-cols-3 gap-3 mt-4">
      {[
        {name:'رویال کنین هاسکی Adult', price:'1,280,000', best:true},
        {name:'تشویقی تریتس مرغ', price:'340,000', best:false},
        {name:'قلاده GPS PetTracer', price:'2,100,000', best:true},
      ].map(p=><Card key={p.name}>
        <div className="h-24 bg-orange-50 rounded-lg mb-2 flex items-center justify-center">📦</div>
        <b className="text-sm">{p.name}</b>
        <div className="text-sm mt-1">{p.price} تومان {p.best && <span className="text-green-600 text-xs">Best Price ✓</span>}</div>
        <Button className="w-full mt-2 text-sm">افزودن</Button>
      </Card>)}
    </div>
  </main>
}
