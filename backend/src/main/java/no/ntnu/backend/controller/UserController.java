package no.ntnu.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.User;
import no.ntnu.backend.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * 
 *
 * @author 
 * @version 30.03.2024
 */
@RestController
@RequestMapping("/users")
@CrossOrigin()
public class UserController {

  @Autowired
  private UserService userService;

  /**
   * 
   *
   * @param user
   * @return
   */
  @PostMapping()
  public ResponseEntity<String> createUser(@RequestBody User user) {
    return this.userService.create(user);
  }
  
  /**
   * 
   *
   * @return
   */
  @GetMapping()
  public List<User> readAllUsers() {
    return this.userService.readAll();
  }
  
  /**
   * 
   *
   * @param id
   * @return
   */
  @GetMapping("/{id}")
  public ResponseEntity<User> readUserById(@PathVariable int id) {
    return this.userService.readById(id);
  }
  
  /**
   * 
   *
   * @param id
   * @param user
   * @return
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateUser(@PathVariable int id, @RequestBody User user) {
    return this.userService.update(id, user);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteUser(@PathVariable int id) {
    return this.userService.delete(id);
  }
}



//KEEP THIS!!!



// import no.ntnu.backend.dto.AuthRequest;
// import no.ntnu.backend.dto.AuthResponse;
// import no.ntnu.backend.exception.UserNotFoundException;
// import no.ntnu.backend.model.User;
// import no.ntnu.backend.repository.UserRepository;
// import no.ntnu.backend.service.UserService;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @CrossOrigin("http://localhost:5173")
// @RequestMapping("/public")
// public class UserController {

//     private static final Logger logger = LoggerFactory.getLogger(CourseController.class);
    
//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private UserService userService;

//      @PostMapping("/register")
//     public ResponseEntity<?> registerUser(@RequestBody User user) {
//         try {
//             userService.registerUser(user);
//             return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
//         } catch (Exception e) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register user");
//         }
//     }

//     @PostMapping("/login")
//     public ResponseEntity<?> authenticateUser(@RequestBody AuthRequest authRequest) {
//         try {
//             System.out.println("AuthRequest:++ " + authRequest.getEmail() + " " + authRequest.getPassword());
//             String jwtToken = userService.loginUser(authRequest.getEmail(), authRequest.getPassword());
//             return ResponseEntity.ok(new AuthResponse(jwtToken));
//         } catch (Exception e) {
//             System.out.println(("Authentication faileddddd: " + e.getMessage()));
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: " + e.getMessage());
//         }
//     }

//     @PostMapping("/user")
//     User newUser(@RequestBody User newUser) {
//         return userRepository.save(newUser);
//     }

//     @GetMapping("/users")
//     List<User> getAllUsers() {
//         return userRepository.findAll();
//     }
//     @GetMapping("/user/{id}")
//     User getUserById(@PathVariable Long id) {
//         logger.warn("Getting a user");
//         return userRepository.findById(id)
//                 .orElseThrow(() -> new UserNotFoundException(id));
//     }
//     @PutMapping("/user/{id}")
//     User updateUser(@RequestBody User newUser, @PathVariable Long id) {
//         return userRepository.findById(id)
//                 .map(user -> {
//                     user.setRoleId(newUser.getRoleId());
//                     user.setUsername(newUser.getUsername());
//                     user.setStartDate(newUser.getStartDate());
//                     user.setEmail(newUser.getEmail());
//                     user.setPassword(newUser.getPassword());
//                     return userRepository.save(user);
//                 }).orElseThrow(() -> new UserNotFoundException(id));
//     }

//     @DeleteMapping("/user/{id}")
//     String deleteUser(@PathVariable Long id){
//         if(!userRepository.existsById(id)){
//             throw new UserNotFoundException(id);
//         }
//         userRepository.deleteById(id);
//         return  "User with id "+id+" has been deleted success.";
//     }
// }
