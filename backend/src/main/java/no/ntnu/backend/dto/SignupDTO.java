package no.ntnu.backend.dto;

import java.sql.Date;

public class SignupDTO {
    private final String email;
    private final String password;

    private final Date date;

    private final String username;

    public SignupDTO(String email, String password, Date date, String username) {
        this.email = email;
        this.password = password;
        this.date = date;
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public java.sql.Date getDate() {
        return date;
    }

    public String getUsername() {
        return username;
    }
}

