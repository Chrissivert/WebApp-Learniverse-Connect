package no.ntnu.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.Category;
import no.ntnu.backend.service.CategoryService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService){
        this.categoryService = categoryService;
    }

    @Operation(summary = "Creates a new category", description = "Creates a new category.")
    @PostMapping()
    public ResponseEntity<String> createCategory(@RequestBody Category category) {
        return this.categoryService.create(category);
    }

    @Operation(summary = "Retrieves all categories", description = "Retrieves all categories.")
    @GetMapping()
    public List<Category> readAllCategories() {
        return this.categoryService.readAll();
    }

    @Operation(summary = "Retrieves a category by its ID", description = "Retrieves a category by its ID.")
    @GetMapping("/{id}")
    public ResponseEntity<Category> readCategoryById(@PathVariable int id) {
        return this.categoryService.readById(id);
    }

    @Operation(summary = "Updates an existing category", description = "Updates an existing category.")
    @PutMapping("/{id}")
    public ResponseEntity<String> updateCategory(@PathVariable int id, @RequestBody Category category) {
        return this.categoryService.update(id, category);
    }

    @Operation(summary = "Deletes a category by its ID", description = "Deletes a category by its ID.")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable int id) {
        return this.categoryService.delete(id);
    }
}
