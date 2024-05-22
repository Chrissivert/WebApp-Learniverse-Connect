package no.ntnu.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Objects;

/**
 * Represents a role entity with a title.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class Role {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String title;

  /**
   * Default constructor.
   */
  public Role() {
  }

  /**
   * Constructor with title.
   *
   * @param title the title of the role
   */
  public Role(String title) {
    this.title = title;
  }

  /**
   * Gets the ID of the role.
   *
   * @return the ID of the role
   */
  public int getId() {
    return this.id;
  }

  /**
   * Sets the ID of the role.
   *
   * @param id the new ID of the role
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the title of the role.
   *
   * @return the title of the role
   */
  public String getTitle() {
    return this.title;
  }

  /**
   * Sets the title of the role.
   *
   * @param title the new title of the role
   */
  public void setTitle(String title) {
    this.title = title;
  }

  /**
   * Checks if the role is valid based on its attributes.
   *
   * @return true if the role is valid, false otherwise
   */
  @JsonIgnore
  public boolean isValid() {
    return // this.id > 0 &&
      !this.title.isBlank() && this.title != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this) {
      return true;
    }
    if (obj == null || obj.getClass() != this.getClass()) {
      return false;
    }
    var that = (Role) obj;
    return this.id == that.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.title);
  }

  @Override
  public String toString() {
    return "Role[" 
      + "id=" + this.id 
      + "title=" + this.title + ']';
  }
}