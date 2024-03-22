package no.ntnu.backend.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Level {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String difficulty;

  public Level() {
  }

  public Level(int id, String difficulty) {
    this.id = id;
    this.difficulty = difficulty;
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

  @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (Level) obj;
        return this.id == that.id &&
                Objects.equals(this.difficulty, that.difficulty);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, difficulty);
    }

    @Override
    public String toString() {
        return "User[" +
                "id=" + id + ", " +
                "difficulty=" + difficulty + "]";
    }
}