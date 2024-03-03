package no.ntnu.webapp.group01.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import no.ntnu.webapp.group01.models.Courses;
import java.util.List;

public interface CourseRepository extends JpaRepository<Courses, Long> {
    List<Courses> findAll();
    List<Courses> findByTitleContainingIgnoreCase(String title);    
}
