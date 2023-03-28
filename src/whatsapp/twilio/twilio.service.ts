import { Injectable, Logger } from '@nestjs/common'
import { Twilio } from 'twilio'
import TwilioConfig from './twilio.configuration'

@Injectable()
export class TwilioService {
  private twilioClient: import('twilio/lib/rest/Twilio')

  private logger = new Logger('TwilioService')

  constructor(private readonly twilioConfig: TwilioConfig) {
    this.twilioClient = new Twilio(
      twilioConfig.getAccountSID(),
      twilioConfig.getAuthToken()
    )
  }

  public async sendWhatsappMessage(message: string, to: string) {
    const from = this.twilioConfig.getWhatsappPhoneNumber()
    this.logger.log(`Sending message from ${from} to ${to}`)

    await this.twilioClient.messages
      .create({
        body: message,
        from,
        to: `whatsapp:${to}`
      })
      .then((message) => console.log(message.sid))
  }
}
