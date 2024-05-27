import { Component } from '@angular/core';
import { NotificationService } from './gift/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'birthday-gift-app';
  constructor(private notificationService: NotificationService) { }

  requestPermission(): void {
    this.notificationService.requestPermission();
  }

  triggerNotification(): void {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hello from Angular!');
      }
    });
  }
}
