package com.kiti.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class KitiServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(KitiServerApplication.class, args);
	}

}
