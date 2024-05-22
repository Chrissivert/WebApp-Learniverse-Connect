package no.ntnu.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

/**
 * Represents a course entity with various attributes such as title, start date,
 * end date, credit, etc.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String title;
  private Date startDate;
  private Date endDate;
  private double credit;
  private double hoursPerWeek;
  private String description;
  private String relatedCertification;
  private Integer imageId;
  private boolean hidden;

  @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
  private List<FavoriteCourse> favoriteCourses;

  @ManyToOne
  @JoinColumn(name = "categoryId", insertable = false, updatable = false)
  private Category category;

  @ManyToOne
  @JoinColumn(name = "levelId", insertable = false, updatable = false)
  private Level level;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "course_tags", joinColumns = @JoinColumn(name = "course_id"), 
      inverseJoinColumns = @JoinColumn(name = "tag_id"))
  private Set<Tags> tags = new HashSet<>();

  /**
   * Default constructor.
   */
  public Course() {
  }

  /**
   * Constructor with id parameter.
   *
   * @param id the ID of the course
   */
  public Course(int id) {
    this.id = id;
  }

  /**
   * Gets the ID of the course.
   *
   * @return the ID of the course
   */
  public int getId() {
    return this.id;
  }

  /**
   * Sets the ID of the course.
   *
   * @param id the new ID of the course
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Gets the title of the course.
   *
   * @return the title of the course
   */
  public String getTitle() {
    return this.title;
  }

  /**
   * Sets the title of the course.
   *
   * @param title the new title of the course
   */
  public void setTitle(String title) {
    this.title = title;
  }

  /**
   * Gets the level of the course.
   *
   * @return the level of the course
   */
  public Level getLevel() {
    return level;
  }

  /**
   * Sets the level of the course.
   *
   * @param level the new level of the course
   */
  public void setLevel(Level level) {
    this.level = level;
  }

  /**
   * Gets the category of the course.
   *
   * @return the category of the course
   */
  public Category getCategory() {
    return this.category;
  }

  /**
   * Sets the category of the course.
   *
   * @param category the new category of the course
   */
  public void setCategory(Category category) {
    this.category = category;
  }

  /**
   * Gets the start date of the course.
   *
   * @return the start date of the course
   */
  public Date getStartDate() {
    return this.startDate;
  }

  /**
   * Sets the start date of the course.
   *
   * @param startDate the new start date of the course
   */
  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  /**
   * Gets the end date of the course.
   *
   * @return the end date of the course
   */
  public Date getEndDate() {
    return this.endDate;
  }

  /**
   * Sets the end date of the course.
   *
   * @param endDate the new end date of the course
   */
  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }

  /**
   * Gets the credit value of the course.
   *
   * @return the credit value of the course
   */
  public double getCredit() {
    return this.credit;
  }

  /**
   * Sets the credit value of the course.
   *
   * @param credit the new credit value of the course
   */
  public void setCredit(double credit) {
    this.credit = credit;
  }

  /**
   * Gets the number of hours per week for the course.
   *
   * @return the number of hours per week
   */
  public double getHoursPerWeek() {
    return this.hoursPerWeek;
  }

  /**
   * Sets the number of hours per week for the course.
   *
   * @param hoursPerWeek the new number of hours per week
   */
  public void setHoursPerWeek(double hoursPerWeek) {
    this.hoursPerWeek = hoursPerWeek;
  }

  /**
   * Gets the related certification of the course.
   *
   * @return the related certification
   */
  public String getRelatedCertification() {
    return this.relatedCertification;
  }

  /**
   * Sets the related certification of the course.
   *
   * @param relatedCertification the new related certification
   */
  public void setRelatedCertification(String relatedCertification) {
    this.relatedCertification = relatedCertification;
  }

  /**
   * Gets the description of the course.
   *
   * @return the description of the course
   */
  public String getDescription() {
    return this.description;
  }

  /**
   * Sets the description of the course.
   *
   * @param description the new description of the course
   */
  public void setDescription(String description) {
    this.description = description;
  }

  /**
   * Gets the image ID associated with the course.
   *
   * @return the image ID
   */
  public Integer getImageId() {
    return this.imageId;
  }

  /**
   * Sets the image ID associated with the course.
   *
   * @param imageId the new image ID
   */
  public void setImageId(Integer imageId) {
    this.imageId = imageId;
  }

  /**
   * Sets whether the course is hidden.
   *
   * @param hidden true if the course should be hidden, false otherwise
   */
  public void setHidden(boolean hidden) {
    this.hidden = hidden;
  }

  /**
   * Checks if the course is hidden.
   *
   * @return true if the course is hidden, false otherwise
   */
  public boolean isHidden() {
    return this.hidden;
  }

  /**
   * Checks if the course is valid based on its attributes.
   *
   * @return true if the course is valid, false otherwise
   */
  @JsonIgnore
  public boolean isValid() {
    return this.title != null && !this.title.isBlank()
        && this.level != null && this.level.isValid()
        && this.category != null
        && this.startDate != null
        && this.endDate != null
        && this.credit >= 0
        && this.hoursPerWeek >= 0
        && this.relatedCertification != null && !this.relatedCertification.isBlank()
        && this.description != null && !this.description.isBlank();
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this) {
      return true;

    }
    if (obj == null || obj.getClass() != this.getClass()) {
      return false;
    }
    var that = (Course) obj;
    return this.id == that.id
        && Objects.equals(this.title, that.title)
        && Objects.equals(this.level, that.level)
        && Objects.equals(this.category, that.category)
        && Objects.equals(this.startDate, that.startDate)
        && Objects.equals(this.endDate, that.endDate)
        && Double.compare(this.credit, that.credit) == 0
        && Double.compare(this.hoursPerWeek, that.hoursPerWeek) == 0
        && Objects.equals(this.relatedCertification, that.relatedCertification)
        && Objects.equals(this.description, that.description)
        && Objects.equals(this.imageId, that.imageId)
        && this.hidden == that.hidden;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.title, this.level, this.category, this.startDate,
        this.endDate, this.credit, this.hoursPerWeek, this.relatedCertification, this.description,
        this.imageId, this.hidden);
  }

  @Override
  public String toString() {
    return "Course["
        + "id=" + this.id + ", "
        + "title=" + this.title + ", "
        + "level=" + this.level + ", "
        + "category=" + this.category + ", "
        + "startDate=" + this.startDate + ", "
        + "endDate=" + this.endDate + ", "
        + "credit=" + this.credit + ", "
        + "hoursPerWeek=" + this.hoursPerWeek + ", "
        + "relatedCertification=" + this.relatedCertification + ", "
        + "description=" + this.description + ", "
        + "imageId=" + this.imageId + ", "
        + "hidden=" + this.hidden + "]";
  }
}