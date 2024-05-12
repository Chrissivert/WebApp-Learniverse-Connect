package no.ntnu.backend.model;
import java.sql.Date;
import java.util.List;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

/**
 * 
 *
 * @author 
 * @version 29.03.2024
 */
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private int levelId;
    private int categoryId;
    private Date startDate;
    private Date endDate;
    private double credit;
    private double hoursPerWeek;
    private String description;
    private String relatedCertification;
    //private int imageId;

     @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<FavoriteCourse> favoriteCourses;

  /**
   * 
   */
  public Course() {
  }

public Course(int id) {
  this.id = id;
}

  /**
   * 
   *
   * @return
   */
  public int getId() {
    return this.id;
  }

  /**
   * 
   *
   * @param id
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * 
   *
   * @return
   */
  public String getTitle() {
    return this.title;
  }

  /**
   * 
   *
   * @param name
   */
  public void setTitle(String name) {
    this.title = name;
  }

  /**
   * 
   *
   * @return
   */
  public int getLevelId() {
    return this.levelId;
  }

  /**
   * 
   *
   * @param levelId
   */
  public void setLevelId(int levelId) {
    this.levelId = levelId;
  }

  /**
   * 
   *
   * @return
   */
  public int getCategoryId() {
    return this.categoryId;
  }

  /**
   * 
   *
   * @param categoryId
   */
  public void setCategoryId(int categoryId) {
    this.categoryId = categoryId;
  }

  /**
   * 
   *
   * @return
   */
  public Date getStartDate() {
    return this.startDate;
  }

  /**
   * 
   *
   * @param startDate
   */
  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  /**
   * 
   *
   * @return
   */
  public Date getEndDate() {
    return this.endDate;
  }

  /**
   * 
   *
   * @param endDate
   */
  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }

  /**
   * 
   *
   * @return
   */
  public double getCredit() {
    return this.credit;
  }

  /**
   * 
   *
   * @param credit
   */
  public void setCredit(double credit) {
    this.credit = credit;
  }

  /**
   * 
   *
   * @return
   */
  public double getHoursPerWeek() {
    return this.hoursPerWeek;
  }

  /**
   * 
   *
   * @param hoursPerWeek
   */
  public void setHoursPerWeek(double hoursPerWeek) {
    this.hoursPerWeek = hoursPerWeek;
  }

  /**
   * 
   *
   * @return
   */
  public String getRelatedCertification() {
    return this.relatedCertification;
  }

  /**
   * 
   *
   * @param relatedCertification
   */
  public void setRelatedCertification(String relatedCertification) {
    this.relatedCertification = relatedCertification;
  }

  /**
   * 
   *
   * @return
   */
  public String getDescription() {
    return this.description;
  }

  /**
   * 
   *
   * @param description
   */
  public void setDescription(String description) {
    this.description = description;
  }

  @JsonIgnore
  public boolean isValid() {
    return //this.id > 0 &&
    this.title != null && !this.title.isBlank() &&
      this.levelId > 0 &&
      this.categoryId > 0 &&
      this.startDate != null &&
      this.endDate != null &&
      this.credit >= 0 &&
      this.hoursPerWeek >= 0 &&
      this.relatedCertification != null && !this.relatedCertification.isBlank() &&
      this.description != null && !this.description.isBlank();
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this)
      return true;
    if (obj == null || obj.getClass() != this.getClass())
      return false;
    var that = (Course) obj;
    return this.id == that.id &&
        this.title == that.title &&
        this.levelId == that.levelId &&
        this.categoryId == that.categoryId &&
        this.startDate == that.startDate &&
        this.endDate == that.endDate &&
        this.credit == that.credit &&
        this.hoursPerWeek == that.hoursPerWeek &&
        this.relatedCertification == that.relatedCertification &&
        this.description == that.description;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.title, this.levelId, this.categoryId, this.startDate, this.endDate, this.credit,
        this.hoursPerWeek, this.relatedCertification, this.description);
  }

  @Override
  public String toString() {
    return "Course[" +
        "id=" + this.id + ", " +
        "name=" + this.title + ", " +
        "levelId=" + this.levelId + ", " +
        "categoryId=" + this.categoryId + ", " +
        "startDate=" + this.startDate + ", " +
        "endDate=" + this.endDate + ", " +
        "credit=" + this.credit + ", " +
        "hoursPerWeek=" + this.hoursPerWeek + ", " +
        "relatedCertification=" + this.relatedCertification +
        "description=" + this.description + ']';
  }
}
