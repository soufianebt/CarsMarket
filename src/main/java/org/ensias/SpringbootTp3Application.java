package org.ensias;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class SpringbootTp3Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootTp3Application.class, args);
	}

}
