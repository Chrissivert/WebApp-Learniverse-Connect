package no.ntnu.backend.service.impl;

import java.util.List;
import java.util.Optional;

import no.ntnu.backend.model.Role;
import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.RoleRepository;
import no.ntnu.backend.repository.UserRepository;
import no.ntnu.backend.security.AccessUserDetails;
import no.ntnu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

  private static final int MIN_PASSWORD_LENGTH = 6;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  @Autowired
  private RoleServiceImpl roleService;

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    Optional<User> user = userRepository.findByEmail(email);
    if (user.isPresent()) {
      return new AccessUserDetails(user.get());
    } else {
      throw new UsernameNotFoundException("User with email " + email + " not found");
    }
  }

  public User getSessionUser() {
    SecurityContext securityContext = SecurityContextHolder.getContext();
    Authentication authentication = securityContext.getAuthentication();
    String email = authentication.getName();
    return this.userRepository.findByUsername(email).orElse(null);
  }

  private boolean userExists(String email) {
    return userRepository.findByEmail(email).isPresent();
  }

  public String tryCreateNewUser(String email, String password, String username) {
    String errorMessage = checkEmailAndPassword(email, password);
    if (errorMessage == null) {
      createUser(email, password, username);
    }
    return errorMessage;
  }

  private String checkEmailAndPassword(String email, String password) {
    if (email.isEmpty()) {
      return "Email can't be empty";
    } else if (userExists(email)) {
      return "Email already taken";
    } else {
      return checkPasswordRequirements(password);
    }
  }

  private String checkPasswordRequirements(String password) {
    if (password == null || password.isEmpty()) {
      return "Password can't be empty";
    } else if (password.length() < MIN_PASSWORD_LENGTH) {
      return "Password must be at least " + MIN_PASSWORD_LENGTH + " characters";
    }
    return null;
  }

  private void createUser(String email, String password, String username) {
    Role userRole = roleRepository.findOneById(2);
    if (userRole != null) {
      User user = new User(email, createHash(password));
      user.addRole(userRole);
      user.setUsername(username);
      user.setStartDate(new java.sql.Date(new java.util.Date().getTime()));
      create(user);
    }
  }

  private String createHash(String password) {
    return BCrypt.hashpw(password, BCrypt.gensalt());
  }

  @Override
  public ResponseEntity<String> create(User user) {
    try {
      addUser(user);
      return new ResponseEntity<>(user.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      return new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }
  }

  @Override
  public List<User> readAll() {
    return userRepository.findAll();
  }

  @Override
  public ResponseEntity<User> readById(int id) {
    return userRepository.findById(id)
            .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @Override
  public ResponseEntity<User> readByEmail(String email) {
    return userRepository.findByEmail(email)
            .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @Override
  public ResponseEntity<String> update(int id, User user) {
    try {
      updateUser(id, user);
      return new ResponseEntity<>(user.toString(), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
  }

  @Override
  public ResponseEntity<String> delete(int id) {
    if (removeUser(id)) {
      return new ResponseEntity<>("User with ID: " + id + " has been deleted", HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  private Optional<User> getUserById(int id) {
    return userRepository.findById(id);
  }

  private Optional<User> getUserByEmail(String email) {
    return userRepository.findByEmail(email);
  }

  private void addUser(User user) throws IllegalArgumentException {
    if (user == null) {
      throw new IllegalArgumentException("User is invalid");
    }
    userRepository.save(user);
  }

  private void updateUser(int id, User user) throws IllegalArgumentException {
    Optional<User> existingUser = getUserById(id);
    if (existingUser.isEmpty()) {
      throw new IllegalArgumentException("No user with ID: " + id + " was found");
    }
    if (user == null || user.getId() != id) {
      throw new IllegalArgumentException("Invalid user data");
    }
    user.setStartDate(existingUser.get().getStartDate());
    user.setId(existingUser.get().getId());
    addUser(user);
  }

  private boolean removeUser(int id) {
    try {
      userRepository.deleteById(id);
      return true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }
  }
}