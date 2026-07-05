import { Controller, Get, Post, Body } from '@nestjs/common';
@Controller('appointments')
export class AppointmentsController {
  @Get() list(){ return [
    {id:'a1', vet:'دکتر سارا احمدی', specialty:'داخلی', time:'2026-07-06 14:00', type:'online', price_irr: 450000},
    {id:'a2', vet:'دکتر علی رضایی', specialty:'جراحی', time:'2026-07-06 16:30', type:'in_person', price_irr: 650000}
  ]}
  @Post() book(@Body() dto:any){
    return { id:'apt_'+Date.now(), status:'confirmed', livekit_url:`https://meet.petverse.app/room/${Date.now()}`, ...dto,
      message_fa:'نوبت شما تایید شد. لینک ویدیوویزیت ۱۵ دقیقه قبل فعال می‌شود.' }
  }
}
