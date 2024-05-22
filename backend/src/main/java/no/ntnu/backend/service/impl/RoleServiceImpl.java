package no.ntnu.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Role;
import no.ntnu.backend.repository.RoleRepository;
import no.ntnu.backend.service.RoleService;


@Service
public class RoleServiceImpl implements RoleService{

  @Autowired
  private RoleRepository roleRepository;

  @Override
  public ResponseEntity<String> create(Role role) {
    ResponseEntity<String> response;

    try {
      this.addRole(role);
      response = new ResponseEntity<>(role.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      response = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public List<Role> readAll() {
    return this.roleRepository.findAll();
  }

  @Override
  public ResponseEntity<Role> readById(int id) {
    ResponseEntity<Role> response;

    Role role = this.getRoleById(id);
    if (role.isValid() && role != null) {
      response = new ResponseEntity<>(role, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> update(int id, Role role) {
    ResponseEntity<String> response;

    try {
      this.updateRole(id, role);
      response = new ResponseEntity<>(role.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> delete(int id) {
    ResponseEntity<String> response;

    if (this.removeRole(id)) {
      response = new ResponseEntity<>("Role with ID: " + id + " has been deleted", HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }
 
  /**
   * 
   *
   * @param id
   * @return
   */
  private Role getRoleById(int id) {
    return this.roleRepository.findById(id).get();
  }

  /**
   * 
   *
   * @param role
   * @throws IllegalArgumentException
   */
  private void addRole(Role role) throws IllegalArgumentException {
    if (!role.isValid() || role == null) {
      throw new IllegalArgumentException("Role is invalid");
    }

    this.roleRepository.save(role);
  }

  /**
   * 
   *
   * @param id
   * @param role
   * @throws IllegalArgumentException
   */
  private void updateRole(int id, Role role) throws IllegalArgumentException {
    Role existingRole = this.getRoleById(id);

    if (existingRole == null) {
      throw new IllegalArgumentException("No role with ID: " + id + " was found");
    }
    if (role == null || !role.isValid()) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((role.getId() - 1) != id) {
      throw new IllegalArgumentException("Role ID in URL does not match the ID in JSON data");
    }

    role.setId(existingRole.getId());
    this.roleRepository.save(role);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private boolean removeRole(int id) {
    boolean result = false;
    try {
      //Admins cant delete the admin role.
      if(!this.getRoleById(id).getTitle().equals("ROLE_ADMIN")){
        this.roleRepository.delete(this.getRoleById(id));
        result = true;
      }
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}
