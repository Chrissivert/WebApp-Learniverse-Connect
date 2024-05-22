package no.ntnu.backend.model;

import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class Role {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String title;

  public Role() {
  }

  public Role(String title){this.title = title;}

  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  //public void setUsers(Set<User> users){this.users = users;}

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  @JsonIgnore
  public boolean isValid() {
    return //this.id > 0 &&
      !this.title.isBlank() && this.title != null;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this)
      return true;
    if (obj == null || obj.getClass() != this.getClass())
      return false;
    var that = (Role) obj;
    return this.id == that.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id);
  }

  @Override
  public String toString() {
    return "Provider[" +
        "id=" + this.id + ']';
  }
}