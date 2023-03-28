import { Module } from '@nestjs/common';
import { HelperController } from './helper.controller';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';

@Module({
  controllers: [HelperController],
  imports: [ChatGptModule]
})
export class HelperModule {}
