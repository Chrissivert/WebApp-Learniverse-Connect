package no.ntnu.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.function.Function;

@Component
@Qualifier("JwtUtil")
public class JwtUtil {
    @Value("${jwt_secret_key}")
    private String SECRET_KEY;
    private static final String JWT_AUTH_KEY = "roles";

    public JwtUtil() {
    }

    public String generateToken(UserDetails userDetails) {
        long TIME_NOW = System.currentTimeMillis();
        long MILLISECONDS_IN_HOUR = 3600000L;
        long TIME_AFTER_ONE_HOUR = TIME_NOW + 3600000L;
        return Jwts.builder().setSubject(userDetails.getUsername()).claim("roles", userDetails.getAuthorities()).setIssuedAt(new Date(TIME_NOW)).setExpiration(new Date(TIME_AFTER_ONE_HOUR)).signWith(SignatureAlgorithm.HS256, this.SECRET_KEY).compact();
    }

    public String extractUsername(String token) {
        return (String)this.extractClaim(token, Claims::getSubject);
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        String username = this.extractUsername(token);
        return username.equals(userDetails.getUsername()) && !this.isTokenExpired(token) ? true : false;
    }

    private Date extractExpiration(String token) {
        return (Date)this.extractClaim(token, Claims::getExpiration);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        Claims claims = this.extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return (Claims)Jwts.parser().setSigningKey(this.SECRET_KEY).parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        return this.extractExpiration(token).before(new Date());
    }
}
