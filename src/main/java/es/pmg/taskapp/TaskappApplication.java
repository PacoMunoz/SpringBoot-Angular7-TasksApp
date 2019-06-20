package es.pmg.taskapp;

import es.pmg.taskapp.domain.Task;
import es.pmg.taskapp.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class TaskappApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskappApplication.class, args);
	}

	@Bean
	CommandLineRunner runner (TaskService taskService) {
		return args -> {

			taskService.save( new Task(1L, "Ir a por bombona", LocalDate.now(), false, false));
			taskService.save( new Task(2L, "Ir a por bombona", LocalDate.now(), false, false));
			taskService.save( new Task(3L, "Ir a la bombona", LocalDate.now(), false, true));
			taskService.save( new Task(4L, "Ir a la bombona", LocalDate.now(), false, false));
			taskService.save( new Task(5L, "Ir a con bombona", LocalDate.now(), false, false));
			taskService.save( new Task(6L, "Ir a con bombona", LocalDate.now(), false, false));
			taskService.save( new Task(6L, "bombona", LocalDate.now(), false, false));

		};
	}

}
