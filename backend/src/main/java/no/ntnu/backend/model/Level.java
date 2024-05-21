package no.ntnu.backend.model;

import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

/**
 * 
 *
 * @author 
 * @version 30.03.2024
 */
@Entity
public class Level {
  
  @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String difficulty;

    @OneToMany(mappedBy = "level")
    private List<Course> courses;
    
  public Level() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getDifficulty() {
    return difficulty;
  }

  public void setDifficulty(String difficulty) {
    this.difficulty = difficulty;
  }

  @JsonIgnore
  public boolean isValid() {
    return //this.id > 0 &&
      !this.difficulty.isBlank() && this.difficulty != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this)
      return true;
    if (obj == null || obj.getClass() != this.getClass())
      return false;
    var that = (Level) obj;
    return this.id == that.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id);
  }

  @Override
  public String toString() {
    return "Level[" +
        "id=" + this.id + ']';
  }
}