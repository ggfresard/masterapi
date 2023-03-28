import { Injectable } from '@nestjs/common'

@Injectable()
class TwilioConfig {
  public getAccountSID(): string {
    return process.env.TWILIO_ACCOUNT_SID
  }

  public getAuthToken(): string {
    return process.env.TWILIO_AUTH_TOKEN
  }

  public getWhatsappPhoneNumber(): string {
    return process.env.TWILIO_WHATSAPP_PHONE_NUMBER
  }
}

export default TwilioConfig
