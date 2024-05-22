package no.ntnu.backend.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.Course;
import no.ntnu.backend.service.CourseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

/**
 * Controller class for handling CRUD operations related to courses.
 * Handles HTTP requests/responses for course-related endpoints.
 *
 * @version 23.05.2024
 * @author Group 01
 */
@RestController
@RequestMapping("/api/courses")
@CrossOrigin
public class CourseController {

  private final CourseService courseService;

  @Autowired
  public CourseController(CourseService courseService) {
    this.courseService = courseService;
  }

  /**
   * Endpoint to create a new course.
   *
   * @param course the course to create
   * @return a ResponseEntity containing a message indicating the result of the
   *         operation
   */
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  @Operation(summary = "Creates a new course", description = "Creates a new course.")
  @PostMapping()
  public ResponseEntity<String> createCourse(@RequestBody Course course) {
    return this.courseService.create(course);
  }

  /**
   * Endpoint to retrieve all courses.
   *
   * @return a list of all courses
   */
  @Operation(summary = "Retrieves all courses", description = "Retrieves all courses.")
  @GetMapping()
  public List<Course> readAllCourses() {
    return this.courseService.readAll();
  }

  /**
   * Endpoint to retrieve a course by its ID.
   *
   * @param id the ID of the course to retrieve
   * @return a ResponseEntity containing the course, if found
   */
  @Operation(summary = "Retrieves a course by its ID", description = "Retrieves a course by its ID.")
  @GetMapping("/{id}")
  public ResponseEntity<Course> readCourseById(@PathVariable int id) {
    return this.courseService.readById(id);
  }

  /**
   * Endpoint to update an existing course.
   *
   * @param id     the ID of the course to update
   * @param course the updated course data
   * @return a ResponseEntity containing a message indicating the result of the
   *         operation
   */
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  @Operation(summary = "Updates an existing course", description = "Updates an existing course.")
  @PutMapping("/{id}")
  public ResponseEntity<String> updateCourse(@PathVariable int id, @RequestBody Course course) {
    return this.courseService.update(id, course);
  }

  /**
   * Endpoint to delete a course by its ID.
   *
   * @param id the ID of the course to delete
   * @return a ResponseEntity containing a message indicating the result of the
   *         operation
   */
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  @Operation(summary = "Deletes a course by its ID", description = "Deletes a course by its ID.")
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteCourse(@PathVariable int id) {
    return this.courseService.delete(id);
  }
}