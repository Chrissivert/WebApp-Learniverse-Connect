package no.ntnu.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import no.ntnu.backend.model.CourseProvider;

/**
 * Repository interface for accessing and managing CourseProvider entities in
 * the database.
 * This interface extends JpaRepository, providing CRUD functionality for
 * CourseProvider entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
public interface CourseProviderRepository extends JpaRepository<CourseProvider, Long> {

  /**
   * Retrieves all course providers.
   * 
   * @return a list of all course providers
   */
  List<CourseProvider> findAll();

  /**
   * Retrieves course providers by course ID using a JPQL query.
   * 
   * @param courseId the ID of the course to search for
   * @return a list of course providers associated with the specified course ID
   */
  @Query("SELECT cp FROM CourseProvider cp WHERE cp.id.courseId = :courseId")
  List<CourseProvider> findByCourseId(@Param("courseId") Long courseId);
}