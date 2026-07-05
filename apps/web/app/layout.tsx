import './globals.css'
import { Vazirmatn } from 'next/font/google'
const vazir = Vazirmatn({ subsets: ['arabic','latin'] })
export const metadata = { title: 'PetVerse - خانه دوم پت‌دارها', description: 'شبکه اجتماعی، دامپزشکی آنلاین، خرید هوشمند' }
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (<html lang="fa" dir="rtl"><body className={vazir.className}><div className="min-h-screen bg-[#FFF9F5]">{children}</div></body></html>)
}
