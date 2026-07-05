import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Controller('auth')
export class AuthController {
  constructor(private jwt: JwtService){}
  @Post('otp') otp(@Body() b:any){ return {sent:true, to:b.phone||b.email, code_dev:'123456', message_fa:'کد تایید (دمو): 123456'} }
  @Post('verify') verify(@Body() b:any){
    const token = this.jwt.sign({ sub:'demo_user', email:b.email||'demo@petverse.app', locale:'fa' });
    return { access_token: token, user:{id:'demo', name:'مریم', locale:'fa'} }
  }
}
