package no.ntnu.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Level;
import no.ntnu.backend.service.LevelService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * 
 *
 * @author 
 * @version 30.03.2024
 */
@RestController
@RequestMapping("/levels")
@CrossOrigin("http://localhost:5173")
public class LevelController {
  
  @Autowired
  private LevelService levelService;

  /**
   * 
   *
   * @param level
   * @return
   */
  @PostMapping()
  public ResponseEntity<String> createLevel(@RequestBody Level level) {
    return this.levelService.create(level);
  }

  /**
   * 
   *
   * @return
   */
  @GetMapping()
  public List<Level> readAllLevels() {
    return this.levelService.readAll();
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  @GetMapping("/{id}")
  public ResponseEntity<Level> readLevelById(@PathVariable int id) {
    return this.levelService.readById(id);
  }

  /**
   * 
   *
   * @param id
   * @param level
   * @return
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateLevel(@PathVariable int id, @RequestBody Level level) {
    return this.levelService.update(id, level);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteLevel(@PathVariable int id) {
    return this.levelService.delete(id);
  }
}