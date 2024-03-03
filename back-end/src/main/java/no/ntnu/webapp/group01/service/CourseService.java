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

    public List<Courses> getCheapestCoursePrice() {
        return courseRepository.findAll();
    }

    // public List<Courses> getCoursesSortedByPrice() {
    //     List<Courses> courses = courseRepository.findAll();
    //     return courses.stream()
    //             .sorted(Comparator.comparingDouble(Courses::getPrice))
    //             .collect(Collectors.toList());
    // }

    public List<Courses> getCoursesSortedByCredits() {
        List<Courses> courses = courseRepository.findAll();
        return courses.stream()
                .sorted((course1, course2) -> Double.compare(course1.getCredits(), course2.getCredits()))
                .collect(Collectors.toList());
    }
    
}
