package no.ntnu.webapp.group01.dto;
/**
 * Data that we will send as a response to the user when the authentication is successful.
 */
public class AuthResponse {
  private final String jwt;

  public AuthResponse(String jwt) {
    this.jwt = jwt;
  }

  public String getJwt() {
    return jwt;
  }
}
