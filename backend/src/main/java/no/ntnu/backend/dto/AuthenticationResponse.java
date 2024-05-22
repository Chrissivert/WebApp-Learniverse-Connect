package no.ntnu.backend.dto;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable{
    private final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public Strzing getJwt() {
        return this.jwt;
    }
}
