package no.ntnu.backend.repository;

import no.ntnu.backend.model.Provider;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProviderRepository extends JpaRepository<Provider, Integer> {
}