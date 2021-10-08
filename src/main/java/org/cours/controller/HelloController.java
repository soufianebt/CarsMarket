
package org.cours.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@RequestMapping("/hello")
	
	public String bienvenueSpring() {
		return "Bienvenue au framework Soring Boot";
	}
}
