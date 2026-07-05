'use client'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
export default function TriageBox(){
  const [text,setText]=useState('')
  const [res,setRes]=useState<any>(null)
  const [loading,setLoading]=useState(false)
  const submit=async()=>{
    setLoading(true)
    try{
      const r=await fetch((process.env.NEXT_PUBLIC_AI_URL||'http://localhost:4100')+'/triage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,lang:'fa',mode:'health',pet:{species:'dog',ageMonth:18}})})
      setRes(await r.json())
    }catch(e){ setRes({error:'AI offline – نسخه دموی محلی'})}
    setLoading(false)
  }
  return <div className="grid md:grid-cols-2 gap-4">
    <Card><h3 className="font-bold mb-2">PetPal – تریاژ</h3>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="علائم رو بنویس... مثلاً: استفراغ ۲ بار، بی‌حالی..." className="w-full h-32 border rounded-xl p-2"/>
      <div className="mt-2 flex gap-2"><Button onClick={submit} disabled={loading}>{loading?'...':'تحلیل کن'}</Button>
      <span className="text-xs text-gray-500">آموزشی‌ست، جای ویزیت نیست</span></div>
    </Card>
    <Card>{res? <div>
      {res.red_flag && <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-2 font-bold">🚨 پرچم قرمز – اورژانس!</div>}
      <p><b>خلاصه:</b> {res.summary||res.error}</p>
      <p className="mt-2 text-sm"><b>توصیه:</b> {res.recommendation}</p>
      {res.next_action && <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded-lg text-sm">رزرو نوبت VetCare →</button>}
      <div className="text-xs text-gray-400 mt-2">confidence: {res.confidence}</div>
    </div> : <p className="text-gray-500">پاسخ اینجا نمایش داده می‌شود.</p>}</Card>
  </div>
}
