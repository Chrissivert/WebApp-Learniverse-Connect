package no.ntnu.webapp.group01.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import no.ntnu.webapp.group01.models.Courses;
import no.ntnu.webapp.group01.repositories.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Courses> getAllCourses() {
        return courseRepository.findAll();
    }

     public List<Courses> searchCoursesByQueryAndString(String query, String sortBy) {
        List<Courses> courses = courseRepository.findByTitleContainingIgnoreCase(query);
        if (sortBy != null) {
            switch (sortBy) {
                case "credits":
                    return courses.stream()
                            .sorted(Comparator.comparingDouble(Courses::getCredits))
                            .collect(Collectors.toList());
                case "title":
                    return courses.stream()
                            .sorted(Comparator.comparing(Courses::getTitle))
                            .collect(Collectors.toList());
                default:
                    break;
            }
        }
        return courses;
    }
}
