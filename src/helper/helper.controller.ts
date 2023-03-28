import { Body, Controller, Logger, Post, Req } from '@nestjs/common'
import { ChatGptService } from './chat-gpt/chat-gpt.service'

@Controller('helper')
export class HelperController {
  private logger = new Logger('HelperController')

  constructor(private readonly chatGptService: ChatGptService) {}

  @Post()
  async helperResponse(@Body('prompt') prompt: string): Promise<string> {
    this.logger.log(`Received prompt: ${JSON.stringify(prompt)}`)
    const response = await this.chatGptService.getResponse(prompt)
    this.logger.log(`Returning response: ${JSON.stringify(response)}`)
    return response
  }
}
