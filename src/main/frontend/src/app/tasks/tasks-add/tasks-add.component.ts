import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from '../task.model';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  taskNewValue: string = null;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  onTaskAdd(event){
      let task = new Task(null, event.target.value, false, this.getTodayAsString(),false);
      this.taskService.addTask(task).subscribe(
          (newTask : Task ) => {
              //clear new task input text
              this.taskNewValue = ' ';
              this.taskService.onTaskAdded.emit(newTask);
          }
      );
  }

  getTodayAsString() {
      let today = new Date();
      let dd: any = today.getDate();
      let mm: any = today.getMonth() + 1;
      let yyyy: any = today.getFullYear();
      if (dd < 10){
          dd = '0' + dd;
      }
      if (mm < 10){
          mm = '0' + mm;
      }
      return dd + '/' + mm + '/' + yyyy;
  }



}
