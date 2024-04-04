package no.ntnu.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Category;

/**
 * 
 *
 * @author 
 * @version 29.03.2024
 */
@Service
public interface CategoryService {
  
  /**
   * POST
   *
   * @param course
   * @return
   */
  public ResponseEntity<String> create(Category category);

  /**
   * GET
   *
   * @return
   */
  public List<Category> readAll(); 

  /**
   * GET
   *
   * @param id
   * @return
   */
  public ResponseEntity<Category> readById(int id);

  /**
   * PUT
   *
   * @param id
   * @param course
   */
  public ResponseEntity<String> update(int id, Category category);

  /**
   * DELETE
   *
   * @param id
   * @return
   */
  public ResponseEntity<String> delete(int id);
}