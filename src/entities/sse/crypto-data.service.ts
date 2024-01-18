import { Injectable } from '@nestjs/common';
import { WebSocket } from "ws";
import { Subject } from "rxjs";

@Injectable()
export class CryptoDataService {
  private apiUrl = 'wss://stream.binance.com:9443/ws/btcusdt@avgPrice';
  private socket: WebSocket;
  private btcPrice$$: Subject<number> = new Subject();
  public btcPrice$ = this.btcPrice$$.asObservable();

  constructor() {
    this.socket = new WebSocket(this.apiUrl)
    this.socket.on("message", (rawData) => {
      const message = rawData.toString()
      const {w} = JSON.parse(message)
      const price = Number(Number(w).toFixed(2))
      this.updatePrice(price)
    })
  }


  private updatePrice(price: number) {
    this.btcPrice$$.next(price)
  }
}


