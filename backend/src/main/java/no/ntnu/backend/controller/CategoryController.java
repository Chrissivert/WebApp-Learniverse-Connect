package no.ntnu.backend.controller;


import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Category;
import no.ntnu.backend.service.CategoryService;

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
@RequestMapping("/categories")
@CrossOrigin("http://localhost:5173")
public class CategoryController {
  
  @Autowired
  private CategoryService categoryService;

  /**
   * 
   *
   * @param category
   * @return
   */
  @PostMapping()
  public ResponseEntity<String> createCategory(@RequestBody Category category) {
    return this.categoryService.create(category);
  }
  
  /**
   * 
   *
   * @return
   */
  @GetMapping()
  public List<Category> readAllCategories() {
    return this.categoryService.readAll();
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  @GetMapping("/{id}")
  public ResponseEntity<Category> readCategoryById(@PathVariable int id) {
    return this.categoryService.readById(id);
  }

  /**
   * 
   *
   * @param id
   * @param category
   * @return
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateCategory(@PathVariable int id, @RequestBody Category category) {
    return this.categoryService.update(id, category);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteCategory(@PathVariable int id) {
    return this.categoryService.delete(id);
  }
}