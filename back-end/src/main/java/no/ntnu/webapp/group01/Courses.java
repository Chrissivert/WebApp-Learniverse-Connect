package no.ntnu.webapp.group01;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Courses")
public class Courses {

    @Id
    private int CourseID;

    // @Column(columnDefinition = "TEXT")
    private String title;

    public Courses() {
        // Default constructor required by JPA
    }

    public Courses(String title) {
        this.title = title;
    }

    // Getters and setters
    public int getCourseID() {
        return this.CourseID;
    }

    public void setCourseID(int id) {
        this.CourseID = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}