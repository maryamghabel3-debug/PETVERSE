import { Injectable } from '@nestjs/common';
// npm i livekit-server-sdk
// import { AccessToken } from 'livekit-server-sdk';
@Injectable()
export class LivekitService {
  createRoomToken(identity: string, room: string){
    // DEMO – in prod use AccessToken
    const LIVEKIT_URL = process.env.LIVEKIT_URL || 'wss://petverse.livekit.cloud';
    // const at = new AccessToken(process.env.LIVEKIT_API_KEY!, process.env.LIVEKIT_SECRET!, {identity});
    // at.addGrant({ room, roomJoin:true, canPublish:true, canSubscribe:true });
    // return { token: at.toJwt(), url: LIVEKIT_URL };
    return {
      token: 'lk_demo_token_'+Buffer.from(identity+':'+room).toString('base64'),
      url: LIVEKIT_URL,
      room,
      identity,
      expires_in: 3600,
      note: 'DEMO – set LIVEKIT_API_KEY in prod'
    }
  }
}
