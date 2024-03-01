package no.ntnu.webapp.group01;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Courses")
public class Course {

    @Id
    private int id;
    private String title;

    public Course() {
        // Default constructor required by JPA
    }

    public Course(int id, String title) {
        this.id = id;
        this.title = title;
    }

    // Getters and setters
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
