package no.ntnu.backend.repository;

import java.util.List;

import no.ntnu.backend.model.Course;
import no.ntnu.backend.model.Tags;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TagsRepository extends JpaRepository<Tags, Long> {
    List<Tags> findAll();    
}
