import { Card } from '../ui/Card'
export default function FeedCard({post}:{post:any}){ return <Card>
  <div className="flex gap-3">
    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">🐾</div>
    <div><b>{post.pet}</b> <span className="text-xs text-gray-500">• {post.club} • {post.time}</span>
    <p className="mt-1">{post.text}</p>
    {post.img && <div className="mt-2 h-40 bg-orange-50 rounded-xl flex items-center justify-center text-3xl">📸</div>}
    <div className="text-xs text-gray-500 mt-2">{post.location} • ❤️ {post.likes} • 💬 {post.comments}</div>
    </div>
  </div>
</Card>}
