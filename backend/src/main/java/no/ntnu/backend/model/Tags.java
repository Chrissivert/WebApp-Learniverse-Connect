package no.ntnu.backend.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tags {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String tag;

  public Tags() {
  }

  public Tags(int id, String tag) {
    this.id = id;
    this.tag = tag;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTag() {
    return tag;
  }

  public void setTag(String tag) {
    this.tag = tag;
  }

  @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (Tags) obj;
        return this.id == that.id &&
                Objects.equals(this.tag, that.tag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, tag);
    }

    @Override
    public String toString() {
        return "User[" +
                "id=" + id + ", " +
                "tag=" + tag + "]";
    }
}