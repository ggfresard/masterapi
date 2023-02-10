import { Body, Controller, Logger, Post } from '@nestjs/common'
import { TwilioService } from './twilio/twilio.service'

@Controller('whatsapp')
export class WhatsappController {
  private logger = new Logger('WhatsappController')

  constructor(private readonly twilioService: TwilioService) {}

  @Post('sendmessage')
  async newMessage(@Body() body: { to: string; message: string }) {
    await this.twilioService.sendWhatsappMessage(body.message, body.to)
    return 'ok'
  }
}
