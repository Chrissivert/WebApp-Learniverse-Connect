package no.ntnu.backend.dto;

import java.io.Serializable;

/**
 * Data Transfer Object (DTO) for handling authentication responses.
 * Contains the JWT token generated upon successful authentication.
 * 
 * @version 23.05.2024
 */
public class AuthenticationResponse implements Serializable {

  private static final long serialVersionUID = 1L;
  private final String jwt;

  /**
   * Constructor for AuthenticationResponse.
   *
   * @param jwt The JWT token.
   */
  public AuthenticationResponse(String jwt) {
    this.jwt = jwt;
  }

  /**
   * Gets the JWT token.
   *
   * @return The JWT token.
   */
  public String getJwt() {
    return this.jwt;
  }
}