package no.ntnu.backend.exception;

/**
 * Exception thrown when a course is not found.
 * This exception is used to indicate that a requested course does not exist.
 * 
 * @version 23.05.2024
 */
public class CourseNotFoundException extends RuntimeException {

  /**
   * Constructs a new CourseNotFoundException with the specified detail message.
   *
   * @param id The ID of the course that could not be found.
   */
  public CourseNotFoundException(Integer id) {
    super("Could not find the course with ID " + id);
  }
}