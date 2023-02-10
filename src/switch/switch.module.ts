import { Module } from '@nestjs/common'
import { SwitchGateway } from './switch/switch.gateway'
import { SwitchController } from './switch/switch.controller'

@Module({
  providers: [SwitchGateway],
  controllers: [SwitchController],
  exports: [SwitchGateway]
})
export class SwitchModule {}
