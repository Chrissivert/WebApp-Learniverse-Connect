package no.ntnu.backend.repository;

import no.ntnu.backend.model.User;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
  
    boolean existsByEmail(String email);
  
}