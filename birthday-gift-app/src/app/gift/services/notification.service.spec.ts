import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private cacheKey = 'notifications';
  private cacheDuration = 600000; // 10 minutes en millisecondes

  constructor(private swPush: SwPush, private http: HttpClient) { }

  requestPermission(): void {
    this.swPush.requestSubscription({
      serverPublicKey: 'BFY...' // Remplacez par votre clé publique
    }).then(subscription => {
      // Envoyez l'abonnement au serveur
      this.sendSubscriptionToTheServer(subscription);
    }).catch(err => console.error("Could not subscribe to notifications", err));
  }

  triggerNotification(): void {
    this.swPush.messages.subscribe(msg => {
      console.log('Received notification', msg);
      // Traitez le message de notification comme vous le souhaitez, par exemple, affichez une alerte
      alert('New notification: ' + JSON.stringify(msg));
    });
  }

  private sendSubscriptionToTheServer(subscription: PushSubscription) {
    // Envoyez l'abonnement au serveur
    // Remplacez l'URL par l'URL de votre serveur
    this.http.post('/api/subscribe', subscription).subscribe();
  }

  getNotifications(userId: number): Observable<any> {
    const cached = this.getFromCache();
    if (cached) {
      return of(cached);
    } else {
      return this.http.get(`/api/notifications?userId=${userId}`).pipe(
        tap(notifications => this.saveToCache(notifications))
      );
    }
  }

  private getFromCache(): any {
    const cachedData = localStorage.getItem(this.cacheKey);
    if (!cachedData) {
      return null;
    }

    const cache = JSON.parse(cachedData);
    const now = new Date().getTime();

    if (now - cache.timestamp > this.cacheDuration) {
      localStorage.removeItem(this.cacheKey);
      return null;
    }

    return cache.data;
  }

  private saveToCache(data: any): void {
    const cache = {
      timestamp: new Date().getTime(),
      data: data
    };
    localStorage.setItem(this.cacheKey, JSON.stringify(cache));
  }
}
