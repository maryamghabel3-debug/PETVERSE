'use client'
import { useState, useRef } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const initialProducts = [
  {id:'p1', name:'رویال کنین هاسکی Adult', price:'1,280,000', price_raw:1280000, best:true, stock:true},
  {id:'p2', name:'تشویقی تریتس مرغ', price:'340,000', price_raw:340000, best:false, stock:true},
  {id:'p3', name:'قلاده GPS PetTracer', price:'2,100,000', price_raw:2100000, best:true, stock:true},
  {id:'p4', name:'شامپو ضد حساسیت', price:'195,000', price_raw:195000, best:false, stock:false},
]

export default function Shop(){
  const [q,setQ]=useState('')
  const [products,setProducts]=useState(initialProducts)
  const [cart,setCart]=useState<any[]>([])
  const [toast,setToast]=useState('')
  const [vsLoading,setVsLoading]=useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const showToast=(m:string)=>{ setToast(m); setTimeout(()=>setToast(''),2200) }

  const doSearch = ()=>{
    if(!q.trim()){ setProducts(initialProducts); return }
    const filtered = initialProducts.filter(p=> p.name.includes(q))
    setProducts(filtered.length? filtered : initialProducts)
    showToast('جستجو: '+q+' – '+filtered.length+' نتیجه')
  }

  const visualSearch = async ()=>{
    const f = fileRef.current?.files?.[0]
    if(f){
      setVsLoading(true)
      showToast('تحلیل تصویر با CLIP…')
      await new Promise(r=>setTimeout(r,1200))
      setVsLoading(false)
      setProducts([...initialProducts].sort((a,b)=> (b.best?1:0)-(a.best?1:0)))
      showToast('۳ محصول مشابه پیدا شد ✓')
      if(fileRef.current) fileRef.current.value=''
      return
    }
    fileRef.current?.click()
  }

  const addToCart = (p:any)=>{
    if(!p.stock){ showToast('ناموجود – Backorder فعال شد'); return }
    setCart(c=>{
      const ex=c.find((x:any)=>x.id===p.id)
      if(ex) return c.map((x:any)=> x.id===p.id ? {...x, qty:x.qty+1}:x)
      return [...c, {...p, qty:1}]
    })
    showToast(p.name + ' → سبد اضافه شد ✓')
  }

  const cartTotal = cart.reduce((s:number,i:any)=> s + i.price_raw * i.qty, 0)
  const cartCount = cart.reduce((s:number,i:any)=> s+i.qty, 0)

  return <main style={{maxWidth:1000,margin:'0 auto',padding:16}} dir="rtl">
    {toast && <div style={{position:'fixed',top:16,left:'50%',transform:'translateX(-50%)',background:'#111',color:'#fff',padding:'8px 16px',borderRadius:12,fontSize:13,zIndex:50}}>{toast}</div>}
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
      <h1 style={{fontSize:24,fontWeight:700}}>Commerce هوشمند</h1>
      <button onClick={()=> cartCount>0 && alert('سبد: \n' + cart.map((c:any)=>'• '+c.name+' ×'+c.qty).join('\n') + '\n\nجمع: ' + cartTotal.toLocaleString('fa-IR') + ' تومان')}
        style={{background:'#fff',border:'1px solid #ffd2be',padding:'8px 14px',borderRadius:12,fontSize:13,cursor:'pointer'}}>
        🛒 سبد {cartCount>0 && <span style={{background:'#FF6B4A',color:'#fff',borderRadius:99,padding:'1px 6px',fontSize:11,marginRight:4}}>{cartCount}</span>}
      </button>
    </div>
    <Card>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=> e.key==='Enter' && doSearch()}
          placeholder="جستجو محصول / نژاد / برند…"
          style={{flex:1,minWidth:200,border:'1px solid #ddd',borderRadius:12,padding:'10px 12px'}}/>
        <Button onClick={doSearch}>🔍 جستجو</Button>
        <Button onClick={visualSearch} >{vsLoading ? '...' : '📷 Visual Search'}</Button>
        <input ref={fileRef} type="file" accept="image/*" hidden onChange={visualSearch}/>
      </div>
      <p style={{fontSize:12,color:'#666',marginTop:8}}>CLIP/ViT + FAISS – ۱۰+ منبع قیمت – Best Price Assist – Backorder Agent</p>
    </Card>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:12,marginTop:16}}>
      {products.map(p=>(
        <Card key={p.id}>
          <div style={{height:96,background:'linear-gradient(135deg,#fff1e8,#fffaf5)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,marginBottom:8}}>📦</div>
          <b style={{fontSize:14}}>{p.name}</b>
          <div style={{fontSize:13,marginTop:4}}>{p.price} تومان {p.best && <span style={{color:'#16a34a',fontSize:11}}>Best Price ✓</span>}</div>
          <div style={{fontSize:11,color: p.stock ? '#16a34a' : '#dc2626',marginTop:2}}>{p.stock ? 'موجود' : 'ناموجود – Backorder'}</div>
          <div style={{display:'flex',gap:6,marginTop:10}}>
            <button onClick={()=>addToCart(p)} style={{flex:1,background:'#FF6B4A',color:'#fff',border:'none',borderRadius:12,padding:'9px',fontSize:13,cursor:'pointer'}}>
              {p.stock ? 'افزودن به سبد' : 'سفارش‌گذاری'}
            </button>
            <button onClick={()=>showToast('مقایسه قیمت ۱۲ فروشگاه')} style={{border:'1px solid #ddd',background:'#fff',borderRadius:12,padding:'0 10px'}}>⇄</button>
          </div>
        </Card>
      ))}
    </div>
    {cart.length>0 && (
      <div style={{marginTop:16,background:'#fff',border:'1px solid #ffe3d6',borderRadius:16,padding:16}}>
        <b>سبد خرید ({cartCount} قلم)</b>
        {cart.map((c:any)=><div key={c.id} style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:'1px dashed #f0d9cd',fontSize:13}}><span>{c.name} ×{c.qty}</span><span>{(c.price_raw*c.qty).toLocaleString('fa-IR')} ت</span></div>)}
        <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,marginTop:8}}><span>جمع کل:</span><span>{cartTotal.toLocaleString('fa-IR')} تومان</span></div>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <Button onClick={()=>showToast('انتقال به زرین‌پال… (دمو)')}>پرداخت – زرین‌پال</Button>
          <button onClick={()=>showToast('Coinbase Commerce – به‌زودی')} style={{border:'1px solid #ddd',background:'#fff',borderRadius:12,padding:'8px 14px',fontSize:13}}>💳 Crypto</button>
          <button onClick={()=>{setCart([]); showToast('سبد خالی شد')}} style={{marginRight:'auto',color:'#888',background:'none',border:'none',fontSize:12,cursor:'pointer'}}>خالی کردن</button>
        </div>
      </div>
    )}
  </main>
}