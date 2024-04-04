package no.ntnu.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Level;
import no.ntnu.backend.repository.LevelRepository;
import no.ntnu.backend.service.LevelService;


/**
 * 
 *
 * @author 
 * @version 30.03.2024
 */
@Service
public class LevelServiceImpl implements LevelService{

  @Autowired
  private LevelRepository levelRepository;

  @Override
  public ResponseEntity<String> create(Level level) {
    ResponseEntity<String> respone;

    try {
      this.addLevel(level);
      respone = new ResponseEntity<>(level.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      respone = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return respone;
  }

  @Override
  public List<Level> readAll() {
    return this.levelRepository.findAll();
  }

  @Override
  public ResponseEntity<Level> readById(int id) {
    ResponseEntity<Level> response;

    Level level = this.getLevelById(id);
    if (level.isValid() && level != null) {
      response = new ResponseEntity<>(level, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> update(int id, Level level) {
    ResponseEntity<String> response;

    try {
      this.updateLevel(id, level);
      response = new ResponseEntity<>(level.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> delete(int id) {
    ResponseEntity<String> response;

    if (this.removeLevel(id)) {
      response = new ResponseEntity<>("Level with ID: " + id + " has been deleted", HttpStatus.OK);
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
  private Level getLevelById(int id) {
    return this.levelRepository.findById(id).get();
  }

  /**
   * 
   *
   * @param level
   * @throws IllegalArgumentException
   */
  private void addLevel(Level level) throws IllegalArgumentException {
    if (!level.isValid() || level == null) {
      throw new IllegalArgumentException("Level is invalid");
    }

    this.levelRepository.save(level);
  }

  /**
   * 
   *
   * @param id
   * @param level
   * @throws IllegalArgumentException
   */
  private void updateLevel(int id, Level level) throws IllegalArgumentException {
    Level existingLevel = this.getLevelById(id);

    if (existingLevel == null) {
      throw new IllegalArgumentException("No level with ID: " + id + " was found");
    }
    if (level == null || !level.isValid()) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((level.getId()) != id) {
      throw new IllegalArgumentException("Level ID in URL does not match the ID in JSON data");
    }

    level.setId(existingLevel.getId());
    this.levelRepository.save(level);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private boolean removeLevel(int id) {
    boolean result = false;

    try {
      this.levelRepository.delete(this.getLevelById(id));
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}