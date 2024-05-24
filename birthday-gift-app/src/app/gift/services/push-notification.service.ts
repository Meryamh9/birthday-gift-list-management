import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  readonly VAPID_PUBLIC_KEY = 'YOUR_VAPID_PUBLIC_KEY_HERE';

  constructor(private swPush: SwPush) {}

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => console.log('Subscription successful: ', sub))
    .catch(err => console.error('Subscription failed: ', err));
  }

  listenForMessages() {
    this.swPush.messages.subscribe(message => {
      console.log('Received push message: ', message);
    });
  }
}
