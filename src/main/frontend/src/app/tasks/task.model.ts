export class Task {

    public id: number;
    public name: string;
    public completed: boolean;
    public dueDate: string;
    public inProcess: boolean;

    constructor(id: number, name: string, completed: boolean, dueDate: string, inProcess: boolean){
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.dueDate = dueDate;
        this.inProcess = inProcess;
    }
}
