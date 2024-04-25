package no.ntnu.backend.controller;

import java.util.List;

import no.ntnu.backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.dto.CourseByEachProviderDTO;
import no.ntnu.backend.model.CourseProvider;
import no.ntnu.backend.service.CourseProviderService;

/**
 * Controller class for managing operations related to course providers.
 * Handles HTTP requests/responses for course provider-related endpoints.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@CrossOrigin("http://localhost:5173")
public class CourseProviderController {

    private final CourseProviderService courseProviderService;

    /**
     * Constructor for CourseProviderController.
     *
     * @param courseProviderService The CourseProviderService to be injected.
     */
    @Autowired
    public CourseProviderController(CourseProviderService courseProviderService){
        this.courseProviderService = courseProviderService;

    }
    /**
     * Retrieves providers offering a particular course.
     *
     * @param courseId       The ID of the course for which providers are to be retrieved.
     * @param targetCurrency The target currency for pricing.
     * @return List of CourseByEachProviderDTO containing information about providers offering the course.
     */
    @GetMapping("/course/providers/{courseId}")
    public List<CourseByEachProviderDTO> getProvidersForCourse(@PathVariable Long courseId, @RequestParam String targetCurrency) {
    return courseProviderService.getProvidersForCourse(courseId, targetCurrency);
}

    /**
     * Retrieves the cheapest course prices.
     *
     * @param targetCurrency The target currency for pricing.
     * @return List of CourseProvider containing information about the cheapest course prices.
     */
    @GetMapping("/cheapest-course-prices")
    public List<CourseProvider> getCheapestCoursePrices(@RequestParam String targetCurrency) {
        return courseProviderService.getConvertedCoursePrices(targetCurrency);
    }
}
