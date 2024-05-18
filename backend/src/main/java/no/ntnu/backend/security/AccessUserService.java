package no.ntnu.backend.security;

import java.util.Date;
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
import org.springframework.security.crypto.password.PasswordEncoder;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;


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
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            System.out.println(user);
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


    public String tryCreateNewUser(String email, String password, String username) {
        String errorMessage;
        if ("".equals(email)) {
            errorMessage = "Email can't be empty";
        } else if (this.userExists(email)) {
            errorMessage = "Email already taken";
        } else {
            errorMessage = this.checkPasswordRequirements(password);
            if (errorMessage == null) {
                this.createUser(email, password,username);
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

//    private void createUser(String email, String password, String username) {
//        Role userRole = this.roleRepository.findOneById(1);
//        if (userRole != null) {
//            User user = new User(email, this.createHash(password));
//            user.addRole(userRole);
//            user.setUsername(username);
//
//            String dateString = "2024-04-18";
//            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//
//            try {
//                Date date = dateFormat.parse(dateString);
//                System.out.println("Parsed Date: " + date);
//
//                // If you want to format it back to a string in the same format
//                String formattedDateString = dateFormat.format(date);
//                System.out.println("Formatted Date String: " + formattedDateString);
//            } catch (ParseException e) {
//                System.out.println("Error parsing date: " + e.getMessage());
//                e.printStackTrace();
//            }
//            this.userRepository.save(user);
//        }
//    }

    private void createUser(String email, String password, String username) {
        Role userRole = this.roleRepository.findOneById(2);
        if (userRole != null) {

            User user = new User(email, this.createHash(password));
            user.addRole(userRole);
            user.setUsername(username);
            java.util.Date utilDate = new java.util.Date();
            java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
            user.setStartDate(sqlDate);
            this.userRepository.saveAndFlush(user);
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

