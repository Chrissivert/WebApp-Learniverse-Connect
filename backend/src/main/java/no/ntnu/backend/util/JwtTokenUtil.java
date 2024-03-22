// package no.ntnu.backend.util;

// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.JwtParser;
// import io.jsonwebtoken.Jwts;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.stereotype.Service;

// import java.util.Date;
// import java.util.HashMap;
// import java.util.Map;
// import java.util.function.Function;

// @Service
// public class JwtTokenUtil {

//     @Value("${jwt.secret}")
//     private String secret;

//     @Value("${jwt.expiration}")
//     private long expiration;

//     public String generateToken(UserDetails userDetails) {
//         Map<String, Object> claims = new HashMap<>();
//         return createToken(claims, userDetails.getUsername());
//     }

//     private String createToken(Map<String, Object> claims, String subject) {
//         Date now = new Date();
//         Date expiryDate = new Date(now.getTime() + expiration);
//         return Jwts.builder()
//                 .setClaims(claims)
//                 .setSubject(subject)
//                 .setIssuedAt(now)
//                 .setExpiration(expiryDate)
//                 .compact();
//     }

//     public boolean validateToken(String token, UserDetails userDetails) {
//         String username = extractUsername(token);
//         return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
//     }

//     private boolean isTokenExpired(String token) {
//         Date expirationDate = extractExpiration(token);
//         return expirationDate.before(new Date());
//     }

//     public String extractUsername(String token) {
//         return extractClaim(token, Claims::getSubject);
//     }

//     public Date extractExpiration(String token) {
//         return extractClaim(token, Claims::getExpiration);
//     }

//     public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//         final Claims claims = extractAllClaims(token);
//         return claimsResolver.apply(claims);
//     }

//     private Claims extractAllClaims(String token) {
//     JwtParser parser = Jwts.parser().setSigningKey(secret).build();
//     return parser.parseClaimsJws(token).getBody();
// }
    
// }