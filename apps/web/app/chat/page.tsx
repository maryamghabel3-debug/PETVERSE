'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/Card'

const roomsInit = [
  {id:'husky', name:'هاسکی‌کلاب', count:124, msgs:[
    {u:'علی', t:'سلام بچه‌ها، جمعه پارک آب و آتش میایم؟'},
    {u:'سارا', t:'من هستم + لونا 🐾'},
    {u:'🤖', t:'Ice-breaker: توله‌تون این هفته چی یاد گرفت؟', sys:true},
  ]},
  {id:'puppy', name:'تربیت توله', count:56, msgs:[{u:'مربی',t:'جلسه امشب ۸ شب – بشین',sys:false}]},
  {id:'vet', name:'تهران vet Q&A', count:32, msgs:[]},
  {id:'milo', name:'میلو (PV)', count:1, msgs:[]},
]

export default function Chat(){
  const [rooms,setRooms]=useState(roomsInit)
  const [active,setActive]=useState('husky')
  const [text,setText]=useState('')
  const [typing,setTyping]=useState(false)
  const room = rooms.find(r=>r.id===active)!

  const send = ()=>{
    if(!text.trim()) return
    const msg={u:'شما',t:text.trim()}
    setRooms(rs=> rs.map(r=> r.id===active ? {...r, msgs:[...r.msgs, msg]} : r))
    setText('')
    setTyping(true)
    // fake AI ice-breaker / echo
    setTimeout(()=>{
      setTyping(false)
      const replies=[
        'عالیه! 👏',
        'لونا هم همینطور 😄',
        'عکس بفرست ببینیم!',
        'ما جمعه میایم پارک – می‌بینیمتون',
      ]
      const rep={u: 'سارا', t: replies[Math.floor(Math.random()*replies.length)]}
      setRooms(rs=> rs.map(r=> r.id===active ? {...r, msgs:[...r.msgs, rep]}:r))
    }, 900)
  }

  return <main className="max-w-5xl mx-auto p-4" style={{direction:'rtl'}}>
    <h1 style={{fontSize:22,fontWeight:700,marginBottom:12}}>گفتگو – E2E</h1>
    <div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:14, height:'70vh'}}>
      <Card>
        <b>گفتگوها</b>
        <div style={{marginTop:8}}>
          {rooms.map(c=>
            <div key={c.id}
              onClick={()=>setActive(c.id)}
              style={{
                padding:'10px',borderRadius:12,cursor:'pointer',
                background: active===c.id ? '#fff2ec' : 'transparent',
                borderRight: active===c.id ? '3px solid #FF6B4A' : '3px solid transparent',
                marginBottom:4
              }}>
              <div style={{fontWeight:600,fontSize:14}}>{c.name}</div>
              <div style={{fontSize:11,color:'#888'}}>{c.count} آنلاین • {c.msgs.length} پیام</div>
            </div>
          )}
        </div>
        <div style={{marginTop:12, fontSize:12, color:'#666', background:'#f9fafb', padding:8, borderRadius:10}}>
          🔒 رمزنگاری سرتاسری فعال<br/>📍 موقعیت: خاموش
        </div>
      </Card>

      <Card>
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
          <div style={{fontWeight:700,borderBottom:'1px solid #f0d9cd',paddingBottom:8}}>
            {room.name} <span style={{fontSize:12,color:'#888',fontWeight:400}}>• {room.count} آنلاین</span>
          </div>
          <div style={{flex:1, overflowY:'auto', padding:'12px 0', fontSize:14}}>
            {room.msgs.map((m,i)=>(
              <div key={i} style={{marginBottom:8, color: m.sys ? '#c2410c' : '#222'}}>
                {m.sys ? <span>🤖 {m.t}</span> : <><b>{m.u}:</b> {m.t}</>}
              </div>
            ))}
            {typing && <div style={{color:'#888',fontSize:12}}>در حال تایپ…</div>}
            {room.msgs.length===0 && <div style={{color:'#999'}}>هنوز پیامی نیست – سلام کن 👋</div>}
          </div>
          <div style={{display:'flex',gap:8,borderTop:'1px solid #f0d9cd',paddingTop:10}}>
            <input
              value={text}
              onChange={e=>setText(e.target.value)}
              onKeyDown={e=> e.key==='Enter' && send()}
              placeholder="پیام… E2E رمزنگاری شده"
              style={{flex:1,border:'1px solid #ddd',borderRadius:12,padding:'10px 12px'}}
            />
            <button onClick={send} disabled={!text.trim()}
              style={{background: text.trim() ? '#FF6B4A' : '#ccc', color:'#fff', border:'none', borderRadius:12, padding:'0 18px', cursor:'pointer', fontWeight:600}}>
              ارسال
            </button>
          </div>
          <div style={{fontSize:11,color:'#888',marginTop:6}}>
            Enter = ارسال • Shift+Enter = خط جدید • فایل/عکس: به‌زودی
          </div>
        </div>
      </Card>
    </div>
  </main>
}
