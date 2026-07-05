import { Module } from '@nestjs/common';
import { VetCareController } from './vetcare.controller';
import { LivekitService } from './livekit.service';
@Module({ controllers:[VetCareController], providers:[LivekitService], exports:[LivekitService] })
export class VetCareModule {}
