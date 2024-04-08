package no.ntnu.backend.dto;


public class AuthenticationRequest {
  private String email;
  private String password;

  public AuthenticationRequest() {
  }

  public AuthenticationRequest(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public String getUsername() {
    return this.email;
  }

  public void setUsername(String username) {
    this.email = email;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}