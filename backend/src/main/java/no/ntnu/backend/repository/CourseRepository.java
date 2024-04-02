package no.ntnu.backend.repository;

import no.ntnu.backend.model.Course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    List<Course> findAll();
    List<Course> findByTitleContainingIgnoreCase(String title);    
}

