import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { SwitchModule } from './switch/switch.module'
import { WhatsappModule } from './whatsapp/whatsapp.module'
import { ConfigModule } from '@nestjs/config'
import { HelperModule } from './helper/helper.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SwitchModule,
    WhatsappModule,
    HelperModule
  ],
  controllers: [AppController]
})
export class AppModule {}
