import { Controller, Get, Post, Body } from '@nestjs/common';
@Controller('pets')
export class PetsController {
  @Get() list(){ return [{id:'1',name:'لونا',species:'dog',breed:'هاسکی',ageMonth:18},{id:'2',name:'میلو',species:'cat',breed:'پرشین'}] }
  @Post() create(@Body() dto:any){ return {id: 'new_'+Date.now(), ...dto} }
}
