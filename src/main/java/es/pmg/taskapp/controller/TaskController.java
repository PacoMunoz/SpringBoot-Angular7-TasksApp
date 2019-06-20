package es.pmg.taskapp.controller;


import es.pmg.taskapp.domain.Task;
import es.pmg.taskapp.service.TaskService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> listTasks(){
        return this.taskService.findAll();
    }

    @PostMapping("/save")
    public Task save(@RequestBody Task task){
        return this.taskService.save(task);
    }

    @GetMapping("/find")
    public Iterable<Task> findTasks(@RequestParam String name) {
        return this.taskService.findByNameContaining(name);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        this.taskService.delete(id);
    }
}
