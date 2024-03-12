package no.ntnu.webapp.group01.dto;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Data transfer object (DTO) for data from the sign-up form.
 */
@Schema(description = "Data transfer object (DTO) for data from the sign-up form")
public class SignUpDTO {
  @Schema(description = "The email address of the user")
  private final String email;

  @Schema(description = "The password of the user")
  private final String password;

  @Schema(description = "The name of the user")
  private final String name;

  @Schema(description = "The phone number of the user")
  private final String phone_number;

  @Schema(description = "The postal code of the user's address")
  private final int postal_code;

  @Schema(description = "The address of the user")
  private final String address;

  @Schema(description = "The city of the user's address")
  private final String city;


  public SignUpDTO(String email, String password, String name, String phone_number,
                   int postal_code, String address, String city) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone_number = phone_number;
    this.postal_code = postal_code;
    this.address = address;
    this.city = city;
  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public String getName() {
    return name;
  }

  public String getPhone_number() {
    return phone_number;
  }

  public int getPostal_code() {
    return postal_code;
  }

  public String getAddress() {
    return address;
  }

  public String getCity() {
    return city;
  }
}