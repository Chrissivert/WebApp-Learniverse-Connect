package no.ntnu.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * Represents a mapping between a user and a course denoting that the user has
 * favorited the course.
 * This class is mapped to a database table named "favorite_courses" using JPA
 * annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
@Table(name = "favorite_courses")
public class FavoriteCourse {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private User user;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "course_id", referencedColumnName = "id")
  private Course course;

  @Column(name = "is_favorited")
  private boolean isFavorited;

  /**
   * Default constructor.
   */
  public FavoriteCourse() {
  }

  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the user who favorited the course.
   *
   * @return the user who favorited the course
   */
  public User getUser() {
    return this.user;
  }

  /**
   * Sets the user who favorited the course.
   *
   * @param user the user who favorited the course
   */
  public void setUser(User user) {
    this.user = user;
  }

  /**
   * Gets the course that was favorited.
   *
   * @return the favorited course
   */
  public Course getCourse() {
    return this.course;
  }

  /**
   * Sets the course that was favorited.
   *
   * @param course the favorited course
   */
  public void setCourse(Course course) {
    this.course = course;
  }

  /**
   * Checks if the course is favorited by the user.
   *
   * @return true if the course is favorited, false otherwise
   */
  public boolean isFavorited() {
    return this.isFavorited;
  }

  /**
   * Sets whether the course is favorited by the user.
   *
   * @param favorited true if the course is favorited, false otherwise
   */
  public void setFavorited(boolean favorited) {
    this.isFavorited = favorited;
  }
}