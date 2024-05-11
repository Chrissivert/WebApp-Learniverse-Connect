package no.ntnu.backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import no.ntnu.backend.model.Course;
import no.ntnu.backend.model.FavoriteCourse;
import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.FavoriteCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FavoriteCourseService {

    private static final Logger logger = LoggerFactory.getLogger(FavoriteCourseService.class);

    private final FavoriteCourseRepository favoriteCourseRepository;

    @Autowired
    public FavoriteCourseService(FavoriteCourseRepository favoriteCourseRepository) {
        this.favoriteCourseRepository = favoriteCourseRepository;
    }

    public List<FavoriteCourse> getAllFavoriteCoursesByUserId(int userId) {
        logger.info("Fetching favorite courses for user with ID: {}", userId);
        List<FavoriteCourse> favoriteCourses = favoriteCourseRepository.findByUserId(userId);
        logger.info("Found {} favorite courses for user with ID: {}", favoriteCourses.size(), userId);
        return favoriteCourses;
    }

    public boolean addFavoriteCourse(int userId, int courseId) {
        logger.info("Adding course with ID {} to favorites for user with ID: {}", courseId, userId);
        FavoriteCourse existingFavorite = favoriteCourseRepository.findByUserIdAndCourseId(userId, courseId);
        if (existingFavorite != null) {
            logger.warn("Course with ID {} is already favorited by user with ID: {}", courseId, userId);
            return false; // Course already favorited
        }
        FavoriteCourse favoriteCourse = new FavoriteCourse();
        favoriteCourse.setUser(new User(userId)); // You'll need to define a User class with an appropriate constructor
        favoriteCourse.setCourse(new Course(courseId)); // You'll need to define a Course class with an appropriate constructor
        favoriteCourse.setFavorited(true);
        favoriteCourseRepository.save(favoriteCourse);
        logger.info("Course with ID {} added to favorites for user with ID: {}", courseId, userId);
        return true;
    }

    public boolean removeFavoriteCourse(int userId, int courseId) {
        logger.info("Removing course with ID {} from favorites for user with ID: {}", courseId, userId);
        FavoriteCourse favoriteCourse = favoriteCourseRepository.findByUserIdAndCourseId(userId, courseId);
        if (favoriteCourse != null) {
            favoriteCourseRepository.delete(favoriteCourse);
            logger.info("Course with ID {} removed from favorites for user with ID: {}", courseId, userId);
            return true;
        }
        logger.warn("Course with ID {} not found in favorites for user with ID: {}", courseId, userId);
        return false; // Course not found in favorites
    }
}