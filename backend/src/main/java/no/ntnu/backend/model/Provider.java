package no.ntnu.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Objects;

/**
 * Represents a provider entity that offers courses.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class Provider {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String name;

  /**
   * Default constructor.
   */
  public Provider() {
  }

  /**
   * Gets the ID of the provider.
   *
   * @return the ID of the provider
   */
  public int getId() {
    return this.id;
  }

  /**
   * Sets the ID of the provider.
   *
   * @param id the new ID of the provider
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the name of the provider.
   *
   * @return the name of the provider
   */
  public String getName() {
    return this.name;
  }

  /**
   * Sets the name of the provider.
   *
   * @param name the new name of the provider
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * Checks if the provider is valid based on its attributes.
   *
   * @return true if the provider is valid, false otherwise
   */
  @JsonIgnore
  public boolean isValid() {
    return !this.name.isBlank() && this.name != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this) {
      return true;
    }
    if (obj == null || obj.getClass() != this.getClass()) {
      return false;
    }
    var that = (Provider) obj;
    return this.id == that.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.name);
  }

  @Override
  public String toString() {
    return "Provider["
        + "id=" + this.id + ", "
        + "name=" + this.name + ']';
  }
}