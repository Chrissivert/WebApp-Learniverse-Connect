
package no.ntnu.backend.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.CourseTags;
import no.ntnu.backend.repository.CourseTagsRepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class CourseTagsController {

    private final CourseTagsRepository courseTagsRepository;

    @Autowired
    public CourseTagsController(CourseTagsRepository courseTagsRepository){
        this.courseTagsRepository = courseTagsRepository;
    }

    @Operation(summary = "Retrieves all course tags",
               description = "Retrieves all course tags.")
    @GetMapping("/course-tags")
    List<CourseTags> getAllCourses() {
        return courseTagsRepository.findAll();
    }
}
