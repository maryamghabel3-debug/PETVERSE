import { Controller, Post, Body, Get } from '@nestjs/common';
@Controller('insurance')
export class InsuranceController {
  @Post('quote') quote(@Body() b:any){
    const base = b.species==='cat'?25:35;
    return { quotes:[
      {provider:'Lemonade', monthly_usd: base, coverage:10000},
      {provider:'Cover Genius', monthly_usd: Math.round(base*1.6), coverage:15000}
    ], locale:b.locale||'fa'}
  }
  @Post('claim') claim(){ return {claim_id:'CLM-'+Date.now(), status:'submitted'} }
  @Get('partners') partners(){ return [{name:'Lemonade', regions:['US','EU','UAE']},{name:'Cover Genius', regions:['UK','EU','APAC']}] }
}
