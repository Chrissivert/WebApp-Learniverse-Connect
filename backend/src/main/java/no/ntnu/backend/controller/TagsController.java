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


@RestController
@RequestMapping("/tags")
@CrossOrigin("http://localhost:5173")
public class TagsController {

  private final TagsService tagsService;

  @Autowired
  public TagsController(TagsService tagsService){
    this.tagsService = tagsService;

  }
  @PostMapping()
  public ResponseEntity<String> createTag(@RequestBody Tags tags) {
    return this.tagsService.create(tags);
  }

  @GetMapping()
  public List<Tags> readAllTags() {
    return this.tagsService.readAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Tags> readTagById(@PathVariable int id) {
    return this.tagsService.readById(id);
  }
  
  @PutMapping("/{id}")
  public ResponseEntity<String> updateTag(@PathVariable int id, @RequestBody Tags tags) {
    return this.tagsService.update(id, tags);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteTag(@PathVariable int id) {
    return this.tagsService.delete(id);
  }
}