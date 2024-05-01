
package no.ntnu.backend.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.CourseTags;
import no.ntnu.backend.repository.CourseTagsRepository;


/**
 * Controller class for managing operations related to course tags.
 * Handles HTTP requests/responses for course tags-related endpoints.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@CrossOrigin("http://localhost:5173")
public class CourseTagsController {

    private final CourseTagsRepository courseTagsRepository;

    private final CourseTagsRepository courseTagsRepository;

    /**
     * Constructor for CourseTagsController.
     *
     * @param courseTagsRepository The CourseTagsRepository to be injected.
     */
    @Autowired
    public CourseTagsController(CourseTagsRepository courseTagsRepository){
        this.courseTagsRepository = courseTagsRepository;
    }
    public CourseTagsController(CourseTagsRepository courseTagsRepository){
        this.courseTagsRepository = courseTagsRepository;

    }

    @Operation(summary = "Retrieves all course tags",
               description = "Retrieves all course tags.")
    /**
     * Retrieves all course tags.
     *
     * @return List of CourseTags containing information about all course tags.
     */
    @GetMapping("/course-tags")
    List<CourseTags> getAllCourses() {
        return courseTagsRepository.findAll();
    }
}
