package no.ntnu.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Category;
import no.ntnu.backend.repository.CategoryRepository;
import no.ntnu.backend.service.CategoryService;


@Service
public class CategoryServiceImpl implements CategoryService {

  @Autowired
  private CategoryRepository categoryRepository;

  @Override
  public ResponseEntity<String> create(Category category) {
    ResponseEntity<String> response;

    try {
      this.addCategory(category);
      response = new ResponseEntity<>(category.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      response = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public List<Category> readAll() {
    return this.categoryRepository.findAll();
  }

  @Override
  public ResponseEntity<Category> readById(int id) {
    ResponseEntity<Category> response;

    Category category = this.getCategoryById(id);
    if (category.isValid() && category != null) {
      response = new ResponseEntity<>(category, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> update(int id, Category category) {
    ResponseEntity<String> response;

    try {
      this.updateCategory(id, category);
      response = new ResponseEntity<>(category.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> delete(int id) {
    ResponseEntity<String> response;

    if (this.removeCategory(id)) {
      response = new ResponseEntity<>("Category with ID: " + id + " has been deleted", HttpStatus.OK);
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
  private Category getCategoryById(int id) {
    return this.categoryRepository.findById(id).get();
  }

  /**
   * 
   *
   * @param course
   * @throws IllegalArgumentException
   */
  private void addCategory(Category category) throws IllegalArgumentException {
    if (!category.isValid() || category == null) {
      throw new IllegalArgumentException("Category is invalid");
    }

    this.categoryRepository.save(category);
  }

  /**
   * 
   *
   * @param id
   * @param course
   * @throws IllegalArgumentException
   */
  private void updateCategory(int id, Category category) throws IllegalArgumentException {
    Category existingCategory = this.getCategoryById(id);

    if (existingCategory == null) {
      throw new IllegalArgumentException("No category with ID: " + id + " was found");
    }
    if (category == null || !category.isValid()) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((category.getId()) != id) {
      throw new IllegalArgumentException("Category ID in URL does not match the ID in JSON data");
    }

    category.setId(existingCategory.getId());
    this.categoryRepository.save(category);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private boolean removeCategory(int id) {
    boolean result = false;

    try {
      this.categoryRepository.delete(this.getCategoryById(id));
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}