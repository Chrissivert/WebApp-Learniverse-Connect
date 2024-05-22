package no.ntnu.backend.repository;

import no.ntnu.backend.model.FavoriteCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteCourseRepository extends JpaRepository<FavoriteCourse, Integer> {

    List<FavoriteCourse> findByUserId(int userId);

    FavoriteCourse findByUserIdAndCourseId(int userId, int courseId);
}
