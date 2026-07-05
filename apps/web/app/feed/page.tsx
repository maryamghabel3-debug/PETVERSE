import FeedCard from '@/components/feed/FeedCard'
const mock=[
 {pet:'لونا 🐶 هاسکی', club:'هاسکی‌کلاب تهران', time:'۲ ساعت پیش', text:'امروز پارک ملت پیاده‌روی گروهی بود، لونا ۳ دوست جدید پیدا کرد!', likes:24, comments:5, location:'تهران – ۲.1km', img:true},
 {pet:'میلو 🐱 پرشین', club:'گربه‌های خانگی', time:'۴ ساعت پیش', text:'کسی غذای خانگی بدون مرغ سراغ داره؟ آلرژی داریم.', likes:12, comments:8, location:'استانبول'},
 {pet:'دکتر سارا ✓', club:'کانال دامپزشکان', time:'دیروز', text:'یادآوری واکسن هاری – چک کنید کارت واکسن پت‌تون رو.', likes:56, comments:3, location:'رسمی'},
]
export default function Feed(){ return <main className="max-w-xl mx-auto p-4 space-y-3">
  <h1 className="text-2xl font-bold">فید محلی</h1>
  <div className="flex gap-2 text-xs mb-2"><span className="bg-orange-500 text-white px-3 py-1 rounded-full">زمانی+محلی</span><span className="border px-3 py-1 rounded-full">باشگاه‌ها</span><span className="border px-3 py-1 rounded-full">نزدیک من</span></div>
  {mock.map((p,i)=><FeedCard key={i} post={p}/>)}
</main>}
