import { Component, OnInit } from '@angular/core';
import {PushNotificationsService} from "ng-push";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  constructor(private _pushNotifications: PushNotificationsService) {
    this._pushNotifications.requestPermission();
  }

  ngOnInit() {
  }

  onFinished() {
    console.log("HOla amigo");
    let options = {
      body: "Tomate un descanso amigo!!!"
    };
    this._pushNotifications.create('Iron Man', options).subscribe( //creates a notification
      res => console.log(res),
      err => console.log(err)
    );
  }

  onEvent($event: { action: string; left: number }) {
    
  }
}
