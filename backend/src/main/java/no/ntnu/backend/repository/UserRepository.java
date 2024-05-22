package no.ntnu.backend.repository;

import no.ntnu.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repository interface for accessing and managing User entities in the
 * database.
 * This interface extends JpaRepository, providing CRUD functionality for User
 * entities.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

  /**
   * Retrieves a user by their username.
   * 
   * @param username the username of the user
   * @return an Optional containing the user with the specified username, or empty
   *         if not found
   */
  Optional<User> findByUsername(String username);

  /**
   * Retrieves a user by their email address.
   * 
   * @param email the email address of the user
   * @return an Optional containing the user with the specified email address, or
   *         empty if not found
   */
  Optional<User> findByEmail(String email);
}