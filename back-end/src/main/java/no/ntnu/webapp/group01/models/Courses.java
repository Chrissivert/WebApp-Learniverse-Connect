package no.ntnu.webapp.group01.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date; // Import Date class for startDate and endDate

@Entity
@Table(name = "Courses")
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseID;

    @Column(name = "title")
    private String title;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "startdate")
    private Date startDate;

    @Column(name = "endDate")
    private Date endDate; 

    @Column(name = "credits")
    private double credits;

    @Column(name = "hoursPerWeek")
    private int hoursPerWeek;

    @Column(name = "courseDescription")
    private String courseDescription;

    public Courses() {
    }

    public int getCourseID() {
        return this.courseID;
    }

    public void setCourseID(int courseID) {
        this.courseID = courseID;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDifficulty(){
        return this.difficulty;
    }

    public void setDifficulty(String difficulty){
        this.difficulty = difficulty;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public double getCredits() {
        return credits;
    }

    public void setCredits(double credits) {
        this.credits = credits;
    }

    public int getHoursPerWeek() {
        return hoursPerWeek;
    }

    public void setHoursPerWeek(int hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }
}
