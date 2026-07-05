'use client'
import { useState, useMemo } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Card } from '../ui/Card'

const interests = [
  'پیاده‌روی','تربیت','نجات','غذای خانگی','گربه‌های خانگی','توله',
  'رفتارشناسی','سفر با پت','واکسیناسیون','بیمه پت','آرایش پت','عکاسی پت'
]

// نژادهای کامل – قابل جستجو – + گزینه «سایر – خودم می‌نویسم»
const BREEDS: Record<string,string[]> = {
  dog: [
    'هاسکی سیبری','ژرمن شپرد','گلدن رتریور','لابرادور رتریور',
    'شیتزو','پامرانین','دوبرمن','روتوایلر','بولداگ انگلیسی','بولداگ فرانسوی',
    'پودل (استاندارد/مینی/توی)','بیگل','داشهوند','کورگی','مالینویز',
    'ساموید','چاو چاو','آکیتا','مالتیز','یورکشایر تریر',
    'باکسر','گریت دین','سنت برنارد','برنز مانتین','اسپیتز',
    'اشپیتز ژاپنی','چی‌واوا','پاگ','دالمیشن','هاسکی آلاسکن',
    'کانی کورسو','پیت‌بول','استفوردشایر','سرابی','ژرمن بلک',
    'میکس / نجات‌یافته','سایر...'
  ],
  cat: [
    'پرشین','اسکاتیش فولد','بریتیش شورت‌هیر','سیامی','مین‌کون',
    'رگدال','بنگال','اسفینکس','ح-مالی','DSH / میکس خانگی',
    'بیرمن','روسی آبی','سیبرین','ترکیش آنگورا','اگزوتیک شورت‌هیر',
    'نروژی فارست','صاوانا','بمبئی','تونکینیز','سایر...'
  ],
  bird: ['عروس هلندی','مرغ عشق','کاسکو','کاکادو','قناری','فنچ','مرغ مینا','سایر...'],
  rabbit: ['لوپ هلندی','مینی رکس','آنگورا','شیررأس','فلاندر جاینت','سایر...'],
  hamster: ['سوری','کمبل','روبورفسکی','چینی','سایر...'],
  reptile: ['ایگوانا','لاک‌پشت','مار ذرت','گکو پلنگی','آفتاب‌پرست','سایر...'],
  other: ['سایر...']
}

const SPECIES = [
  {id:'dog', label:'سگ 🐶', icon:'🐶'},
  {id:'cat', label:'گربه 🐱', icon:'🐱'},
  {id:'bird', label:'پرنده 🐦', icon:'🐦'},
  {id:'rabbit', label:'خرگوش 🐰', icon:'🐰'},
  {id:'hamster', label:'همستر 🐹', icon:'🐹'},
  {id:'reptile', label:'خزنده 🦎', icon:'🦎'},
  {id:'other', label:'سایر 🐾', icon:'🐾'},
]

export default function OnboardingWizard(){
  const [step,setStep]=useState(1)
  const [saving,setSaving]=useState(false)
  const [toast,setToast]=useState('')
  const [form,setForm]=useState<any>({
    name:'', species:'dog', breed:'', breed_custom:'',
    ageMonth:'', weightKg:'', gender:'unknown', neutered:false,
    microchip:'', passport_no:'',
    vaccine_rabies:'', vaccine_dhpp:'',
    vaccine_card:null as File | null,
    interests:[], location_opt_in:false,
    owner_name:'', owner_phone:''
  })

  const showToast=(m:string)=>{ setToast(m); setTimeout(()=>setToast(''),2200) }

  const breedList = useMemo(()=> BREEDS[form.species] || BREEDS.other, [form.species])
  const needCustomBreed = form.breed==='سایر...'
  const finalBreed = needCustomBreed ? form.breed_custom : form.breed

  const toggleInterest = (i:string)=> setForm((f:any)=>({...f, interests: f.interests.includes(i)? f.interests.filter((x:string)=>x!==i): [...f.interests,i]}))

  const savePet = async ()=>{
    setSaving(true)
    const payload = {...form, breed: finalBreed}
    try{
      // 1) local
      localStorage.setItem('petverse_pet', JSON.stringify(payload))
      localStorage.setItem('petverse_user', JSON.stringify({name: form.owner_name, locale:'fa'}))
      // 2) API – اگر بالا بود
      await fetch((process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000')+'/v1/pets',{
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          name: form.name,
          species: form.species,
          breed: finalBreed,
          ageMonth: Number(form.ageMonth)||null,
          weightKg: Number(form.weightKg)||null,
          gender: form.gender,
          microchip: form.microchip,
          passport_no: form.passport_no,
          interests: form.interests
        })
      }).catch(()=>{/* offline ok */})
      showToast('پروفایل پت ذخیره شد ✓')
      setTimeout(()=> setStep(4), 600)
    }finally{ setSaving(false) }
  }

  return <Card className="max-w-2xl mx-auto relative">
    {toast && <div style={{position:'absolute',top:-12,right:12,background:'#16a34a',color:'#fff',padding:'6px 12px',borderRadius:12,fontSize:13,boxShadow:'0 4px 12px rgba(0,0,0,.15)'}}>{toast}</div>}
    
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
      <h2 style={{fontSize:20,fontWeight:700}}>پروفایل مشترک انسان + پت 🐾</h2>
      <span style={{fontSize:12,color:'#888'}}>مرحله {step} از 4</span>
    </div>

    {/* Step 1 – گونه */}
    {step===1 && <div style={{display:'grid',gap:12}}>
      <div>
        <label style={{fontSize:13,color:'#444'}}>نام پت *</label>
        <Input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="مثلاً لونا / میلو / جیکو" />
      </div>

      <div>
        <div style={{fontSize:13,color:'#444',marginBottom:6}}>گونه حیوان *</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(110px,1fr))',gap:8}}>
          {SPECIES.map(s=>
            <button key={s.id} type="button"
              onClick={()=>setForm({...form, species:s.id, breed:''})}
              style={{
                padding:'10px',borderRadius:14,border: form.species===s.id?'2px solid #FF6B4A':'1px solid #ddd',
                background: form.species===s.id ? '#fff3ef' : '#fff',
                fontSize:13, cursor:'pointer'
              }}>
              {s.label}
            </button>
          )}
        </div>
        <small style={{color:'#888'}}>اگر حیوان شما در لیست نیست: «سایر 🐾» را بزنید – می‌توانید نام گونه را دستی وارد کنید.</small>
      </div>

      {form.species==='other' && (
        <div>
          <label style={{fontSize:13}}>نام گونه (اختیاری)</label>
          <Input placeholder="مثلا: سنجاب، میمون، ..." onChange={e=>setForm({...form, species_custom:e.target.value})} />
        </div>
      )}

      <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
        <Button disabled={!form.name} onClick={()=>setStep(2)}>بعدی →</Button>
      </div>
    </div>}

    {/* Step 2 – مشخصات بالینی */}
    {step===2 && <div style={{display:'grid',gap:12}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <div>
          <label style={{fontSize:13}}>نژاد *</label>
          <select
            value={form.breed}
            onChange={e=>setForm({...form, breed:e.target.value})}
            style={{width:'100%',padding:'10px',border:'1px solid #ddd',borderRadius:12, background:'#fff'}}
          >
            <option value="">انتخاب نژاد… ({breedList.length} گزینه)</option>
            {breedList.map(b=><option key={b} value={b}>{b}</option>)}
          </select>
          <small style={{color:'#888'}}>لیست کامل + گزینه «سایر…»</small>
        </div>
        <div>
          <label style={{fontSize:13}}>اگر نژاد در لیست نبود</label>
          <Input
            disabled={!needCustomBreed}
            placeholder={needCustomBreed ? "نام نژاد را بنویسید…" : "اول «سایر…» را انتخاب کنید"}
            value={form.breed_custom}
            onChange={e=>setForm({...form, breed_custom:e.target.value})}
          />
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10}}>
        <div>
          <label style={{fontSize:13}}>سن (ماه)</label>
          <Input type="number" min="0" value={form.ageMonth} onChange={e=>setForm({...form, ageMonth:e.target.value})} placeholder="مثلاً 18" />
        </div>
        <div>
          <label style={{fontSize:13}}>وزن (kg) *</label>
          <Input type="number" step="0.1" value={form.weightKg} onChange={e=>setForm({...form, weightKg:e.target.value})} placeholder="مثلاً 22.5" />
        </div>
        <div>
          <label style={{fontSize:13}}>جنسیت</label>
          <select value={form.gender} onChange={e=>setForm({...form, gender:e.target.value})} style={{width:'100%',padding:'10px',border:'1px solid #ddd',borderRadius:12}}>
            <option value="unknown">نامشخص</option>
            <option value="male">نر ♂</option>
            <option value="female">ماده ♀</option>
          </select>
        </div>
      </div>

      <label style={{display:'flex',alignItems:'center',gap:8,fontSize:13}}>
        <input type="checkbox" checked={form.neutered} onChange={e=>setForm({...form, neutered:e.target.checked})} />
        عقیم شده / عقیم‌سازی شده است
      </label>

      <div style={{display:'flex',gap:10,justifyContent:'space-between',marginTop:4}}>
        <button className="px-4 py-2 rounded-xl border" onClick={()=>setStep(1)}>← قبلی</button>
        <Button onClick={()=>setStep(3)} disabled={!finalBreed}>بعدی →</Button>
      </div>
    </div>}

    {/* Step 3 – مدارک پزشکی */}
    {step===3 && <div style={{display:'grid',gap:12}}>
      <h3 style={{fontSize:16,fontWeight:700}}>شناسنامه و واکسیناسیون (اختیاری – بعداً هم می‌توانید تکمیل کنید)</h3>
      
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <div>
          <label style={{fontSize:13}}>شماره میکروچیپ</label>
          <Input value={form.microchip} onChange={e=>setForm({...form, microchip:e.target.value})} placeholder="۹۸۵۱۱۲۰۰۰۱۲۳۴۵۶" dir="ltr" />
        </div>
        <div>
          <label style={{fontSize:13}}>شماره پاسپورت / شناسنامه پت</label>
          <Input value={form.passport_no} onChange={e=>setForm({...form, passport_no:e.target.value})} placeholder="IR-VET-..." dir="ltr" />
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <div>
          <label style={{fontSize:13}}>آخرین واکسن هاری</label>
          <Input type="date" value={form.vaccine_rabies} onChange={e=>setForm({...form, vaccine_rabies:e.target.value})} />
        </div>
        <div>
          <label style={{fontSize:13}}>آخرین واکسن ترکیبی (DHPP / سه‌گانه)</label>
          <Input type="date" value={form.vaccine_dhpp} onChange={e=>setForm({...form, vaccine_dhpp:e.target.value})} />
        </div>
      </div>

      <div>
        <label style={{fontSize:13}}>آپلود کارت واکسن / دفترچه سلامت (عکس / PDF)</label>
        <input type="file" accept="image/*,.pdf"
          onChange={e=> setForm({...form, vaccine_card: e.target.files?.[0] || null})}
          style={{width:'100%',padding:8,border:'1px dashed #ffbeaa',borderRadius:12,background:'#fffaf8'}}
        />
        {form.vaccine_card && <small style={{color:'#16a34a'}}>✓ فایل انتخاب شد: {(form.vaccine_card as File).name}</small>}
        <small style={{display:'block',color:'#888'}}>فعلاً لوکال ذخیره می‌شود – بعد از اتصال S3 آپلود خودکار فعال است</small>
      </div>

      <hr style={{border:'none',borderTop:'1px solid #f0d9cd'}}/>

      <div>
        <p style={{fontSize:14,fontWeight:600,marginBottom:6}}>علاقه‌ها – برای تطبیق جامعه</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
          {interests.map(i=>(
            <button key={i} type="button" onClick={()=>toggleInterest(i)}
              style={{
                padding:'6px 12px',borderRadius:999,border:'1px solid #ddd',
                background: form.interests.includes(i) ? '#FF6B4A' : '#fff',
                color: form.interests.includes(i) ? '#fff' : '#333',
                fontSize:13, cursor:'pointer'
              }}>
              {form.interests.includes(i) ? '✓ ' : ''}{i}
            </button>
          ))}
        </div>
      </div>

      <label style={{display:'flex',gap:8,alignItems:'start',fontSize:13,background:'#fffaf5',padding:10,borderRadius:12,border:'1px solid #ffe1d3'}}>
        <input type="checkbox" checked={form.location_opt_in} onChange={e=>setForm({...form, location_opt_in:e.target.checked})} style={{marginTop:3}}/>
        <span>مایلم پت‌دارهای نزدیک من (۵–۱۰ کیلومتر – با ناشناس‌سازی مکانی) را ببینم – <b>اختیاری – هر زمان قابل خاموش کردن</b></span>
      </label>

      <div style={{display:'flex',justifyContent:'space-between',marginTop:4}}>
        <button className="px-4 py-2 rounded-xl border" onClick={()=>setStep(2)}>← قبلی</button>
        <Button onClick={savePet} disabled={saving}>{saving ? 'در حال ذخیره…' : 'ذخیره و ادامه →'}</Button>
      </div>
    </div>}

    {/* Step 4 – Success */}
    {step===4 && <div style={{textAlign:'center',padding:'12px 0'}}>
      <div style={{fontSize:42}}>🎉🐾</div>
      <p style={{fontSize:18, fontWeight:700, marginTop:8}}>خوش اومدی {form.name || 'دوست پت‌دار'}!</p>
      <div style={{fontSize:13,color:'#444',marginTop:8,lineHeight:1.8}}>
        گونه: <b>{SPECIES.find(s=>s.id===form.species)?.label || form.species}</b><br/>
        نژاد: <b>{finalBreed || 'ثبت‌شده'}</b>
        {form.weightKg && <> • وزن: <b>{form.weightKg} kg</b></>}<br/>
        {form.microchip && <>میکروچیپ: <code dir="ltr">{form.microchip}</code><br/></>}
        باشگاه فعال: <b>{finalBreed ? `${finalBreed}‌کلاب` : 'پت‌دوستان'}</b><br/>
        علاقه: {form.interests.slice(0,3).join('، ') || '—'}
      </div>
      <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:16,flexWrap:'wrap'}}>
        <Button onClick={()=>location.href='/feed'}>برو به فید →</Button>
        <button className="px-4 py-2 rounded-xl border" onClick={()=>location.href='/pal'}>تست PetPal 🧠</button>
        <button className="px-4 py-2 rounded-xl border" onClick={()=>location.href='/profile'}>مشاهده پروفایل</button>
      </div>
      <p style={{fontSize:11,color:'#888',marginTop:12}}>پروفایل در localStorage ذخیره شد + اگر API بالا باشد به سرور هم ارسال شد.</p>
    </div>}
  </Card>
}