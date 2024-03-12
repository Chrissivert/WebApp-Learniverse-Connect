package no.ntnu.webapp.group01.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import no.ntnu.webapp.group01.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByEmail(String email);
}