package no.ntnu.backend.service;

import java.util.Optional;
import no.ntnu.dto.UserProfileDto;
import no.ntnu.models.Role;
import no.ntnu.models.User;
import no.ntnu.repositories.RoleRepository;
import no.ntnu.repositories.UserRepository;
import no.ntnu.security.AccessUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class AccessUserService implements UserDetailsService {
    private static final int MIN_PASSWORD_LENGTH = 6;
    @Autowired
    UserService userService;
    @Autowired
    RoleService roleService;

    public AccessUserService() {
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = this.userRepository.findByUsername(username);
        if (user.isPresent()) {
            return new AccessUserDetails((User)user.get());
        } else {
            throw new UsernameNotFoundException("User " + username + "not found");
        }
    }

    public User getSessionUser() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String username = authentication.getName();
        return (User)this.userRepository.findByUsername(username).orElse((Object)null);
    }

    private boolean userExists(String username) {
        try {
            this.loadUserByUsername(username);
            return true;
        } catch (UsernameNotFoundException var3) {
            return false;
        }
    }

    public String tryCreateNewUser(String username, String password) {
        String errorMessage;
        if ("".equals(username)) {
            errorMessage = "Username can't be empty";
        } else if (this.userExists(username)) {
            errorMessage = "Username already taken";
        } else {
            errorMessage = this.checkPasswordRequirements(password);
            if (errorMessage == null) {
                this.createUser(username, password);
            }
        }

        return errorMessage;
    }

    private String checkPasswordRequirements(String password) {
        String errorMessage = null;
        if (password != null && password.length() != 0) {
            if (password.length() < 6) {
                errorMessage = "Password must be at least 6 characters";
            }
        } else {
            errorMessage = "Password can't be empty";
        }

        return errorMessage;
    }

    private void createUser(String username, String password) {
        Role userRole = this.roleRepository.findOneByName("ROLE_USER");
        if (userRole != null) {
            User user = new User(username, this.createHash(password));
            user.addRole(userRole);
            this.userRepository.save(user);
        }

    }

    private String createHash(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    public boolean updateProfile(User user, UserProfileDto profileData) {
        user.setBio(profileData.getBio());
        this.userRepository.save(user);
        return true;
    }
}

