package no.ntnu.backend.controller;

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
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AccessUserService userService;
    @Autowired
    private UserServiceImpl userServiceImpl;
    @Autowired
    private JwtUtil jwtUtil;

    public AuthenticationController() {
    }

    @PostMapping({"/api/authenticate"})
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException var4) {
            return new ResponseEntity("Invalid username or password", HttpStatus.UNAUTHORIZED);
        }

        //ResponseEntity<User>
        //UserDetails userDetails = this.userServiceImpl.readById(authenticationRequest.getId());
        UserDetails userDetails = this.userService.loadUserByUsername(authenticationRequest.getEmail());
        String jwt = this.jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

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
}
