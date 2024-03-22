package no.ntnu.backend.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// @Entity
public class CourseTags {

  private int course_id;
  private int tag_id;

  public CourseTags() {
  }

  public CourseTags(int course_id, int tag_id) {
    this.course_id = course_id;
    this.tag_id = tag_id;
  }

  public int getCourseId() {
    return course_id;
  }

  public void setCourseId(int id) {
    this.course_id = id;
  }

  public int getTagId() {
    return tag_id;
  }

  public void setTagId(int tag_id) {
    this.tag_id = tag_id;
  }

  @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (CourseTags) obj;
        return this.course_id == that.course_id &&
                Objects.equals(this.tag_id, that.tag_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(course_id, tag_id);
    }

    @Override
    public String toString() {
        return "User[" +
                "course_id=" + course_id + ", " +
                "tag_id=" + tag_id + "]";
    }
}