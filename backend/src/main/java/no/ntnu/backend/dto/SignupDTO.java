package no.ntnu.backend.dto;

public class SignupDTO {
    private final String email;
    private final String password;

    public SignupDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getUsername() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }
}

