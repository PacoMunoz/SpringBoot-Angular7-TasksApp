import { Component, OnInit } from '@angular/core';
import {Task} from '../task.model';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TasksService) { }

    ngOnInit() {

        this.taskService.getTasks().subscribe(
            (task: any[]) => this.tasks = task,
            (error) => console.log(error)
        );
        this.taskService.onTaskAdded.subscribe(
            (newTask: Task) => this.tasks.push(newTask)
        )
        this.taskService.onTaskFound.subscribe(
            (taskResult: Task[]) => {
                this.tasks = [];
                taskResult.forEach(
                    (item: Task) =>  { this.tasks.push(item);}
                );
            }
        );

    }

    getCompletedLabel(task: Task) {
       return task.completed ? "badge-success" : "badge-primary";
    }

    onTaskChange(event, task) {
        task.completed = event.target.checked;
        this.taskService.saveTasks(task).subscribe();
    }

    onTaskDelete(event, task: Task) {
      this.taskService.deleteTask(task).subscribe(
        (res: any) => {
            this.tasks = this.tasks.filter(
              obj => obj !== task
            )
        }
      )
    }

  onTaskStop(event, task: Task) {
      task.inProcess = false;
      this.taskService.saveTasks(task).subscribe();
  }


  onTaskStart(event, task: Task) {
    task.inProcess = true;
    this.taskService.saveTasks(task).subscribe();
  }

  onTaskRestart(event, task: Task) {
    task.completed = false;
    this.taskService.saveTasks(task).subscribe();
  }

  onTaskCompleted(event, task: Task) {
    task.completed = true;
    this.taskService.saveTasks(task).subscribe();
  }
}
