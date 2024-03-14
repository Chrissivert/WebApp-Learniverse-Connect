// package no.ntnu.webapp.group01.controllers;

// import io.swagger.v3.oas.annotations.Operation;
// import io.swagger.v3.oas.annotations.Parameter;
// import io.swagger.v3.oas.annotations.tags.Tag;
// import no.ntnu.webapp.group01.dto.AuthRequest;
// import no.ntnu.webapp.group01.dto.AuthResponse;
// import no.ntnu.webapp.group01.dto.SignUpDTO;
// import no.ntnu.webapp.group01.service.AccessUserService;
// import no.ntnu.webapp.group01.util.JwtTokenUtil;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.BadCredentialsException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// /**
//  * Controller responsible for authentication.
//  */
// @CrossOrigin
// @RestController
// @Tag(name = "Authentication", description = "API for authentication and user registration")
// public class AuthController {
//     @Autowired
//     private AuthenticationManager authenticationManager;
//     @Autowired
//     private AccessUserService userService;
//     @Autowired
//     private JwtTokenUtil jwtUtil;

//     /**
//      * HTTP POST request to /authenticate
//      *
//      * @param authenticationRequest The request JSON object containing username and password
//      * @return OK + JWT token; Or UNAUTHORIZED
//      */
//     @PostMapping("/api/authenticate")
//     @Operation(
//             summary = "Authenticate a user",
//             description = "Authenticate a user with their email and password. Returns a JWT token if successful, or an UNAUTHORIZED status if authentication fails."
//     )
//     public ResponseEntity<?> authenticate(
//             @Parameter(description = "Authentication request containing email and password")
//             @RequestBody AuthRequest authenticationRequest
//     ) {
//         try {
//             authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
//                     authenticationRequest.getEmail(), authenticationRequest.getPassword()));
//         } catch (BadCredentialsException e) {
//             return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
//         }
//         final UserDetails userDetails =
//                 userService.loadUserByUsername(authenticationRequest.getEmail());
//         final String jwt = jwtUtil.generateToken(userDetails);
//         return ResponseEntity.ok(new AuthResponse(jwt));
//     }

//     /**
//      * This method processes data received from the sign-up form (HTTP POST)
//      *
//      * @return Name of the template for the result page
//      */
//     @PostMapping("/api/signup")
//     @Operation(
//             summary = "Register a new user",
//             description = "Processes the sign-up data and creates a new user. Returns an OK status if successful, or a BAD_REQUEST status if user creation fails."
//     )
//     public ResponseEntity<String> signupProcess(
//             @Parameter(description = "Sign-up data containing user information")
//             @RequestBody SignUpDTO signupData
//     ) {
//         String errorMessage =
//                 userService.tryCreateNewUser(signupData.getEmail(), signupData.getPassword(), signupData.getName(), signupData.getPhone_number(), signupData.getPostal_code(), signupData.getAddress(), signupData.getCity());
//         ResponseEntity<String> response;
//         if (errorMessage == null) {
//             response = new ResponseEntity<>(HttpStatus.OK);
//         } else {
//             response = new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
//         }
//         return response;
//     }
// }