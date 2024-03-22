// package no.ntnu.backend.service;

// import java.util.Comparator;
// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import no.ntnu.backend.model.Course;
// import no.ntnu.backend.repository.CourseRepository;

// @Service
// public class CourseService {

//     @Autowired
//     private CourseRepository courseRepository;

//     public List<Course> getAllCourses() {
//         return courseRepository.findAll();
//     }

//      public List<Course> searchCoursesByQueryAndString(String query, String sortBy) {
//         List<Course> courses = courseRepository.findByTitleContainingIgnoreCase(query);
//         if (sortBy != null) {
//             switch (sortBy) {
//                 case "credits":
//                     return courses.stream()
//                             .sorted(Comparator.comparingDouble(Course::getCredits))
//                             .collect(Collectors.toList());
//                 case "title":
//                     return courses.stream()
//                             .sorted(Comparator.comparing(Course::getTitle))
//                             .collect(Collectors.toList());
//                 default:
//                     break;
//             }
//         }
//         return courses;
//     }
// }
