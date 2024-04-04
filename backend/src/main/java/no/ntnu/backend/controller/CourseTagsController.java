// package no.ntnu.backend.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;

// import no.ntnu.backend.model.CourseTags;
// import no.ntnu.backend.repository.CourseTagsRepository;


// @RestController
// @CrossOrigin("http://localhost:5173")
// public class CourseTagsController {

//     @Autowired
//     private CourseTagsRepository courseTagsRepository;

//     @GetMapping("/course-tags")
//     List<CourseTags> getAllCourses() {
//         return courseTagsRepository.findAll();
//     }
// }


