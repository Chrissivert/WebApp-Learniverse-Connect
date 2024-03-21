package no.ntnu.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private int duration;

    public Course() {
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
}
