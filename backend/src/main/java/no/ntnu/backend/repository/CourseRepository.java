package no.ntnu.backend.repository;

import no.ntnu.backend.model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for accessing and managing Course entities in the database.
 * This interface extends JpaRepository, providing CRUD functionality for Course entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> { 
}