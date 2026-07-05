import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LivekitService } from './livekit.service';
@Controller('vetcare')
export class VetCareController {
  constructor(private livekit: LivekitService){}
  @Get('vets') vets(){
    return [
      {id:'v1', name:'دکتر سارا احمدی', license:'IR-43521', specialties:['داخلی','گوارش'], rating:4.8, verified:true, price_irr:450000, city:'تهران'},
      {id:'v2', name:'دکتر علی رضایی', license:'IR-29884', specialties:['جراحی'], rating:4.6, verified:true, price_irr:650000, city:'تهران'},
      {id:'v3', name:'Dr. Aisha Al-Maktoum', license:'UAE-DHA-8821', specialties:['Emergency'], rating:4.9, verified:true, price_aed:220, city:'Dubai'}
    ]
  }
  @Post('room/token') token(@Body() b:any){
    const room = b.appointmentId || 'petverse-'+Date.now();
    const identity = b.userId || 'pet_owner_fa';
    return this.livekit.createRoomToken(identity, room);
  }
  @Post('prescription') prescription(@Body() b:any){
    return { id:'rx_'+Date.now(), issued_at:new Date().toISOString(), vet:b.vetId, pet:b.petId, items:b.items||[], note_fa:'نسخه دیجیتال – نیاز به تایید داروخانه', 
      disclaimer:'e-prescription demo – not clinically valid without licensed vet signature' }
  }
}
