import { Module } from '@nestjs/common'
import { TwilioService } from './twilio.service'
import { TwilioController } from './twilio.controller'
import TwilioConfig from './twilio.configuration'

@Module({
  providers: [TwilioService, TwilioConfig],
  controllers: [TwilioController],
  exports: [TwilioService]
})
export class TwilioModule {}
