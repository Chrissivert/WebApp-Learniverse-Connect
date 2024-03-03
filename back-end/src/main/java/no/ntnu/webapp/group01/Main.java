package no.ntnu.webapp.group01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

import no.ntnu.webapp.group01.config.CorsConfig;

@SpringBootApplication
@Import(CorsConfig.class)
@ComponentScan(basePackages = {"no.ntnu.webapp.group01"})
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
        System.out.println("Application context initialized.");
    }
}
