package no.ntnu.backend.service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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
      //image.setId(file.getOriginalFilename().hashCode());
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

  public ResponseEntity<Image> readById(Integer id) {
    ResponseEntity<Image> response;

    Image image = this.getImageById(id);
    if (image.isValid() && image != null) {
      response = new ResponseEntity<>(image, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  private void addImage(Image image) throws IllegalArgumentException {
    if (image == null) {
      throw new IllegalArgumentException("Image is invalid");
    }

    this.imageRepository.save(image);
  } 

  public Image getImageById(Integer id) {
    return this.imageRepository.findById(id).get();
  }
}