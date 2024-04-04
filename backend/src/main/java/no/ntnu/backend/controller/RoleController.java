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


@RestController
@RequestMapping("/roles")
@CrossOrigin("http://localhost:5173")
public class RoleController {
  
  @Autowired
  private RoleService roleService;

  @PostMapping()
  public ResponseEntity<String> createRole(@RequestBody Role role) {
    return this.roleService.create(role);
  }

  @GetMapping()
  public List<Role> readAllRoles() {
    return this.roleService.readAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Role> readRoleById(@PathVariable int id) {
    return this.roleService.readById(id);
  }

  @PutMapping("/{id}")
  public ResponseEntity<String> updateRole(@PathVariable int id, @RequestBody Role role) {
    return this.roleService.update(id, role);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteRole(@PathVariable int id) {
    return this.roleService.delete(id);
  }
}