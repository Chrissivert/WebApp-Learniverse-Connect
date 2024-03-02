package no.ntnu.webapp.group01.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import no.ntnu.webapp.group01.models.Courses;

public interface CourseRepository extends JpaRepository<Courses, Long> {
}
