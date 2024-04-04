package no.ntnu.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Tags;
import no.ntnu.backend.repository.TagsRepository;
import no.ntnu.backend.service.TagsService;


@Service
public class TagsServiceImpl implements TagsService{

  @Autowired
  private TagsRepository tagsRepository;

  @Override
  public ResponseEntity<String> create(Tags tags) {
    ResponseEntity<String> response;

    try {
      this.addTag(tags);
      response = new ResponseEntity<>(tags.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      response = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public List<Tags> readAll() {
    return this.tagsRepository.findAll();
  }

  @Override
  public ResponseEntity<Tags> readById(int id) {
    ResponseEntity<Tags> response;

    Tags tags = this.getTagById(id);
    if (tags.isValid() && tags != null) {
      response = new ResponseEntity<>(tags, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> update(int id, Tags tags) {
    ResponseEntity<String> response;

    try {
      this.updateTag(id, tags);
      response = new ResponseEntity<>(tags.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> delete(int id) {
    ResponseEntity<String> response;

    if (this.removeTag(id)) {
      response = new ResponseEntity<>("Tag with ID: " + id + " has been deleted", HttpStatus.OK);
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
  private Tags getTagById(int id) {
    return this.tagsRepository.findById(id).get();
  }

  /**
   * 
   *
   * @param tags
   * @throws IllegalArgumentException
   */
  private void addTag(Tags tags) throws IllegalArgumentException {
    if (!tags.isValid() || tags == null) {
      throw new IllegalArgumentException("Tag is invalid");
    }

    this.tagsRepository.save(tags);
  }

  /**
   * 
   *
   * @param id
   * @param tags
   * @throws IllegalArgumentException
   */
  private void updateTag(int id, Tags tags) throws IllegalArgumentException {
    Tags existingTag = this.getTagById(id);

    if (existingTag == null) {
      throw new IllegalArgumentException("No tags with ID: " + id + " was found");
    }
    if (tags == null || !tags.isValid()) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((tags.getId() - 1) != id) {
      throw new IllegalArgumentException("Tag ID in URL does not match the ID in JSON data");
    }

    tags.setId(existingTag.getId());
    this.tagsRepository.save(tags);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private boolean removeTag(int id) {
    boolean result = false;

    try {
      this.tagsRepository.delete(this.getTagById(id));
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}