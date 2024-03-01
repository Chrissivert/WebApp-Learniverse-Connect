package no.ntnu.webapp.group01;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@RequestMapping("/api")
public class YourController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return courseRepository.findAll();
    }
}
