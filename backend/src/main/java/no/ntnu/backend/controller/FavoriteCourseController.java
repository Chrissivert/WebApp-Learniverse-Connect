package no.ntnu.backend.controller;

import no.ntnu.backend.model.FavoriteCourse;
import no.ntnu.backend.service.FavoriteCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorite-courses")
public class FavoriteCourseController {

    private final FavoriteCourseService favoriteCourseService;

    @Autowired
    public FavoriteCourseController(FavoriteCourseService favoriteCourseService) {
        this.favoriteCourseService = favoriteCourseService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<FavoriteCourse>> getAllFavoriteCoursesByUserId(@PathVariable("userId") int userId) {
        List<FavoriteCourse> favoriteCourses = favoriteCourseService.getAllFavoriteCoursesByUserId(userId);
        return ResponseEntity.ok(favoriteCourses);
    }

    @PostMapping("/user/{userId}/course/{courseId}")
    public ResponseEntity<String> addFavoriteCourse(@PathVariable("userId") int userId, @PathVariable("courseId") int courseId) {
        boolean success = favoriteCourseService.addFavoriteCourse(userId, courseId);
        if (success) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Course added to favorites successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add course to favorites.");
        }
    }

    @DeleteMapping("/user/{userId}/course/{courseId}")
    @PreAuthorize("hasRole('ROLE_ADMIN') or authentication.principal.id == #userId")
    public ResponseEntity<String> removeFavoriteCourse(@PathVariable("userId") int userId, @PathVariable("courseId") int courseId) {
        boolean success = favoriteCourseService.removeFavoriteCourse(userId, courseId);
        if (success) {
            return ResponseEntity.ok("Course removed from favorites successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Course not found in favorites or failed to remove.");
        }
    }
}
