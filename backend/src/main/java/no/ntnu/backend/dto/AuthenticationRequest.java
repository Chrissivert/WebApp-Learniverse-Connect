package no.ntnu.backend.dto;


public class AuthenticationRequest {

  private int id;
  private String email;
  private String password;

  public AuthenticationRequest() {
  }

  public AuthenticationRequest(int id, String email, String password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  public int getId(){return this.id;}

  public void setId(){this.id = id;}

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String username) {
    this.email = email;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}