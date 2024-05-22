package no.ntnu.backend.model;

import java.util.Objects;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Tags {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String tag;
  

  public Tags() {
  }

  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTag() {
    return this.tag;
  }

  public void setTag(String tag) {
    this.tag = tag;
  }

  @JsonIgnore
  public boolean isValid() {
    return //this.id > 0 &&
      !this.tag.isBlank() && this.tag != null;
  }
  @Override
  public boolean equals(Object obj) {
      if (obj == this) return true;
      if (obj == null || obj.getClass() != this.getClass()) return false;
      var that = (Tags) obj;
      return this.id == that.id;
  }

  @Override
  public int hashCode() {
      return Objects.hash(this.id);
  }

  @Override
  public String toString() {
      return "Tags[" +
          "id=" + this.id + ", " +
          "tag=" + this.tag + "]";
  }
}