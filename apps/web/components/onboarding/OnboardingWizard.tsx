'use client'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Card } from '../ui/Card'

const interests = ['پیاده‌روی','تربیت','نجات','غذای خانگی','گربه‌های خانگی','توله','رفتارشناسی','سفر با پت']
const breedsDog = ['هاسکی','ژرمن','گلدن','شیتزو','پامرانین','دوبرمن','میکس']
const breedsCat = ['پرشین','اسکاتیش','بریتیش','سیامی','DSH']

export default function OnboardingWizard(){
  const [step,setStep]=useState(1)
  const [form,setForm]=useState<any>({name:'',species:'dog',breed:'',age:'',interests:[]})
  const toggle = (i:string)=> setForm((f:any)=>({...f, interests: f.interests.includes(i)? f.interests.filter((x:string)=>x!==i): [...f.interests,i]}))
  return <Card className="max-w-xl mx-auto">
    <h2 className="text-xl font-bold mb-4">پروفایل مشترک انسان + پت 🐾</h2>
    {step===1 && <div className="space-y-3">
      <label>نام پت<Input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="مثلاً لونا"/></label>
      <div className="flex gap-3"><label><input type="radio" checked={form.species==='dog'} onChange={()=>setForm({...form,species:'dog'})}/> سگ</label>
      <label><input type="radio" checked={form.species==='cat'} onChange={()=>setForm({...form,species:'cat'})}/> گربه</label></div>
      <select className="w-full border rounded-xl p-2" value={form.breed} onChange={e=>setForm({...form,breed:e.target.value})}>
        <option value="">نژاد...</option>
        {(form.species==='dog'?breedsDog:breedsCat).map(b=><option key={b}>{b}</option>)}
      </select>
      <Input type="number" placeholder="سن (ماه)" value={form.age} onChange={e=>setForm({...form,age:e.target.value})}/>
      <Button onClick={()=>setStep(2)}>بعدی</Button>
    </div>}
    {step===2 && <div>
      <p className="mb-2 font-medium">علاقه‌ها را انتخاب کن (۳ تا):</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {interests.map(i=><button key={i} onClick={()=>toggle(i)} className={`px-3 py-1 rounded-full border text-sm ${form.interests.includes(i)?'bg-orange-500 text-white border-orange-500':'bg-white'}`}>{i}</button>)}
      </div>
      <div className="flex gap-2"><Button onClick={()=>setStep(1)}>قبلی</Button><Button onClick={()=>setStep(3)}>اتمام</Button></div>
    </div>}
    {step===3 && <div className="text-center py-4">
      <p className="text-lg">خوش اومدی {form.name || 'دوست پت‌دار'}! 🎉</p>
      <p className="text-sm text-gray-600 mt-2">باشگاه {form.breed||'پت‌دوستان'} + {form.interests.slice(0,2).join('، ')} برات فعال شد.</p>
      <div className="mt-4"><Button onClick={()=>location.href='/feed'}>برو به فید</Button></div>
    </div>}
    <div className="text-xs text-gray-400 mt-4">مرحله {step} از ۳ • موقعیت مکانی پیش‌فرض خاموش</div>
  </Card>
}
