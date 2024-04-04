package no.ntnu.backend.repository;

import java.util.List;
import java.util.Optional;

import no.ntnu.backend.model.Provider;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long> {
    List<Provider> findAll(); 
    Optional<Provider> findById(int id);}
