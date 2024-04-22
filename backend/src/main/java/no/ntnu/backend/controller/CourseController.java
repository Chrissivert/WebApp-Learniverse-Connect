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
 * 
 *
 * @author 
 * @version 29.03.2024
 */
@RestController
@RequestMapping("/courses")
@CrossOrigin("http://localhost:5173")
public class CourseController {

  private final CourseService courseService;

  @Autowired
  public CourseController(CourseService courseService){
    this.courseService = courseService;

  }
  /**
   * 
   *
   * @param course
   * @return
   */
  @PostMapping()
  public ResponseEntity<String> createCourse(@RequestBody Course course) {
    return this.courseService.create(course);
  }

  /**
   * 
   *
   * @return
   */
  @GetMapping()
  public List<Course> readAllCourses() {
    return this.courseService.readAll();
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  @GetMapping("/{id}")
  public ResponseEntity<Course> readCourseById(@PathVariable int id) {
    return this.courseService.readById(id);
  }

  /**
   * 
   *
   * @param id
   * @param course
   * @return
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateCourse(@PathVariable int id, @RequestBody Course course) {
    return this.courseService.update(id, course);
  }

  /**
   * 
   *
   * @return
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteCourse(@PathVariable int id) {
    return this.courseService.delete(id);
  }
}
