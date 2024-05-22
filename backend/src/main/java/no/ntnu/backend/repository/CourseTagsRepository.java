package no.ntnu.backend.repository;

import java.util.List;

import no.ntnu.backend.model.Course;
import no.ntnu.backend.model.CourseTags;
import no.ntnu.backend.model.Tags;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CourseTagsRepository extends JpaRepository<CourseTags, Integer> {
    List<CourseTags> findAll();    
}
