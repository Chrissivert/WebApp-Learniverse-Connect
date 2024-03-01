package no.ntnu.webapp.group01;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;


@Configuration
public class EntityManagerFactoryConfig {

    @Autowired
    private DataSource dataSource;

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(dataSource)
                .packages("no.ntnu.webapp.group01") // Specify the package to scan for entity classes
                .persistenceUnit("group1PersistenceUnit") // Set the persistence unit name
                .build();
    }
}

