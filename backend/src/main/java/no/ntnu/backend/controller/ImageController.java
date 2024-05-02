package no.ntnu.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.Image;
import no.ntnu.backend.service.ImageService;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * Controller class for managing operations related to images.
 * Handles HTTP requests/responses for image-related endpoints.
 * 
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@CrossOrigin
@RequestMapping("/images")
public class ImageController {
  @Autowired
  private ImageService imageService;

  /**
   * Uploads a new image.
   *
   * @param file The file to be uploaded.
   * @return ResponseEntity indication the success/failure of the operation.
   * @throws IOException
   */
  @PostMapping()
  public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
    return this.imageService.create(file);
  }

  /**
   * Retrieved all images.
   *
   * @return List of Images containing information about all images.
   */
  @GetMapping()
  public List<Image> readAllImages() {
    return this.imageService.readAll();
  }

  /**
   * Retrieved an image by its ID.
   *
   * @param id The ID of the image to retrieve.
   * @return ResponseEntity indication the success/failure of the operation.
   */
  @GetMapping("/{id}")
  public ResponseEntity<Image> readImageById(@PathVariable int id) {
    return this.imageService.readById(id);
  }

  /**
   * Updates an existing image.
   *
   * @param id The ID of the image to update.
   * @param file The file to be updated.
   * @return ResponseEntity indication the success/failure of the operation.
   * @throws IOException
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateImage(@PathVariable int id, @RequestParam("file") MultipartFile file) throws IOException {
    return this.imageService.update(id, file);
  }

  /**
   * Deletes an image by its ID.
   *
   * @param id The ID of the image to delete.
   * @return ResponseEntity indication the success/failure of the operation.
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteImage(@PathVariable int id) {
    return this.imageService.delete(id);
  }
}