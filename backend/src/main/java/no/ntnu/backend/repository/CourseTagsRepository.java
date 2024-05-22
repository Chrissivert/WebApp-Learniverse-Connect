package no.ntnu.backend.repository;

import java.util.List;

import no.ntnu.backend.model.CourseTags;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for accessing and managing CourseTags entities in the database.
 * This interface extends JpaRepository, providing CRUD functionality for CourseTags entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Repository
public interface CourseTagsRepository extends JpaRepository<CourseTags, Integer> {

    /**
     * Retrieves all course tags.
     * 
     * @return a list of all course tags
     */
    List<CourseTags> findAll();
}