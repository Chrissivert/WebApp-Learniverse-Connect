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
 * Represents a difficulty level entity for courses.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class Level {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String difficulty;

  @OneToMany(mappedBy = "level")
  private List<Course> courses;

  /**
   * Default constructor.
   */
  public Level() {
  }

  /**
   * Gets the ID of the level.
   *
   * @return the ID of the level
   */
  public int getId() {
    return this.id;
  }

  /**
   * Sets the ID of the level.
   *
   * @param id the new ID of the level
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the difficulty of the level.
   *
   * @return the difficulty of the level
   */
  public String getDifficulty() {
    return this.difficulty;
  }

  /**
   * Sets the difficulty of the level.
   *
   * @param difficulty the new difficulty of the level
   */
  public void setDifficulty(String difficulty) {
    this.difficulty = difficulty;
  }

  /**
   * Checks if the level is valid based on its attributes.
   *
   * @return true if the level is valid, false otherwise
   */
  @JsonIgnore
  public boolean isValid() {
    return !this.difficulty.isBlank() && this.difficulty != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this) {
      return true;
    }
    if (obj == null || obj.getClass() != this.getClass()) {
      return false;
    }
    var that = (Level) obj;
    return this.id == that.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.difficulty);
  }

  @Override
  public String toString() {
    return "Level["
        + "id=" + this.id
        + "difficulty=" + this.difficulty + "]";
  }
}