package no.ntnu.webapp.group01.dto;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Data transfer object (DTO) for submitting changes to user profile data.
 */
@Schema(description = "Data transfer object for submitting changes to user profile data")
public class UserProfileDTO {

    @Schema(description = "The unique ID of the user")
    private long id;

    @Schema(description = "The name of the user")
    private String name;

    @Schema(description = "The email address of the user")
    private String email;

    @Schema(description = "The phone number of the user")
    private String phone_number;

    @Schema(description = "The postal code of the user's address")
    private int postal_code;

    @Schema(description = "The street address of the user")
    private String address;

    @Schema(description = "The city of the user's address")
    private String city;

    public UserProfileDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String username) {
        this.email = username;
    }
}