import { Controller, Get } from '@nestjs/common';
@Controller('admin')
export class AdminController {
  @Get('kpis') kpis(){ return {
    wau:3842, mau:11200, dau_mau:0.34,
    triage_booking_conversion:0.194,
    gmv_usd:42100, take_rate:0.067,
    vet_nps:58,
    revenue:{ commerce:2820, vetcare:1940, saas:1200, data_opt_in:420 },
    trust:{ reports_rate:0.0021, moderation_avg_min:4.2 },
    iot:{ gps_online:412, feeder_online:188 }
  }}
}
