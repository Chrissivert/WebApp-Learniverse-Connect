package no.ntnu.webapp.group01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import no.ntnu.webapp.group01.models.User;
import no.ntnu.webapp.group01.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(User user) {
        // userRepository.save(user);

        String email = user.getEmail();
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException("Email address is required");
        }else{
            System.out.println(user.getEmail());
            System.out.println(user.getUserPassword());
            System.out.println(user);
            System.out.println(user.getId());
            System.out.println("Hello there is an email?");
        }
        System.out.println("HELLLLLOOO");

        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists");
        }
        System.out.println("SSSSELLLLLOOO");


        // Encrypt the password before saving the user
        String encryptedPassword = passwordEncoder.encode(user.getUserPassword());
        System.out.println(encryptedPassword + " encrypted password");
        user.setUserPassword(encryptedPassword);
        System.out.println(encryptedPassword + " encrypted password");


        userRepository.save(user);


    }
}
