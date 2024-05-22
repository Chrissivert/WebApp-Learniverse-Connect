package no.ntnu.backend.repository;

import no.ntnu.backend.model.Tags;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TagsRepository extends JpaRepository<Tags, Integer> {  
}