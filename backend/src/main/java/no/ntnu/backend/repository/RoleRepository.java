package no.ntnu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import no.ntnu.backend.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{
}