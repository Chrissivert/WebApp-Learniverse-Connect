// package no.ntnu.webapp.group01;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http
//             .cors() // Enable CORS
//             .and()
//             .csrf().disable() // Disable CSRF for simplicity (you might want to enable it in production)
//             .authorizeRequests()
//             .antMatchers("/api/**").authenticated() // Secure your API endpoints as needed
//             .anyRequest().permitAll() // Permit all other requests
//             .and()
//             .formLogin(); // Enable form-based login (you might want to customize this)
//     }
// }
