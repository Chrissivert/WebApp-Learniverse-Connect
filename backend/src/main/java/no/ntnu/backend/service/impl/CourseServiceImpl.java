package no.ntnu.backend.service.impl;

import java.util.List;

import no.ntnu.backend.exception.CourseNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import no.ntnu.backend.model.Course;
import no.ntnu.backend.repository.CourseRepository;
import no.ntnu.backend.service.CourseService;


/**
 * 
 *
 * @author 
 * @version 29.03.2024
 */
@Service
public class CourseServiceImpl implements CourseService {

  @Autowired
  private CourseRepository courseRepository;

  @Override
  public ResponseEntity<String> create(Course course) {
    ResponseEntity<String> response;

    try {
      this.addCourse(course);
      response = new ResponseEntity<>(course.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      response = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public List<Course> readAll() {
    return this.courseRepository.findAll();
  }

  @Override
  public ResponseEntity<Course> readById(int id) {
    ResponseEntity<Course> response;

    Course course = this.getCourseById(id);
    if (course.isValid() && course != null) {
      response = new ResponseEntity<>(course, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> update(@PathVariable int id, @RequestBody Course course) {
    ResponseEntity<String> response;

    try {
      this.updateCourse(id, course);
      response = new ResponseEntity<>(course.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> delete(@PathVariable int id) {
    ResponseEntity<String> response;

    if (this.removeCourse(id)) {
      response = new ResponseEntity<>("Course with ID: " + id + " has been deleted", HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private Course getCourseById(int id) {
    if (!courseRepository.findById(id).isPresent()) {
      throw new CourseNotFoundException(id);
    }
    return this.courseRepository.findById(id).get();
  }

  /**
   * 
   *
   * @param course
   * @throws IllegalArgumentException
   */
  private void addCourse(Course course) throws IllegalArgumentException {
    if (!course.isValid() || course == null) {
      throw new IllegalArgumentException("Course is invalid");
    }

    this.courseRepository.save(course);
  }

  /**
   * 
   *
   * @param id
   * @param course
   * @throws IllegalArgumentException
   */
  private void updateCourse(int id, Course course) throws IllegalArgumentException {
    Course existingCourse = this.getCourseById(id);

    if (existingCourse == null) {
      throw new IllegalArgumentException("No course with ID: " + id + " was found");
    }
    if (course == null || !course.isValid()) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((course.getId()) != id) {
      throw new IllegalArgumentException("Course ID in URL does not match the ID in JSON data");
    }
    
    course.setId(existingCourse.getId());
    this.courseRepository.save(course);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private boolean removeCourse(int id) {
    boolean result = false;

    try {
      this.courseRepository.delete(this.getCourseById(id));
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}