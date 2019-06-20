package es.pmg.taskapp.service;

import es.pmg.taskapp.domain.Task;
import es.pmg.taskapp.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService{

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> findAll() {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }

    @Override
    public Iterable<Task> findByNameContaining(String name) {
        return this.taskRepository.findByNameContaining(name);
    }

    @Override
    public void delete(Long id) {
        this.taskRepository.deleteById(id);
    }


}
