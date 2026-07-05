'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
export default function Room(){
  const [token,setToken]=useState<any>(null)
  const join=async()=>{
    const r=await fetch((process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000')+'/v1/vetcare/room/token',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({appointmentId:'apt_demo',userId:'maryam'})}).then(x=>x.json()).catch(()=>({token:'demo',url:'wss://petverse.livekit.cloud',room:'demo'}))
    setToken(r)
  }
  return <main className="max-w-3xl mx-auto p-4">
    <h1 className="text-xl font-bold mb-3">ویزیت ویدیویی LiveKit</h1>
    <Card>
      {!token ? <div>
        <p className="mb-3 text-sm text-gray-700">نوبت شما: دکتر سارا احمدی – آنلاین</p>
        <Button onClick={join}>ورود به اتاق ویدیو</Button>
        <p className="text-xs text-gray-500 mt-2">E2E encrypted • WebRTC • LiveKit</p>
      </div> : <div>
        <div className="bg-black text-green-400 rounded-xl p-6 text-center font-mono text-sm">
          🔴 LIVE<br/>room: {token.room}<br/>url: {token.url}<br/>token: {String(token.token).slice(0,32)}...
        </div>
        <p className="text-xs text-gray-500 mt-2">در نسخه production اینجا <code>&lt;LiveKitRoom&gt;</code> رندر می‌شود.</p>
        <div className="mt-3 flex gap-2">
          <Button>🎤 Mute</Button>
          <Button>📷 Cam</Button>
          <Button>📄 اشتراک نسخه</Button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-xl">قطع تماس</button>
        </div>
      </div>}
    </Card>
    <Card className="mt-3 text-sm">
      <b>e-Prescription demo</b>
      <p className="text-gray-600">بعد از ویزیت، نسخه دیجیتال اینجا نمایش داده می‌شود + ارسال به داروخانه همکار.</p>
    </Card>
  </main>
}
