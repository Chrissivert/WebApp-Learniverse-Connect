package no.ntnu.backend.exception;

/**
 * Exception thrown when a user with the specified ID is not found.
 *
 * @version 23.05.2024
 */
public class UserNotFoundException extends RuntimeException {

  /**
   * Constructs a new UserNotFoundException with the specified user ID.
   *
   * @param id The ID of the user that could not be found.
   */
  public UserNotFoundException(Long id) {
    super("Could not find the user with id " + id);
  }
}