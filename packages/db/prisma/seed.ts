import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main(){
  const user = await prisma.user.upsert({
    where:{ email:'demo@petverse.app'},
    update:{},
    create:{ email:'demo@petverse.app', name:'مریم', locale:'fa', locationFuzzy:'teh-6f2'}
  })
  await prisma.pet.createMany({
    data:[
      {userId:user.id, name:'لونا', species:'dog', breed:'هاسکی', ageMonth:18, weightKg:22, temperament:'بازیگوش', interests:['پیاده‌روی','تربیت']},
      {userId:user.id, name:'میلو', species:'cat', breed:'پرشین', ageMonth:24, weightKg:4.5, temperament:'آرام', interests:['گربه‌های خانگی','غذای خانگی']}
    ], skipDuplicates:true
  })
  console.log('Seed done FA')
}
main()
