package no.ntnu.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.User;

/**
 * 
 *
 * @author 
 * @version 30.03.2024
 */
@Service
public interface UserService{

  /**
   * POST
   *
   * @param user
   * @return
   */
  public ResponseEntity<String> create(User user);

  /**
   * GET
   *
   * @return
   */
  public List<User> readAll(); 

  /**
   * GET
   *
   * @param id
   * @return
   */
  public ResponseEntity<User> readById(int id);

  /**
   * GET
   *
   * @param email
   * @return
   */
  public ResponseEntity<User> readByEmail(String email);



  /**
   * PUT
   *
   * @param id
   * @param user
   */
  public ResponseEntity<String> update(int id, User user);

  /**
   * DELETE
   *
   * @param id
   * @return
   */
  public ResponseEntity<String> delete(int id);
}

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.BadCredentialsException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import no.ntnu.backend.model.User;
// import no.ntnu.backend.repository.UserRepository;
// import no.ntnu.backend.util.JwtTokenUtil;

// @Service
// public class UserService {

//      @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private JwtTokenUtil jwtTokenUtil;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @Autowired
//     private MyUserDetailsService userDetailsService;

//     @Autowired
//     private AuthenticationManager authenticationManager;

//     public void registerUser(User user) {
//         String email = user.getEmail();
//         if (email == null || email.isEmpty()) {
//             throw new IllegalArgumentException("Email address is required");
//         }

//         if (userRepository.existsByEmail(email)) {
//             throw new RuntimeException("Email already exists");
//         }

//         String encryptedPassword = passwordEncoder.encode(user.getPassword());
//         user.setPassword(encryptedPassword);

//         System.out.println("User: heee " + user);

//         userRepository.save(user);
//     }

//     public String loginUser(String email, String password) throws Exception {
//         try {
//             System.out.println("inside authneciationmanager");
//             authenticationManager.authenticate(
//                     new UsernamePasswordAuthenticationToken(email, password)
//             );
//         } catch (BadCredentialsException e) {
//             throw new Exception("Incorrect username or password", e);
//         }

//         System.out.println("after authneciationmanager, before userdetails");

//         final UserDetails userDetails = userDetailsService.loadUserByUsername(email);
//         System.out.println("after loadby method" + userDetails.getUsername() + userDetails.getPassword() + userDetails.getAuthorities());

//         return jwtTokenUtil.generateToken(userDetails);
//     }
// }
