package no.ntnu.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.UserRepository;
import no.ntnu.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public ResponseEntity<String> create(User user) {
    ResponseEntity<String> response;

    try {
      this.addUser(user);
      response = new ResponseEntity<>(user.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      response = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public List<User> readAll() {
    return this.userRepository.findAll();
  }

  @Override
  public ResponseEntity<User> readById(int id) {
    ResponseEntity<User> response;

    Optional<User> user = this.getUserById(id);
    if (user.isPresent()) {
      response = new ResponseEntity<>(user.get(), HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return response;
  }

  @Override
  public ResponseEntity<String> update(int id, User user) {
    ResponseEntity<String> response;

    try {
      this.updateUser(id, user);
      response = new ResponseEntity<>(user.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> delete(int id) {
    ResponseEntity<String> response;

    if (this.removeUser(id)) {
      response = new ResponseEntity<>("User with ID: " + id + " has been deleted", HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  private Optional<User> getUserById(int id) {
    return this.userRepository.findById(id);
  }

  private void addUser(User user) throws IllegalArgumentException {
    if (user == null) {
      throw new IllegalArgumentException("User is invalid");
    }
    this.userRepository.save(user);

  }

  private void updateUser(int id, User user) throws IllegalArgumentException {
    Optional<User> existingUser = this.getUserById(id);

    if (existingUser.isEmpty()) {
      throw new IllegalArgumentException("No user with ID: " + id + " was found");
    }
    if (user == null) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((user.getId()) != id) {
      throw new IllegalArgumentException("User ID in URL does not match the ID in JSON data");
    }

    user.setId(existingUser.get().getId());
    this.userRepository.save(user);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private boolean removeUser(int id) {
    boolean result = false;

    try {
      this.userRepository.deleteById(id);
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}