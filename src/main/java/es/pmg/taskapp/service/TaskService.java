package es.pmg.taskapp.service;

import es.pmg.taskapp.domain.Task;

public interface TaskService {

    Iterable<Task> findAll();

    Task save(Task task);

    Iterable<Task> findByNameContaining(String name);

    void delete(Long id);

}
