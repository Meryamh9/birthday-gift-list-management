import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {
  constructor(private pushService: PushNotificationService) {}

  ngOnInit() {
    this.pushService.subscribeToNotifications();
    this.pushService.listenForMessages();
  }
}
