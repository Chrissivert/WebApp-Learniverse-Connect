package no.ntnu.backend.security;

import java.util.Optional;
import no.ntnu.backend.model.Role;
import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.RoleRepository;
import no.ntnu.backend.repository.UserRepository;
import no.ntnu.backend.security.AccessUserDetails;
import no.ntnu.backend.service.impl.RoleServiceImpl;
import no.ntnu.backend.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
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
    UserServiceImpl userService;
    @Autowired
    RoleServiceImpl roleService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(email);
        if (user.isPresent()) {
            return new AccessUserDetails(user.get());
        } else {
            throw new UsernameNotFoundException("User " + user + "not found");
        }
    }

    /*
    @Override
    public UserDetails loadUserById(int id) throws UsernameNotFoundException {
        ResponseEntity<User> user = this.userService.readById(id);
        if (user != null) {
            return new AccessUserDetails((User)user.get());
        } else {
            throw new UsernameNotFoundException("User " + user + "not found");
        }
    }
     */


    public User getSessionUser() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        //The user's name isnt used here, the email is used instead.
        String email = authentication.getName();
        return (User)this.userRepository.findByUsername(email).orElse(null);
    }

    private boolean userExists(String email) {
        try {
            this.loadUserByUsername(email);
            return true;
        } catch (UsernameNotFoundException var3) {
            return false;
        }
    }

    /*
    public String tryCreateNewUser(String email, String password) {
        String errorMessage;
        if ("".equals(email)) {
            errorMessage = "Email can't be empty";
        } else if (this.userExists(email)) {
            errorMessage = "Email already taken";
        } else {
            errorMessage = this.checkPasswordRequirements(password);
            if (errorMessage == null) {
                this.createUser(email, password);
            }
        }
        return errorMessage;
    }*/

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

    private void createUser(String email, String password) {
        Role userRole = this.roleRepository.findOneByTitle("ROLE_USER");
        if (userRole != null) {
            User user = new User(email, this.createHash(password));
            user.setRoleId(0);
            this.userRepository.save(user);
        }
    }

    private String createHash(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    /*
    public boolean updateProfile(User user, UserProfileDto profileData) {
        user.setBio(profileData.getBio());
        this.userRepository.save(user);
        return true;
    }
    */
}

