package no.ntnu.backend.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration class for CORS (Cross-Origin Resource Sharing) in the Spring application.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    private static final Logger logger = LoggerFactory.getLogger(CorsConfig.class);

    /**
     * Adds CORS mappings to the provided registry.
     *
     * @param registry The CORS registry to which mappings are added.
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        logger.info("Configuring CORS...");
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
        logger.info("CORS configuration complete.");
    }
}

