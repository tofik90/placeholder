import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SseModule } from "./entities/sse/sse.module";

@Module({
  imports: [SseModule],
  controllers: [AppController],
})
export class AppModule {}
