import { Module } from '@nestjs/common'
import { TwilioService } from './twilio.service'
import { WhatsappController } from './twilio.controller'

@Module({
  providers: [TwilioService],
  controllers: [WhatsappController],
  exports: [TwilioService]
})
export class TwilioModule {}
