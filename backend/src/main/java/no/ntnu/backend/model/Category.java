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
public class Category {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String subject;

    @OneToMany(mappedBy = "category")
    private List<Course> courses;
    

  public Category() {
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

  @JsonIgnore
  public boolean isValid() {
    return //this.id > 0 &&
      !this.subject.isBlank() && this.subject != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this)
      return true;
    if (obj == null || obj.getClass() != this.getClass())
      return false;
    var that = (Category) obj;
    return this.id == that.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id);
  }

  @Override
  public String toString() {
    return "Category[" +
        "id=" + this.id + ']';
  }
}