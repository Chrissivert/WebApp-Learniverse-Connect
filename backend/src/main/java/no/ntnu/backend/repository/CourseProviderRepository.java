package no.ntnu.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import no.ntnu.backend.model.CourseProvider;

public interface CourseProviderRepository extends JpaRepository<CourseProvider, Long> {
    List<CourseProvider> findAll();

    // Modified method to use a JPQL query
    @Query("SELECT cp FROM CourseProvider cp WHERE cp.id.courseId = :courseId")
    List<CourseProvider> findByCourseId(@Param("courseId") Long courseId);
}
