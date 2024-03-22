package no.ntnu.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.sql.Date;
import java.util.Objects;

/**
 * Represents a course entity with its properties and methods.
 *
 * @author group 01
 * @version spring 2024
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
    /**
     * Default constructor for Course class.
     */
    public Course() {
    }

    /**
     * Retrieves the ID of the course.
     *
     * @return The ID of the course.
     */
    public int getId() {
        return id;
    }
    /**
     * Sets the ID of the course.
     *
     * @param id The ID of the course.
     */
    public void setId(int id) {
        this.id = id;
    }
    /**
     * Retrieves the title of the course.
     *
     * @return The title of the course.
     */
    public String getTitle() {
        return title;
    }
    /**
     * Sets the title of the course.
     *
     * @param title The title of the course.
     */
    public void setTitle(String title) {
        this.title = title;
    }
    /**
     * Retrieves the level id of the course.
     *
     * @return The level id of the course.
     */
    public int getLevelId() {
        return levelId;
    }
    /**
     * Sets the level id of the course.
     *
     * @param levelId The ID of the course.
     */
    public void setLevelId(int levelId) {
        this.levelId = levelId;
    }
    /**
     * Retrieves the category id of the course.
     *
     * @return The category id of the course.
     */
    public int getCategoryId() {
        return categoryId;
    }
    /**
     * Sets the category id of the course.
     *
     * @param categoryId The ID of the course.
     */
    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    /**
     * Sets the start date of the course.
     *
     * @param startDate The start date of the course.
     */
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }
    /**
     * Retrieves the start date of the course.
     *
     * @return The start date of the course.
     */
    public Date getStartDate() {
        return startDate;
    }
    /**
     * Sets the end date of the course.
     *
     * @param endDate The end date of the course.
     */
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    /**
     * Retrieves the end date of the course.
     *
     * @return The end date of the course.
     */
    public Date getEndDate() {
        return endDate;
    }
    /**
     * Sets the credit of the course.
     *
     * @param credit The credit of the course.
     */
    public void setCredit(double credit) {
        this.credit = credit;
    }
    /**
     * Retrieves the credit of the course.
     *
     * @return The credit of the course.
     */
    public double getCredit() {
        return credit;
    }
    /**
     * Sets the number of hours per week of the course.
     *
     * @param hoursPerWeek The number of hours per week of the course.
     */
    public void setHoursPerWeek(double hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }
    /**
     * Retrieves the number of hours per week of the course.
     *
     * @return The number of hours per week  of the course.
     */
    public double getHoursPerWeek() {
        return hoursPerWeek;
    }
    /**
     * Retrieves the description of the course.
     *
     * @return The description of the course.
     */
    public String getDescription() {
        return description;
    }
    /**
     * Sets the description of the course.
     *
     * @param description The description of the course.
     */
    public void setDescription(String description) {
        this.description = description;
    }
    /**
     * Retrieves the related certification of the course.
     *
     * @return The related certification of the course.
     */
    public String getRelatedCertification() {
        return relatedCertification;
    }
    /**
     * Sets the related certification of the course.
     *
     * @param relatedCertification The related certification of the course.
     */
    public void setRelatedCertification(String relatedCertification) {
        this.relatedCertification = relatedCertification;
    }
    /**
     * Indicates whether some other object is "equal to" this one.
     *
     * @param obj The reference object with which to compare.
     * @return true if this object is the same as the obj argument; false otherwise.
     */
    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (Course) obj;
        return this.id == that.id &&
                Objects.equals(this.title, that.title) &&
                this.description == that.description &&
                this.relatedCertification == that.relatedCertification;
    }

    /**
     * Returns a hash code value for the object.
     *
     * @return A hash code value for this object.
     */
    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, relatedCertification);
    }
    /**
     * Returns a string representation of the object.
     *
     * @return A string representation of the object.
     */
    @Override
    public String toString() {
        return "Course[" +
                "id=" + id + ", " +
                "name=" + title + ", " +
                "description=" + description + ", " +
                "duration=" + relatedCertification + ']';
    }
}
