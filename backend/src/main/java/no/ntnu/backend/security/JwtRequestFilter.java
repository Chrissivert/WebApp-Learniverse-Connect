package no.ntnu.backend.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import io.jsonwebtoken.JwtException;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    private static final Logger logger = LoggerFactory.getLogger(JwtRequestFilter.class);
    @Autowired
    private final UserDetailsService userDetailsService;
    @Autowired
    private final JwtUtil jwtUtil;

    @Autowired
    public JwtRequestFilter(UserDetailsService userDetailsService, JwtUtil jwtUtil) {
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(jakarta.servlet.http.HttpServletRequest request, jakarta.servlet.http.HttpServletResponse response, jakarta.servlet.FilterChain filterChain) throws jakarta.servlet.ServletException, IOException {

        String authorizationHeader = request.getHeader("Authorization");
        String email = null;
        String jwt = null;

        try {
            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                jwt = authorizationHeader.substring(7);
                email = this.jwtUtil.extractUsername(jwt);
            }

            if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);
                if (this.jwtUtil.validateToken(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken upat = new UsernamePasswordAuthenticationToken(userDetails, (Object)null, userDetails.getAuthorities());
                    upat.setDetails((new WebAuthenticationDetailsSource()).buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(upat);
                }
            }
        } catch (JwtException var9) {
            logger.info("Error while parsing JWT token: " + var9.getMessage());
        }
        filterChain.doFilter(request, response);
    }
}