// package no.ntnu.webapp.group01.security;

// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.AuthenticationException;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import no.ntnu.webapp.group01.util.JwtTokenUtil;

// @Service
// public class AuthService {

//     private final AuthenticationManager authenticationManager;
//     private final UserDetailsService userDetailsService;
//     private final JwtTokenUtil jwtTokenUtil;
//     private final PasswordEncoder passwordEncoder;

//     public AuthService(AuthenticationManager authenticationManager, UserDetailsService userDetailsService,
//                        JwtTokenUtil jwtTokenUtil, PasswordEncoder passwordEncoder) {
//         this.authenticationManager = authenticationManager;
//         this.userDetailsService = userDetailsService;
//         this.jwtTokenUtil = jwtTokenUtil;
//         this.passwordEncoder = passwordEncoder;
//     }

//     public String authenticate(String username, String password) throws AuthenticationException {
//         Authentication authentication = authenticationManager.authenticate(
//                 new UsernamePasswordAuthenticationToken(username, password)
//         );
//         UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//         return jwtTokenUtil.generateToken(userDetails);
//     }
// }
