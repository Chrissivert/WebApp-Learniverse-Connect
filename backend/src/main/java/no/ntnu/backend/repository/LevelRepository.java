package no.ntnu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import no.ntnu.backend.model.Level;

/**
 * Repository interface for accessing and managing Level entities in the
 * database.
 * This interface extends JpaRepository, providing CRUD functionality for Level
 * entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Repository
public interface LevelRepository extends JpaRepository<Level, Integer> {
}