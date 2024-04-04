package no.ntnu.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Course;

/**
 * 
 *
 * @author 
 * @version 29.03.2024
 */
@Service
public interface CourseService {

  /**
   * POST
   *
   * @param course
   * @return
   */
  public ResponseEntity<String> create(Course course);

  /**
   * GET
   *
   * @return
   */
  public List<Course> readAll(); 

  /**
   * GET
   *
   * @param id
   * @return
   */
  public ResponseEntity<Course> readById(int id);

  /**
   * PUT
   *
   * @param id
   * @param course
   */
  public ResponseEntity<String> update(int id, Course course);

  /**
   * DELETE
   *
   * @param id
   * @return
   */
  public ResponseEntity<String> delete(int id);
}