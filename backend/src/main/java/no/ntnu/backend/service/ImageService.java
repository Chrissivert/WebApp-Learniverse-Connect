package no.ntnu.backend.service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

  public ResponseEntity<String> create(MultipartFile file, String altText) throws IOException{
    ResponseEntity<String> response;

    try {
      Image image = new Image();
      image.setFileName(file.getOriginalFilename());
      image.setData(file.getBytes());
      image.setContentType(file.getContentType());
      image.setAlt(altText);

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

  public ResponseEntity<byte[]> readImageById(int id) {
    ResponseEntity<byte[]> response;

    Image image = this.getImageById(id);
    if (image != null && image.getData() != null && image.isValid()) {
      HttpHeaders headers = new HttpHeaders();
      headers.setContentType(MediaType.valueOf(image.getContentType()));
      response = new ResponseEntity<>(image.getData(), headers, HttpStatus.OK);
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

  private void addImage(Image image) throws IllegalArgumentException {
    if (image == null) {
      throw new IllegalArgumentException("Image is invalid");
    }

    //this.imageRepository.save(image);
    this.addToRepo(image);
  } 

  private Image getImageById(int id) {
    return this.imageRepository.findById(id).get();
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
    //this.imageRepository.save(image);
    this.addToRepo(existingImage);
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

  private void addToRepo(Image image) {
    if (!isImage(image)) {
      throw new IllegalArgumentException("Image does not have valid content type.");
    }

    this.imageRepository.save(image);
  }

  private boolean isImage(Image image) {
    return image != null && this.isImageContentType(image.getContentType());
  }

  private static final String[] IMAGE_CONTENT_TYPES = {"image/png", "image/jpg", "image/jpeg", "image/webp", "image/svg+xml"};

  private boolean isImageContentType(String contentType) {
    return Arrays.asList(IMAGE_CONTENT_TYPES).contains(contentType);
  }
}