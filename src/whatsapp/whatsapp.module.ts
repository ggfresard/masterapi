import { Module } from '@nestjs/common'
import { WhatsappController } from './whatsapp.controller';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  controllers: [WhatsappController],
  imports: [TwilioModule]
})
export class WhatsappModule {}
