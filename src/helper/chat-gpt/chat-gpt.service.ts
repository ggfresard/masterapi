import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { Configuration, OpenAIApi } from 'openai'

@Injectable()
export class ChatGptService implements OnModuleInit {
  private openai: OpenAIApi

  private logger = new Logger('ChatGptService')
  onModuleInit() {
    var config = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })
    this.openai = new OpenAIApi(config)

    this.logger.log('ChatGptService initialized')
  }

  async getResponse(prompt: string) {
    const response = await this.openai.createChatCompletion({
      model: 'gpt-4-32k',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })
    console.log(JSON.stringify(response.data))
    return response.data.choices[0].message.content
  }
}
