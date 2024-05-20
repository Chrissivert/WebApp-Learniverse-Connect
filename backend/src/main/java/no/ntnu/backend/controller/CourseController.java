package no.ntnu.backend.controller;

import java.util.List;
import no.ntnu.backend.model.Course;
import no.ntnu.backend.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;

/**
 * This is a javadoc
 */
@RestController
@RequestMapping("/api/courses")
@CrossOrigin
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService){
        this.courseService = courseService;
    }

    @Operation(summary = "Creates a new course", description = "Creates a new course.")
    @PostMapping()
    public ResponseEntity<String> createCourse(@RequestBody Course course) {
        return this.courseService.create(course);
    }

    @Operation(summary = "Retrieves all courses", description = "Retrieves all courses.")
    @GetMapping()
    public List<Course> readAllCourses() {
        return this.courseService.readAll();
    }

    @Operation(summary = "Retrieves a course by its ID", description = "Retrieves a course by its ID.")
    @GetMapping("/{id}")
    public ResponseEntity<Course> readCourseById(@PathVariable int id) {
        return this.courseService.readById(id);
    }

    @Operation(summary = "Updates an existing course", description = "Updates an existing course.")
    @PutMapping("/{id}")
    public ResponseEntity<String> updateCourse(@PathVariable int id, @RequestBody Course course) {
        return this.courseService.update(id, course);
    }

    @Operation(summary = "Deletes a course by its ID", description = "Deletes a course by its ID.")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable int id) {
        return this.courseService.delete(id);
    }
}
