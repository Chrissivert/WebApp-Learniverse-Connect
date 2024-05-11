package no.ntnu.backend.service;

import no.ntnu.backend.model.Course;
import no.ntnu.backend.model.FavoriteCourse;
import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.FavoriteCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteCourseService {

    private final FavoriteCourseRepository favoriteCourseRepository;

    @Autowired
    public FavoriteCourseService(FavoriteCourseRepository favoriteCourseRepository) {
        this.favoriteCourseRepository = favoriteCourseRepository;
    }

    public List<FavoriteCourse> getAllFavoriteCoursesByUserId(int userId) {
        return favoriteCourseRepository.findByUserId(userId);
    }

    public boolean addFavoriteCourse(int userId, int courseId) {
        FavoriteCourse existingFavorite = favoriteCourseRepository.findByUserIdAndCourseId(userId, courseId);
        if (existingFavorite != null) {
            return false; // Course already favorited
        }
        FavoriteCourse favoriteCourse = new FavoriteCourse();
        favoriteCourse.setUser(new User(userId)); // You'll need to define a User class with an appropriate constructor
        favoriteCourse.setCourse(new Course(courseId)); // You'll need to define a Course class with an appropriate constructor
        favoriteCourse.setFavorited(true);
        favoriteCourseRepository.save(favoriteCourse);
        return true;
    }
}
