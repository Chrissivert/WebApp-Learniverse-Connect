package no.ntnu.backend.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Category {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String subject;

  public Category() {
  }

  public Category(int id, String subject) {
    this.id = id;
    this.subject = subject;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getSubject() {
    return subject;
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (Category) obj;
        return this.id == that.id &&
                Objects.equals(this.subject, that.subject);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, subject);
    }

    @Override
    public String toString() {
        return "User[" +
                "id=" + id + ", " +
                "subject=" + subject + "]";
    }
}