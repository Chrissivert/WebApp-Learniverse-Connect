package no.ntnu.webapp.group01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import no.ntnu.webapp.group01.models.User;
import no.ntnu.webapp.group01.repositories.UserRepository;
import no.ntnu.webapp.group01.util.JwtTokenUtil;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

     @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(User user) {
        // userRepository.save(user);

        String email = user.getEmail();
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException("Email address is required");
        }

        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists");
        }


        // Encrypt the password before saving the user
        String encryptedPassword = passwordEncoder.encode(user.getUserPassword());
        user.setUserPassword(encryptedPassword);

        userRepository.save(user);


    }

     public String generateTokenForUser(UserDetails userDetails) {
        return jwtTokenUtil.generateToken(userDetails);
    }
}


