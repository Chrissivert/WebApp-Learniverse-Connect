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

import java.util.Comparator;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/courses")
    public List<Courses> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/search")
    public List<Courses> searchCourses(
            @RequestParam("query") String query,
            @RequestParam(required = false) String sortBy) {
    
        List<Courses> courses = courseService.searchCoursesByQueryAndString(query, sortBy);
        
        if (sortBy != null) {
            switch (sortBy) {
                case "credits":
                    courses.sort(Comparator.comparing(Courses::getCredits));
                    break;
                case "title":
                    courses.sort(Comparator.comparing(Courses::getTitle));
                    break;
                case "difficulty":
                    courses.sort(Comparator.comparing(Courses::getDifficulty));
                    break;
                default:
                    break;
            }
        }
        
        return courses;
    }
}
    
