package no.ntnu.webapp.group01.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.webapp.group01.models.Courses;
import no.ntnu.webapp.group01.repositories.CourseRepository;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Replace with the URL of your React frontend
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses")
    public List<Courses> getCourses() {
        List<Courses> courses = courseRepository.findAll();
        
        for (Courses course : courses) {
            System.out.println("Title: " + course.getTitle() + ", ID: " + course.getCourseID());
        }
        
        return courses;
    }
}
