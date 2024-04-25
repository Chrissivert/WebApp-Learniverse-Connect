package no.ntnu.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Tags;
import no.ntnu.backend.service.TagsService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * Controller class for managing operations related to tags.
 * Handles HTTP requests/responses for tag-related endpoints.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@RequestMapping("/tags")
@CrossOrigin("http://localhost:5173")
public class TagsController {

  private final TagsService tagsService;

  /**
   * Constructor for TagsController.
   *
   * @param tagsService The TagsService to be injected.
   */
  @Autowired
  public TagsController(TagsService tagsService){
    this.tagsService = tagsService;

  }
  /**
   * Creates a new tag.
   *
   * @param tags The tag object to be created.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PostMapping()
  public ResponseEntity<String> createTag(@RequestBody Tags tags) {
    return this.tagsService.create(tags);
  }
  /**
   * Retrieves all tags.
   *
   * @return List of Tags containing information about all tags.
   */
  @GetMapping()
  public List<Tags> readAllTags() {
    return this.tagsService.readAll();
  }
  /**
   * Retrieves a tag by its ID.
   *
   * @param id The ID of the tag to retrieve.
   * @return ResponseEntity containing the requested tag, if found.
   */
  @GetMapping("/{id}")
  public ResponseEntity<Tags> readTagById(@PathVariable int id) {
    return this.tagsService.readById(id);
  }
  /**
   * Updates an existing tag.
   *
   * @param id   The ID of the tag to be updated.
   * @param tags The updated tag object.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateTag(@PathVariable int id, @RequestBody Tags tags) {
    return this.tagsService.update(id, tags);
  }
  /**
   * Deletes a tag by its ID.
   *
   * @param id The ID of the tag to be deleted.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteTag(@PathVariable int id) {
    return this.tagsService.delete(id);
  }
}