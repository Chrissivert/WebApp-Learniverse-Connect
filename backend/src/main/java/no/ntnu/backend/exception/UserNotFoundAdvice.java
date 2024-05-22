package no.ntnu.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

/**
 * Global exception handler for UserNotFoundException.
 * This advice handles UserNotFoundException and returns a formatted error
 * response.
 *
 * @version 23.05.2024
 */
@ControllerAdvice
public class UserNotFoundAdvice {

  /**
   * Handles UserNotFoundException and returns an error response with status 404.
   *
   * @param exception The exception to be handled.
   * @return A map containing the error message.
   */
  @ResponseBody
  @ExceptionHandler(UserNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public Map<String, String> exceptionHandler(UserNotFoundException exception) {
    Map<String, String> errorMap = new HashMap<>();
    errorMap.put("errorMessage", exception.getMessage());
    return errorMap;
  }
}