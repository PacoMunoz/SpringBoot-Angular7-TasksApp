import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import {TasksService} from "./tasks/tasks.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TasksFindComponent } from './tasks/tasks-find/tasks-find.component';
import {CountdownModule} from "ngx-countdown";
import { CountdownComponent } from './tasks/countdown/countdown.component';
import {PushNotificationsModule} from "ng-push";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent,
    TasksFindComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CountdownModule,
    PushNotificationsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
