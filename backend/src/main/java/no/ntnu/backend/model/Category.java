package no.ntnu.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import java.util.Objects;

/**
 * Represents a category entity which categorizes different courses.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class Category {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String subject;

  @OneToMany(mappedBy = "category")
  private List<Course> courses;

  /**
   * Default constructor.
   */
  public Category() {
  }

  /**
   * Gets the ID of the category.
   *
   * @return the ID of the category
   */
  public int getId() {
    return id;
  }

  /**
   * Sets the ID of the category.
   *
   * @param id the new ID of the category
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the subject of the category.
   *
   * @return the subject of the category
   */
  public String getSubject() {
    return subject;
  }

  /**
   * Sets the subject of the category.
   *
   * @param subject the new subject of the category
   */
  public void setSubject(String subject) {
    this.subject = subject;
  }

  /**
   * Checks if the category is valid based on its attributes.
   *
   * @return true if the category is valid, false otherwise
   */
  @JsonIgnore
  public boolean isValid() {
    return !this.subject.isBlank() && this.subject != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this) {
      return true;
    }
    if (obj == null || obj.getClass() != this.getClass()) {
      return false;
    }
    var that = (Category) obj;
    return this.id == that.id
        && this.subject == that.subject;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.subject);
  }

  @Override
  public String toString() {
    return "Category["
        + "id=" + this.id
        + "subject=" + this.subject + "]";
  }
}