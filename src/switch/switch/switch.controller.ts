import { Controller, Get } from '@nestjs/common'
import { SwitchGateway } from './switch.gateway'

@Controller('switch')
export class SwitchController {
  constructor(private readonly switchGateway: SwitchGateway) {}

  @Get('on')
  on(): string {
    this.switchGateway.switchOn()
    return 'on'
  }

  @Get('off')
  off(): string {
    this.switchGateway.switchOff()
    return 'off'
  }
}
