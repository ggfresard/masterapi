import { Controller, Logger, Post, Body } from '@nestjs/common'

@Controller('whatsapp/webhook')
export class TwilioController {
  private logger = new Logger('WhatsappController')

  @Post('newmessage')
  newMessage(@Body() body): string {
    this.logger.log(body)
    return 'ok'
  }

  @Post('status')
  status(@Body() body): string {
    this.logger.log(body)
    return 'ok'
  }
}
