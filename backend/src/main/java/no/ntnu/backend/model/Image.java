package no.ntnu.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

/**
 * Represents an image entity that stores image data, filename, content type,
 * and alternate text.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class Image {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Lob
  private byte[] data;
  private String fileName;
  private String contentType;
  private String alt;

  /**
   * Default constructor.
   */
  public Image() {
  }

  /**
   * Gets the ID of the image.
   *
   * @return the ID of the image
   */
  public Integer getId() {
    return this.id;
  }

  /**
   * Sets the ID of the image.
   *
   * @param id the new ID of the image
   */
  public void setId(Integer id) {
    this.id = id;
  }

  /**
   * Gets the data of the image.
   *
   * @return the data of the image
   */
  public byte[] getData() {
    return this.data;
  }

  /**
   * Sets the data of the image.
   *
   * @param data the new data of the image
   */
  public void setData(byte[] data) {
    this.data = data;
  }

  /**
   * Gets the content type of the image.
   *
   * @return the content type of the image
   */
  public String getContentType() {
    return this.contentType;
  }

  /**
   * Sets the content type of the image.
   *
   * @param contentType the new content type of the image
   */
  public void setContentType(String contentType) {
    this.contentType = contentType;
  }

  /**
   * Gets the file name of the image.
   *
   * @return the file name of the image
   */
  public String getFileName() {
    return this.fileName;
  }

  /**
   * Sets the file name of the image.
   *
   * @param fileName the new file name of the image
   */
  public void setFileName(String fileName) {
    this.fileName = fileName;
  }

  /**
   * Gets the alternate text of the image.
   *
   * @return the alternate text of the image
   */
  public String getAlt() {
    return this.alt;
  }

  /**
   * Sets the alternate text of the image.
   *
   * @param alt the new alternate text of the image
   */
  public void setAlt(String alt) {
    this.alt = alt;
  }

  /**
   * Checks if the image is valid based on its attributes.
   *
   * @return true if the image is valid, false otherwise
   */
  public boolean isValid() {
    return this.contentType != null && !this.contentType.isBlank()
        && this.id > 0
        && !this.alt.isBlank()
        && !this.fileName.isBlank();
  }
}