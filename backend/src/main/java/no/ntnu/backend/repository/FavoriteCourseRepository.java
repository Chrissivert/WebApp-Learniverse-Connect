package no.ntnu.backend.repository;

import no.ntnu.backend.model.FavoriteCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for accessing and managing FavoriteCourse entities in
 * the database.
 * This interface extends JpaRepository, providing CRUD functionality for
 * FavoriteCourse entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Repository
public interface FavoriteCourseRepository extends JpaRepository<FavoriteCourse, Integer> {

  /**
   * Retrieves favorite courses by user ID.
   * 
   * @param userId the ID of the user
   * @return a list of favorite courses associated with the specified user ID
   */
  List<FavoriteCourse> findByUserId(int userId);

  /**
   * Retrieves a favorite course by user ID and course ID.
   * 
   * @param userId   the ID of the user
   * @param courseId the ID of the course
   * @return the favorite course associated with the specified user ID and course
   *         ID
   */
  FavoriteCourse findByUserIdAndCourseId(int userId, int courseId);
}