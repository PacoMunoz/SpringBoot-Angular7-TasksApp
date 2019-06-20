package es.pmg.taskapp.repository;

import es.pmg.taskapp.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {

    Iterable<Task> findByNameContaining(String name);

}
