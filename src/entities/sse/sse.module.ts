import { Module } from '@nestjs/common';
import { SseController } from './sse.controller';
import { CryptoDataService } from "./crypto-data.service";

@Module({
  controllers: [SseController],
  providers: [CryptoDataService]
})
export class SseModule {}
