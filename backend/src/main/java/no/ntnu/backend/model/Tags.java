package no.ntnu.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

/**
 * Represents a tag entity used to categorize courses.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class Tags {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String tag;

  /**
   * Default constructor.
   */
  public Tags() {
  }

  /**
   * Gets the ID of the tag.
   *
   * @return the ID of the tag
   */
  public int getId() {
    return this.id;
  }

  /**
   * Sets the ID of the tag.
   *
   * @param id the new ID of the tag
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the tag name.
   *
   * @return the tag name
   */
  public String getTag() {
    return this.tag;
  }

  /**
   * Sets the tag name.
   *
   * @param tag the new tag name
   */
  public void setTag(String tag) {
    this.tag = tag;
  }

  /**
   * Checks if the tag is valid based on its attributes.
   *
   * @return true if the tag is valid, false otherwise
   */
  @JsonIgnore
  public boolean isValid() {
    return !this.tag.isBlank() && this.tag != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this) {
      return true;
    }
    if (obj == null || obj.getClass() != this.getClass()) {
      return false;
    }
    var that = (Tags) obj;
    return this.id == that.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id);
  }

  @Override
  public String toString() {
    return "Tags["
        + "id=" + this.id + ", "
        + "tag=" + this.tag + "]";
  }
}