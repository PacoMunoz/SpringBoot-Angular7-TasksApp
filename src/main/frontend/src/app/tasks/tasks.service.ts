import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Task} from './task.model';

@Injectable()
export class TasksService {

    onTaskAdded = new EventEmitter<Task>();

    onTaskFound = new EventEmitter<any[]>();

    constructor(private httpClient: HttpClient) {}

    getTasks() {
        return this.httpClient.get("/api/tasks");
    }

    saveTasks(task: Task) {
        return this.httpClient.post("/api/tasks/save", task);
    }

    addTask(task: Task){
        return this.httpClient.post("/api/tasks/save", task);
    }

    findTask(name: string) {
        return this.httpClient.get("/api/tasks/find?name=" + name);
    }

    deleteTask(task: Task){
      return this.httpClient.delete("/api/tasks/" + task.id);
    }

}
