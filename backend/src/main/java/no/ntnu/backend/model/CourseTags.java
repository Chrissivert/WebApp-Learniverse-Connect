package no.ntnu.backend.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import java.io.Serializable;
import java.util.Objects;

/**
 * Represents the association between a Course and its Tags with a composite
 * key.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class CourseTags {
  @EmbeddedId
  private CourseTagsId id;

  /**
   * Default constructor.
   */
  public CourseTags() {
  }

  /**
   * Constructor with course ID and tag ID.
   *
   * @param courseId the ID of the course
   * @param tagId    the ID of the tag
   */
  public CourseTags(int courseId, int tagId) {
    this.id = new CourseTagsId(courseId, tagId);
  }

  /**
   * Gets the composite key of CourseTags.
   *
   * @return the composite key
   */
  public CourseTagsId getId() {
    return this.id;
  }

  /**
   * Sets the composite key of CourseTags.
   *
   * @param id the composite key to set
   */
  public void setId(CourseTagsId id) {
    this.id = id;
  }

  /**
   * Gets the ID of the course.
   *
   * @return the course ID
   */
  public int getCourseId() {
    return this.id.getCourseId();
  }

  /**
   * Sets the ID of the course.
   *
   * @param courseId the course ID to set
   */
  public void setCourseId(int courseId) {
    this.id.setCourseId(courseId);
  }

  /**
   * Gets the ID of the tag.
   *
   * @return the tag ID
   */
  public int getTagId() {
    return this.id.getTagId();
  }

  /**
   * Sets the ID of the tag.
   *
   * @param tagId the tag ID to set
   */
  public void setTagId(int tagId) {
    this.id.setTagId(tagId);
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) {
      return true;
    }
    if (obj == null || getClass() != obj.getClass()) {
      return false;
    }
    CourseTags that = (CourseTags) obj;
    return Objects.equals(this.id, that.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id);
  }

  @Override
  public String toString() {
    return "CourseTags["
        + "courseId=" + id.getCourseId() + ", "
        + "tagId=" + id.getTagId() + "]";
  }
}

/**
 * Composite key class for CourseTags, combining course ID and tag ID.
 * This class is used to represent the composite key in the CourseTags entity.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Embeddable
class CourseTagsId implements Serializable {
  private int courseId;
  private int tagId;

  /**
   * Default constructor.
   */
  public CourseTagsId() {
  }

  /**
   * Constructor with course ID and tag ID.
   *
   * @param courseId the ID of the course
   * @param tagId    the ID of the tag
   */
  public CourseTagsId(int courseId, int tagId) {
    this.courseId = courseId;
    this.tagId = tagId;
  }

  /**
   * Gets the course ID.
   *
   * @return the course ID
   */
  public int getCourseId() {
    return this.courseId;
  }

  /**
   * Sets the course ID.
   *
   * @param courseId the course ID to set
   */
  public void setCourseId(int courseId) {
    this.courseId = courseId;
  }

  /**
   * Gets the tag ID.
   *
   * @return the tag ID
   */
  public int getTagId() {
    return this.tagId;
  }

  /**
   * Sets the tag ID.
   *
   * @param tagId the tag ID to set
   */
  public void setTagId(int tagId) {
    this.tagId = tagId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CourseTagsId that = (CourseTagsId) o;
    return courseId == that.courseId
        && tagId == that.tagId;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.courseId, this.tagId);
  }
}