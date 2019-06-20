import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks-find',
  templateUrl: './tasks-find.component.html',
  styleUrls: ['./tasks-find.component.css']
})
export class TasksFindComponent implements OnInit {

    constructor(private taskService: TasksService) { }

    ngOnInit() {
    }

    onTaskFind(event) {
        this.taskService.findTask(event.target.value).subscribe(
            (tasksResult : any[]) => {
                this.taskService.onTaskFound.emit(tasksResult); }

        );
    }
}
