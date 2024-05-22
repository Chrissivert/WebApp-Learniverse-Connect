package no.ntnu.backend.dto;

import java.sql.Date;

/**
 * Data Transfer Object (DTO) for handling user signup information.
 * Contains details such as email, password, signup date, and username.
 * 
 * @version 23.05.2024
 */
public class SignupDTO {
  private final String email;
  private final String password;
  private final Date date;
  private final String username;

  /**
   * Constructor for SignupDTO.
   *
   * @param email    The email of the user.
   * @param password The password of the user.
   * @param date     The date of signup.
   * @param username The username of the user.
   */
  public SignupDTO(String email, String password, Date date, String username) {
    this.email = email;
    this.password = password;
    this.date = date;
    this.username = username;
  }

  /**
   * Gets the email of the user.
   *
   * @return The email of the user.
   */
  public String getEmail() {
    return this.email;
  }

  /**
   * Gets the password of the user.
   *
   * @return The password of the user.
   */
  public String getPassword() {
    return this.password;
  }

  /**
   * Gets the signup date.
   *
   * @return The signup date.
   */
  public Date getDate() {
    return date;
  }

  /**
   * Gets the username of the user.
   *
   * @return The username of the user.
   */
  public String getUsername() {
    return username;
  }
}