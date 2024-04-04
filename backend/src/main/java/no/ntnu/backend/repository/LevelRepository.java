package no.ntnu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import no.ntnu.backend.model.Level;


/**
 * 
 *
 * @author 
 * @version 29.03.2024
 */
@Repository
public interface LevelRepository extends JpaRepository<Level, Integer>{
}