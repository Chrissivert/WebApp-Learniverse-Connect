package no.ntnu.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Role;


@Service
public interface RoleService {

  /**
   * POST
   *
   * @param course
   * @return
   */
  public ResponseEntity<String> create(Role role);

  /**
   * GET
   *
   * @return
   */
  public List<Role> readAll(); 

  /**
   * GET
   *
   * @param id
   * @return
   */
  public ResponseEntity<Role> readById(int id);

  /**
   * PUT
   *
   * @param id
   * @param course
   */
  public ResponseEntity<String> update(int id, Role role);

  /**
   * DELETE
   *
   * @param id
   * @return
   */
  public ResponseEntity<String> delete(int id);
}
