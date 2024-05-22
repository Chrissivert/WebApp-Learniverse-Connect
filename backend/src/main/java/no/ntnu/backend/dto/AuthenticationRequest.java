package no.ntnu.backend.dto;

/**
 * Data Transfer Object (DTO) for handling authentication requests.
 * Contains the necessary fields for user authentication.
 * 
 * @version 23.05.2024
 */
public class AuthenticationRequest {

  private int id;
  private String email;
  private String password;

  /**
   * Default constructor for AuthenticationRequest.
   */
  public AuthenticationRequest() {
  }

  /**
   * Parameterized constructor for AuthenticationRequest.
   *
   * @param id       The ID of the user.
   * @param email    The email of the user.
   * @param password The password of the user.
   */
  public AuthenticationRequest(int id, String email, String password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  /**
   * Gets the ID of the user.
   *
   * @return The ID of the user.
   */
  public int getId() {
    return this.id;
  }

  /**
   * Sets the ID of the user.
   *
   * @param id The ID of the user.
   */
  public void setId(int id) {
    this.id = id;
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
   * Sets the email of the user.
   *
   * @param email The email of the user.
   */
  public void setEmail(String email) {
    this.email = email;
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
   * Sets the password of the user.
   *
   * @param password The password of the user.
   */
  public void setPassword(String password) {
    this.password = password;
  }
}