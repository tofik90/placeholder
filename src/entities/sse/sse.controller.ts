import { Controller, Sse } from '@nestjs/common';
import { map, Observable } from "rxjs";
import { CryptoDataService } from "./crypto-data.service";

@Controller('sse')
export class SseController {
  constructor(private cryptoData: CryptoDataService) {
  }
  @Sse('')
  sse(): Observable<MessageEvent> {
    // @ts-ignore
    return this.cryptoData.btcPrice$.pipe(map((price) => ({
      data: {
        time: new Date(),
        price
      }
    })))
  }
}
