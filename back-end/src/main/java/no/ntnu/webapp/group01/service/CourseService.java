package no.ntnu.webapp.group01.service;

import java.util.List;

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

}
