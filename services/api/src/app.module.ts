import { Module } from '@nestjs/common';
import { PetConnectModule } from './modules/petconnect/petconnect.module';
import { VetCareModule } from './modules/vetcare/vetcare.module';
import { CommerceModule } from './modules/commerce/commerce.module';
import { AiPalModule } from './modules/aipal/aipal.module';

@Module({
  imports: [PetConnectModule, VetCareModule, CommerceModule, AiPalModule],
})
export class AppModule {}
