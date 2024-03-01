package no.ntnu.webapp.group01;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Replace with the URL of your React frontend
@RequestMapping("/api")
public class YourController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses")
    public List<Course> getCourses() {
        List<Course> courses = courseRepository.findAll();
        
        // Logging titles and ids
        for (Course course : courses) {
            System.out.println("Title: " + course.getTitle() + ", ID: " + course.getId());
        }
        
        return courses;
    }
}
