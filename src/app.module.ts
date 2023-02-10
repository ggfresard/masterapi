import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { SwitchModule } from './switch/switch.module';

@Module({
  imports: [SwitchModule],
  controllers: [AppController]
})
export class AppModule {}
