package no.ntnu.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.UserRepository;
import no.ntnu.backend.service.UserService;


/**
 * 
 *
 * @author 
 * @version 30.03.2024
 */
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

    User user = this.getUserById(id);
    if (user.isValid() && user != null) {
      response = new ResponseEntity<>(user, HttpStatus.OK);
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

  /**
   * 
   *
   * @param id
   * @return
   */
  private User getUserById(int id) {
    return this.userRepository.findById(id).get();
  }

  /**
   * 
   *
   * @param course
   * @throws IllegalArgumentException
   */
  private void addUser(User user) throws IllegalArgumentException {
    if (!user.isValid() || user == null) {
      throw new IllegalArgumentException("User is invalid");
    }
    this.userRepository.save(user);
  }

  /**
   * 
   *
   * @param id
   * @param course
   * @throws IllegalArgumentException
   */
  private void updateUser(int id, User user) throws IllegalArgumentException {
    User existingUser = this.getUserById(id);

    if (existingUser == null) {
      throw new IllegalArgumentException("No user with ID: " + id + " was found");
    }
    if (user == null || !user.isValid()) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((user.getId()) != id) {
      throw new IllegalArgumentException("User ID in URL does not match the ID in JSON data");
    }

    user.setId(existingUser.getId());
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
      this.userRepository.delete(this.getUserById(id));
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}