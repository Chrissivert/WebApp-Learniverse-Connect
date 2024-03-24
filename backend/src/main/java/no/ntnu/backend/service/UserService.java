package no.ntnu.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.UserRepository;
import no.ntnu.backend.util.JwtTokenUtil;
import no.ntnu.backend.security.MyUserDetailsService;

@Service
public class UserService {

     @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public void registerUser(User user) {
        String email = user.getEmail();
        if (email == null || email.isEmpty()) {
            throw new IllegalArgumentException("Email address is required");
        }

        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists");
        }

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        System.out.println("User: " + user);

        userRepository.save(user);
    }

    public String loginUser(String email, String password) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(email);
        return jwtTokenUtil.generateToken(userDetails);
    }
}
