import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private swPush: SwPush) { }

  requestPermission(): void {
    this.swPush.requestSubscription({
      serverPublicKey: 'BF5R-Rg59K8rUXM5LEA-0w4ErHoucBZGUyuLTwza5yfcUB0j81FtVVgF1t5C56nA865io-r6E5RxHCEtRUFhu-Y'
    });
  }
}
