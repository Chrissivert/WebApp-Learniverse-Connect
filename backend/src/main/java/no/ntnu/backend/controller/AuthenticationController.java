package no.ntnu.backend.controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import no.ntnu.backend.dto.AuthenticationRequest;
import no.ntnu.backend.dto.AuthenticationResponse;
import no.ntnu.backend.dto.SignupDTO;
import no.ntnu.backend.security.JwtUtil;
import no.ntnu.backend.security.AccessUserService;
import no.ntnu.backend.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@CrossOrigin
@RestController
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AccessUserService userService;
    @Autowired
    private JwtUtil jwtUtil;


    /**
     * HTTP POST request to /authenticate.
     *
     * @param authenticationRequest The request JSON object containing username and password
     * @return OK + JWT token; Or UNAUTHORIZED
     */
    @PostMapping("/api/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        logger.info("Received authentication request for email: {}", authenticationRequest.getEmail());
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(

                    authenticationRequest.getEmail(),
                    authenticationRequest.getPassword()));
            logger.info("Authentication successful for email: {}", authenticationRequest.getEmail());
        } catch (BadCredentialsException e) {
            logger.error("Authentication failed for email: {}", authenticationRequest.getEmail(), e);
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        } catch(Exception e){
            logger.error("E");
        }
        final UserDetails userDetails = userService.loadUserByUsername(
                authenticationRequest.getEmail());
        final String jwt = jwtUtil.generateToken(userDetails);
        logger.info("JWT token generated successfully for email: {}", authenticationRequest.getEmail());
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    /**
     * This method processes data received from the sign-up form (HTTP POST).
     *
     * @return Name of the template for the result page
     */
    @PostMapping({"/api/signup"})
    public ResponseEntity<String> signupProcess(@RequestBody SignupDTO signupData) {
        String errorMessage = this.userService.tryCreateNewUser(signupData.getEmail(), signupData.getPassword(),signupData.getUsername());
        //String errorMessage = this.userServiceImpl.addUser(signupData.getEmail(), signupData.getPassword());
        ResponseEntity response;
        if (errorMessage == null) {
            response = new ResponseEntity(HttpStatus.OK);
        } else {
            response = new ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST);
        }
        return response;
    }
/*
    @PostMapping("/api/signup")
    public ResponseEntity<String> signupProcess(@RequestBody SignupDTO signupData) {
        ResponseEntity<String> response;
        try {
            userService.tryCreateNewUser(signupData.getUsername(), signupData.getPassword());
            response = new ResponseEntity<>(HttpStatus.OK);
        } catch (IOException e) {
            response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return response;
    }

    /*
    @PostMapping("/api/signup")
    public ResponseEntity<String> signupProcess(@RequestBody SignupDto signupData) {
        ResponseEntity<String> response;
        try {
            userService.tryCreateNewUser(signupData.getUsername(), signupData.getPassword());
            response = new ResponseEntity<>(HttpStatus.OK);
        } catch (IOException e) {
            response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return response;
    }*/




    /*
    private final AccessUserService userService;
    private final UserServiceImpl userServiceImpl;
    private final JwtUtil jwtUtil;
    private AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationController(AccessUserService userService, UserServiceImpl userServiceImpl, JwtUtil jwtUtil, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.userServiceImpl = userServiceImpl;
        this.jwtUtil = jwtUtil;
        this.authenticationManager=authenticationManager;
    }

    @PostMapping({"/api/authenticate"})
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException var4) {
            return new ResponseEntity("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }

        UserDetails userDetails = this.userService.loadUserByUsername(authenticationRequest.getEmail());
        String jwt = this.jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    /*

    @PostMapping({"/api/signup"})
    public ResponseEntity<String> signupProcess(@RequestBody SignupDTO signupData) {
        String errorMessage = this.userService.tryCreateNewUser(signupData.getEmail(), signupData.getPassword());
        //String errorMessage = this.userServiceImpl.addUser(signupData.getEmail(), signupData.getPassword());
        ResponseEntity response;
        if (errorMessage == null) {
            response = new ResponseEntity(HttpStatus.OK);
        } else {
            response = new ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST);
        }
        return response;
    }

     */
}
