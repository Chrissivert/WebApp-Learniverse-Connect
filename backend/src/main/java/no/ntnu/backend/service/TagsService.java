package no.ntnu.backend.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Tags;


@Service
public interface TagsService {
  
  /**
   * POST
   *
   * @param course
   * @return
   */
  public ResponseEntity<String> create(Tags tags);

  /**
   * GET
   *
   * @return
   */
  public List<Tags> readAll(); 

  /**
   * GET
   *
   * @param id
   * @return
   */
  public ResponseEntity<Tags> readById(int id);

  /**
   * PUT
   *
   * @param id
   * @param course
   */
  public ResponseEntity<String> update(int id, Tags tags);

  /**
   * DELETE
   *
   * @param id
   * @return
   */
  public ResponseEntity<String> delete(int id);
}