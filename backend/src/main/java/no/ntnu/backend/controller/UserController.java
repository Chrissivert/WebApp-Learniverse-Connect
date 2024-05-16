package no.ntnu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.User;
import no.ntnu.backend.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Creates a new user", description = "Creates a new user.")
    @PostMapping()
    public ResponseEntity<String> createUser(@RequestBody User user) {
        return this.userService.create(user);
    }

    @Operation(summary = "Retrieves all users", description = "Retrieves all users.")
    @GetMapping()
    public List<User> readAllUsers() {
        return this.userService.readAll();
    }

    @Operation(summary = "Retrieves a user by its ID", description = "Retrieves a user by its ID.")
    @GetMapping("/{id}")
    public ResponseEntity<User> readUserById(@PathVariable int id) {
        return this.userService.readById(id);
    }

    @Operation(summary = "Retrieves a user by its Email", description = "Retrieves a user by its Email.")
    @GetMapping("/email/{email}")
    public ResponseEntity<User> readUserByEmail(@PathVariable String email) {
        return this.userService.readByEmail(email);
    }

    @Operation(summary = "Updates an existing user", description = "Updates an existing user.")
    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable int id, @RequestBody User user) {
        return this.userService.update(id, user);
    }

    @Operation(summary = "Deletes a user by its ID", description = "Deletes a user by its ID.")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        return this.userService.delete(id);
    }
}