package no.ntnu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import no.ntnu.backend.model.Category;

/**
 * Repository interface for accessing and managing Category entities in the
 * database.
 * This interface extends JpaRepository, providing CRUD functionality for
 * Category entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}