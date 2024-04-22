package no.ntnu.backend.controller;

import java.util.List;

import no.ntnu.backend.service.TagsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Course;
import no.ntnu.backend.service.CourseService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * Controller class for managing CRUD operations related to courses.
 * Handles HTTP requests/responses for course-related endpoints.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@RequestMapping("/courses")
@CrossOrigin("http://localhost:5173")
public class CourseController {

  private final CourseService courseService;

  /**
   * Constructor for CourseController.
   *
   * @param courseService The CourseService to be injected.
   */
  @Autowired
  public CourseController(CourseService courseService){
    this.courseService = courseService;

  }
  /**
   * Creates a new course.
   *
   * @param course The course object to be created.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PostMapping()
  public ResponseEntity<String> createCourse(@RequestBody Course course) {
    return this.courseService.create(course);
  }

  /**
   * Retrieves all courses.
   *
   * @return List of all courses.
   */
  @GetMapping()
  public List<Course> readAllCourses() {
    return this.courseService.readAll();
  }

  /**
   * Retrieves a course by its ID.
   *
   * @param id The ID of the course to retrieve.
   * @return ResponseEntity containing the requested course, if found.
   */
  @GetMapping("/{id}")
  public ResponseEntity<Course> readCourseById(@PathVariable int id) {
    return this.courseService.readById(id);
  }

  /**
   * Updates an existing course.
   *
   * @param id     The ID of the course to be updated.
   * @param course The updated course object.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateCourse(@PathVariable int id, @RequestBody Course course) {
    return this.courseService.update(id, course);
  }

  /**
   * Deletes a course by its ID.
   *
   * @param id The ID of the course to be deleted.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteCourse(@PathVariable int id) {
    return this.courseService.delete(id);
  }
}
