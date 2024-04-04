package no.ntnu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import no.ntnu.backend.model.Provider;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Integer>{
}