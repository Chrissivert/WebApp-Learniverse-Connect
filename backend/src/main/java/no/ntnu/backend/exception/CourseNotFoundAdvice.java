package no.ntnu.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

/**
 * Exception handler advice for handling CourseNotFoundException.
 * Provides a mechanism to return a standardized error response when a course is
 * not found.
 * 
 * @version 23.05.2024
 */
@ControllerAdvice
public class CourseNotFoundAdvice {

  /**
   * Handles CourseNotFoundException and returns a response with a NOT_FOUND
   * status.
   *
   * @param exception The exception that was thrown.
   * @return A map containing the error message.
   */
  @ResponseBody
  @ExceptionHandler(CourseNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public Map<String, String> exceptionHandler(CourseNotFoundException exception) {
    Map<String, String> errorMap = new HashMap<>();
    errorMap.put("errorMessage", exception.getMessage());
    return errorMap;
  }
}