package no.ntnu.backend.controller;

import java.util.List;

import no.ntnu.backend.dto.CourseByEachProviderDTO;
import no.ntnu.backend.model.CourseProvider;
import no.ntnu.backend.service.CourseProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;

/**
 * Controller class for managing operations related to course providers.
 * Handles HTTP requests/responses for course provider-related endpoints.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@CrossOrigin
public class CourseProviderController {

  private final CourseProviderService courseProviderService;

  @Autowired
  public CourseProviderController(CourseProviderService courseProviderService) {
    this.courseProviderService = courseProviderService;
  }

  @Operation(summary = "Retrieves providers offering a particular course", description = "Retrieves providers offering a particular course.")
  @GetMapping("/course/providers/{courseId}")
  public List<CourseByEachProviderDTO> getProvidersForCourse(@PathVariable Long courseId,
      @RequestParam String targetCurrency) {
    return courseProviderService.getProvidersForCourse(courseId, targetCurrency);
  }

  @Operation(summary = "Retrieves the cheapest course prices", description = "Retrieves the cheapest course prices.")
  @GetMapping("/cheapest-course-prices")
  public List<CourseProvider> getCheapestCoursePrices(@RequestParam String targetCurrency) {
    return courseProviderService.getConvertedCoursePrices(targetCurrency);
  }
}
