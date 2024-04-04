package no.ntnu.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Level;

/**
 * 
 *
 * @author 
 * @version 30.03.2024
 */
@Service
public interface LevelService {

  /**
   * POST
   *
   * @param user
   * @return
   */
  public ResponseEntity<String> create(Level level);

  /**
   * GET
   *
   * @return
   */
  public List<Level> readAll(); 

  /**
   * GET
   *
   * @param id
   * @return
   */
  public ResponseEntity<Level> readById(int id);

  /**
   * PUT
   *
   * @param id
   * @param user
   */
  public ResponseEntity<String> update(int id, Level level);

  /**
   * DELETE
   *
   * @param id
   * @return
   */
  public ResponseEntity<String> delete(int id);
}