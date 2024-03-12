package no.ntnu.webapp.group01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import no.ntnu.webapp.group01.dto.UserProfileDTO;
import no.ntnu.webapp.group01.models.Role;
import no.ntnu.webapp.group01.models.User;
import no.ntnu.webapp.group01.repositories.RoleRepository;
import no.ntnu.webapp.group01.repositories.UserRepository;
import no.ntnu.webapp.group01.security.AccessUserDetails;

import java.util.Optional;

/**
 * Provides AccessUserDetails needed for authentication.
 */
@Service
public class AccessUserService implements UserDetailsService {
  private static final int MIN_PASSWORD_LENGTH = 6;
  @Autowired
  UserRepository userRepository;
  @Autowired
  RoleRepository roleRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<User> user = userRepository.findByEmail(username);
    if (user.isPresent()) {
      return new AccessUserDetails(user.get());
    } else {
      throw new UsernameNotFoundException("User " + username + "not found");
    }
  }

  /**
   * Get the user which is authenticated for the current session.
   *
   * @return User object or null if no user has logged in
   */
  public User getSessionUser() {
    SecurityContext securityContext = SecurityContextHolder.getContext();
    Authentication authentication = securityContext.getAuthentication();
    String username = authentication.getName();
    return userRepository.findByEmail(username).orElse(null);
  }

  /**
   * Check if user with given username exists in the database.
   *
   * @param email Username of the user to check, case-sensitive
   * @return True if user exists, false otherwise
   */
  private boolean userExists(String email) {
    try {
      loadUserByUsername(email);
      return true;
    } catch (UsernameNotFoundException ex) {
      return false;
    }
  }

  /**
   * Try to create a new user.
   *
   * @param email    Username of the new user
   * @param password Plaintext password of the new user
   * @return null when user created, error message on error
   */
  public String tryCreateNewUser(String email, String password, String name, String phone_number,
                                 int postal_code, String address, String city) {
    String errorMessage;
    if ("".equals(email)) {
      errorMessage = "Username can't be empty";
    } else if (userExists(email)) {
      errorMessage = "Username already taken";
    } else {
      errorMessage = checkPasswordRequirements(password);
      if (errorMessage == null) {
        createUser(email, password, name, phone_number, postal_code, address, city);
      }
    }
    return errorMessage;
  }

  /**
   * Check if password matches the requirements.
   *
   * @param password A password to check
   * @return null if all OK, error message on error
   */
  private String checkPasswordRequirements(String password) {
    String errorMessage = null;
    if (password == null || password.length() == 0) {
      errorMessage = "Password can't be empty";
    } else if (password.length() < MIN_PASSWORD_LENGTH) {
      errorMessage = "Password must be at least " + MIN_PASSWORD_LENGTH + " characters";
    }
    return errorMessage;
  }


  /**
   * Create a new user in the database.
   *
   * @param email    Username of the new user
   * @param password Plaintext password of the new user
   */
  private void createUser(String email, String password, String name, String phone_number,
                          int postal_code, String address, String city) {
    Role userRole = roleRepository.findOneByName("ROLE_USER");
    if (userRole != null) {
      User user = new User(email, createHash(password), name);
      user.addRole(userRole);
      userRepository.save(user);
    }
  }

  /**
   * Create a secure hash of a password.
   *
   * @param password Plaintext password
   * @return BCrypt hash, with random salt
   */
  private String createHash(String password) {
    return BCrypt.hashpw(password, BCrypt.gensalt());
  }

  /**
   * Update profile information for a user.
   *
   * @param user User to update
   * @param profileData Profile data to set for the user
   * @return True on success, false otherwise
   */
  public boolean updateProfile(User user, UserProfileDTO profileData) {
    if (user == null || profileData == null) {
      return false;
    }

    user.setName(profileData.getName());
    user.setEmail(profileData.getEmail());

    userRepository.save(user);
    return true;
  }

  public boolean changePassword(User user, String currentPassword, String newPassword) {
    if (user == null || currentPassword == null || newPassword == null) {
      return false;
    }

    // Check if the current password matches the user's password
    if (!BCrypt.checkpw(currentPassword, user.getPassword())) {
      return false;
    }

    // Set the new password after encoding
    user.setPassword(createHash(newPassword));

    // Save the updated user object to the repository
    userRepository.save(user);
    return true;
  }
}