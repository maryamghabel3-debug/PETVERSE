'use client'
import { useState } from 'react'
import { Card } from '../ui/Card'

export default function FeedCard({post}:{post:any}){
  const [liked,setLiked]=useState(false)
  const [likes,setLikes]=useState(post.likes||0)
  const [commentOpen,setCommentOpen]=useState(false)
  const [comment,setComment]=useState('')
  const [comments,setComments]=useState<string[]>([])

  const toggleLike=()=>{
    const next=!liked
    setLiked(next)
    setLikes(l=> next ? l+1 : l-1)
    // fire API (best-effort)
    fetch((process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000')+'/v1/posts/'+(post.id||'1')+'/like',
      {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({liked:next})}
    ).catch(()=>{})
  }

  const sendComment=()=>{
    if(!comment.trim()) return
    setComments(c=>[...c, comment.trim()])
    setComment('')
  }

  return <Card>
  <div style={{display:'flex',gap:12}}>
    <div style={{width:40,height:40,borderRadius:999,background:'#ffe7d6',display:'flex',alignItems:'center',justifyContent:'center'}}>🐾</div>
    <div style={{flex:1}}>
      <div><b>{post.pet}</b> <span style={{fontSize:12,color:'#777'}}>• {post.club} • {post.time}</span></div>
      <p style={{marginTop:4}}>{post.text}</p>
      {post.img && <div style={{marginTop:8,height:160,background:'linear-gradient(135deg,#ffe9df,#fff5ef)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:28}}>📸</div>}
      <div style={{display:'flex',gap:14,alignItems:'center',marginTop:10,fontSize:13,color:'#555',flexWrap:'wrap'}}>
        <button onClick={toggleLike} style={{border:'none',background:'none',cursor:'pointer',color: liked ? '#e11d48' : '#555',fontWeight: liked?700:400}}>
          {liked ? '❤️' : '🤍'} {likes}
        </button>
        <button onClick={()=>setCommentOpen(o=>!o)} style={{border:'none',background:'none',cursor:'pointer',color:'#555'}}>
          💬 {post.comments + comments.length}
        </button>
        <button onClick={()=>{navigator.share ? navigator.share({title:post.pet,text:post.text}).catch(()=>{}) : alert('لینک کپی شد!')}} style={{border:'none',background:'none',cursor:'pointer',color:'#555'}}>↗️ اشتراک</button>
        <span style={{marginRight:'auto',fontSize:11,color:'#888'}}>{post.location}</span>
      </div>
      {commentOpen && (
        <div style={{marginTop:10, borderTop:'1px solid #f0d9cd', paddingTop:10}}>
          {comments.map((c,i)=><div key={i} style={{fontSize:13,background:'#fffaf5',padding:'6px 10px',borderRadius:10,marginBottom:4}}>شما: {c}</div>)}
          <div style={{display:'flex',gap:6}}>
            <input
              value={comment}
              onChange={e=>setComment(e.target.value)}
              onKeyDown={e=> e.key==='Enter' && sendComment()}
              placeholder="نظر بنویسید…"
              style={{flex:1,border:'1px solid #ddd',borderRadius:10,padding:'8px 10px',fontSize:13}}
            />
            <button onClick={sendComment} style={{background:'#FF6B4A',color:'#fff',border:'none',borderRadius:10,padding:'0 14px',fontSize:13,cursor:'pointer'}}>ارسال</button>
          </div>
        </div>
      )}
    </div>
  </div>
</Card>}
