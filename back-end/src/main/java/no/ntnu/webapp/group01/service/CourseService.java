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
    public List<Courses> getCoursesSortedByCredits() {
        List<Courses> courses = courseRepository.findAll();
        return courses.stream()
                .sorted((course1, course2) -> Double.compare(course1.getCredits(), course2.getCredits()))
                .collect(Collectors.toList());
    }


    public List<Courses> getCoursesSortedByTitle() {
        List<Courses> courses = courseRepository.findAll();
        return courses.stream()
                .sorted(sortByTitle)
                .collect(Collectors.toList());
    }

    public List<Courses> getCoursesSortedByDifficulty() {
        List<Courses> courses = courseRepository.findAll();
        return courses.stream()
                .sorted(sortByDifficulty)
                .collect(Collectors.toList());
    }

     private static Comparator<Courses> sortByTitle = Comparator.comparing(Courses::getTitle);
    
     private static Comparator<Courses> sortByDifficulty = (course1, course2) -> {
        String[] difficultyOrder = {"Beginner", "Intermediate", "Expert"};
        int index1 = getIndex(difficultyOrder, course1.getDifficulty());
        int index2 = getIndex(difficultyOrder, course2.getDifficulty());
        if (index1 == index2) {
            return course1.getTitle().compareTo(course2.getTitle());
        }
    
        return Integer.compare(index1, index2);
    };
    
 
     private static int getIndex(String[] array, String value) {
         for (int i = 0; i < array.length; i++) {
             if (array[i].equals(value)) {
                 return i;
             }
         }
         return -1;
     }
    
}
