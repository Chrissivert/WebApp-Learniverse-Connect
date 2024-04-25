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

import no.ntnu.backend.model.Image;
import no.ntnu.backend.service.ImageService;

@RestController
@CrossOrigin
@RequestMapping("/images")
public class ImageController {
  @Autowired
  private ImageService imageService;

  @PostMapping()
  public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
    return this.imageService.create(file);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Image> readImageById(@PathVariable Integer id) {
    return this.imageService.readById(id);
  }

  @GetMapping()
  public List<Image> readAllImages() {
    return this.imageService.readAll();
  }
}