import { Injectable } from '@nestjs/common'
import { Twilio } from 'twilio'
import TwilioConfig from './twilio.configuration'

@Injectable()
export class TwilioService {
  private twilioClient: import('twilio/lib/rest/Twilio')

  constructor() {
    const { accountSid, authToken } = TwilioConfig
    this.twilioClient = new Twilio(accountSid, authToken)
  }

  public async sendWhatsappMessage(message: string, to: string) {
    await this.twilioClient.messages
      .create({
        body: message,
        from: `whatsapp:+14155238886`,
        to: `whatsapp:${to}`
      })
      .then((message) => console.log(message.sid))
  }
}
