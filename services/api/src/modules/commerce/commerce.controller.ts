import { Controller, Get, Query, Post, Body } from '@nestjs/common';
@Controller('commerce')
export class CommerceController {
  @Get('search') search(@Query('q') q:string){
    return { query:q, visual:false, results:[
      {id:'p1', title:'رویال کنین هاسکی', price_irr:1280000, merchant:'Digikala', best_price:true},
      {id:'p2', title:'Royal Canin Maxi Adult', price_aed:89, merchant:'Amazon.ae', best_price:false}
    ], sources:12 }
  }
  @Post('visual-search') visual(@Body() b:any){
    return { embedding_dim:512, matches:[
      {product_id:'p1', score:0.94}, {product_id:'p7', score:0.88}
    ], model:'CLIP-ViT-B/32 + FAISS' }
  }
  @Post('best-price-assist') bpa(@Body() b:any){
    return { eligible:true, refund_cap_irr: 150000, message_fa:'اگر ارزان‌تر پیدا کردی، اختلاف را برمی‌گردانیم.' }
  }
  @Post('backorder') backorder(@Body() b:any){
    return { backorder_id:'BO-'+Date.now(), max_price:b.max_price, status:'watching', consent:true }
  }
}
