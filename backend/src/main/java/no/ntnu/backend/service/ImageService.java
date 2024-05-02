package no.ntnu.backend.service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import no.ntnu.backend.model.Image;
import no.ntnu.backend.repository.ImageRepository;

@Service
public class ImageService {
  @Autowired
  private ImageRepository imageRepository;

  public ResponseEntity<String> create(MultipartFile file) throws IOException{
    ResponseEntity<String> response;

    try {
      Image image = new Image();
      image.setFileName(file.getOriginalFilename());
      image.setData(file.getBytes());
      image.setContentType(file.getContentType());

      this.addImage(image);
      response = new ResponseEntity<>(file.toString(), HttpStatus.OK);
    } catch (IllegalArgumentException iae) {
      response = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  public List<Image> readAll() {
    return this.imageRepository.findAll();
  }

  public ResponseEntity<Image> readById(int id) {
    ResponseEntity<Image> response;

    Image image = this.getImageById(id);
    if (image != null && image.isValid()) {
      response = new ResponseEntity<>(image, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  public ResponseEntity<String> update(@PathVariable int id, MultipartFile file) {
    ResponseEntity<String> response;

    try {
      Image image = new Image();
      image.setFileName(file.getOriginalFilename());
      image.setData(file.getBytes());
      image.setContentType(file.getContentType());
      this.updateImage(id, image);
      response = new ResponseEntity<>(image.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  public ResponseEntity<String> delete(@PathVariable int id) {
    ResponseEntity<String> response;

    if (this.removeImage(id)) {
      response = new ResponseEntity<>("Couse with ID: " + id + "has been deleted", HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  private boolean removeImage(int id) {
    boolean result = false;

    try {
      this.imageRepository.delete(this.getImageById(id));
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }

  private void updateImage(int id, Image image) {
    Image existingImage = this.getImageById(id);

    if (existingImage == null) {
      throw new IllegalArgumentException();
    }
    if (image == null || !image.isValid()) {
      throw new IllegalArgumentException();
    }
    if ((image.getId()) != id) {
      throw new IllegalArgumentException();
    }

    image.setId(existingImage.getId());
    this.imageRepository.save(image);
  }

  private void addImage(Image image) throws IllegalArgumentException {
    if (image == null) {
      throw new IllegalArgumentException("Image is invalid");
    }

    this.imageRepository.save(image);
  } 

  public Image getImageById(int id) {
    return this.imageRepository.findById(id).get();
  }
}