package no.ntnu.backend.repository;

import no.ntnu.backend.model.Provider;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for accessing and managing Provider entities in the
 * database.
 * This interface extends JpaRepository, providing CRUD functionality for
 * Provider entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Repository
public interface ProviderRepository extends JpaRepository<Provider, Integer> {
}