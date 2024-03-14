package no.ntnu.webapp.group01.models;

import io.swagger.v3.oas.annotations.media.Schema;

import javax.persistence.*;


/**
 * User stored in the database.
 */
@Entity(name = "app_user")
@Schema(description = "Represents a user in the application")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique identifier of the user")
    private Long id;

    @Schema(description = "User's email", example = "user@example.com")
    private String email;

    @Schema(description = "User's password", example = "password123")
    private String userPassword;


    /**
     * Empty constructor needed for JPA
     */
    public User() {
    }

    public User(String email, String password) {
        this.email = email;
        this.userPassword = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String username) {
        this.email = username;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String password) {
        this.userPassword = password;
    }
}