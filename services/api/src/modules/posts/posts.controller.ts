import { Controller, Get, Query } from '@nestjs/common';
@Controller('posts')
export class PostsController {
  @Get('feed') feed(@Query('club') club?:string){
    return [
      {id:1, pet:'لونا 🐶', club:'هاسکی‌کلاب تهران', text:'پارک ملت عالی بود!', likes:24, location_fuzzy:'teh-6f2'},
      {id:2, pet:'میلو 🐱', club:'گربه‌های خانگی', text:'غذای خانگی بدون مرغ؟', likes:12}
    ].filter(p=>!club || p.club.includes(club))
  }
}
