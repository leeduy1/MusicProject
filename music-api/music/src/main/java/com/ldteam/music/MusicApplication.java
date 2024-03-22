package com.ldteam.music;

import com.ldteam.music.entities.Role;
import com.ldteam.music.entities.User;
import com.ldteam.music.services.UserService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.HashSet;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Music application."))
@EnableWebMvc
@EnableWebSecurity
@EnableJpaRepositories
public class MusicApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusicApplication.class, args);
	}

	@Bean
	BCryptPasswordEncoder brBCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			// userService.saveRole(new Role(null, "ROLE_USER"));
			// userService.saveRole(new Role(null, "ROLE_MANAGER"));
			// userService.saveRole(new Role(null, "ROLE_ADMIN"));
			// userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));
			//
			// userService.saveUser(new User(null, "Long Thanh", "LongKame",
			// "thanhlong@gmail.com", "123456", new HashSet<>()));
			// userService.saveUser(new User(null, "Nam Thanh", "NamNunez",
			// "namthanh@gmail.com", "123456", new HashSet<>()));
			//
			// userService.addToUser("thanhlong@gmail.com", "ROLE_USER");
			// userService.addToUser("thanhlong@gmail.com", "ROLE_MANAGER");
			//
			// userService.addToUser("namthanh@gmail.com", "ROLE_ADMIN");
			// userService.addToUser("namthanh@gmail.com", "ROLE_SUPER_ADMIN");

		};
	}
}
