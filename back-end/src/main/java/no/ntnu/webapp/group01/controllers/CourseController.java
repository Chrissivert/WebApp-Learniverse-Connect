package no.ntnu.webapp.group01.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.webapp.group01.models.Courses;
import no.ntnu.webapp.group01.service.CourseService;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/courses")
    public List<Courses> getAllCourses(@RequestParam(required = false) String sortBy) {
        if (sortBy != null) {
            switch (sortBy) {
                case "credits":
                    return courseService.getCoursesSortedByCredits();
                case "title":
                    return courseService.getCoursesSortedByTitle();
                case "difficulty":
                    return courseService.getCoursesSortedByDifficulty();
                default:
                    break;
            }
        }
        return courseService.getAllCourses();
    }

    @GetMapping("/search")
    public ResponseEntity<List<Courses>> searchCourses(@RequestParam("query") String query) {
        List<Courses> courses = courseService.searchCourses(query);
        return ResponseEntity.ok(courses);
    }
}
    
