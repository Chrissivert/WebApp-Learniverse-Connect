package no.ntnu.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Role;
import no.ntnu.backend.service.RoleService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import io.swagger.v3.oas.annotations.Operation;


@RestController
@RequestMapping("/roles")
@CrossOrigin
public class RoleController {

  private final RoleService roleService;

  @Autowired
  public RoleController(RoleService roleService) {
    this.roleService = roleService;
  }

  @Operation(summary = "Create a new role", description = "Creates a new role object in the system.")
  @PostMapping()
  public ResponseEntity<String> createRole(@RequestBody Role role) {
    return roleService.create(role);
  }

  @Operation(summary = "Retrieves all roles", description = "Retrieves a list of all role objects in the system.")
  @GetMapping()
  public List<Role> readAllRoles() {
    return roleService.readAll();
  }

  @Operation(summary = "Retrieve a role by ID", description = "Retrieves a specific role object based on its ID.")
  @GetMapping("/{id}")
  public ResponseEntity<Role> readRoleById(@PathVariable int id) {
    return roleService.readById(id);
  }

  @Operation(summary = "Update a role", description = "Updates an existing role object in the system.")
  @PutMapping("/{id}")
  public ResponseEntity<String> updateRole(@PathVariable int id, @RequestBody Role role) {
    return roleService.update(id, role);
  }

  @Operation(summary = "Delete a role", description = "Deletes a role object from the system based on its ID.")
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteRole(@PathVariable int id) {
    return roleService.delete(id);
  }
}