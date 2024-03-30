package no.ntnu.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import no.ntnu.backend.model.CourseProvider;

public interface CourseProviderRepository extends JpaRepository<CourseProvider, Long> {
    List<CourseProvider> findAll();
    List<CourseProvider> findByCourseId(Long courseId);
}
