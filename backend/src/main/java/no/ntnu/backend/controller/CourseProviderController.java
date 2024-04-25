package no.ntnu.backend.controller;

import java.util.List;

import no.ntnu.backend.dto.CourseByEachProviderDTO;
import no.ntnu.backend.model.CourseProvider;
import no.ntnu.backend.service.CourseProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@CrossOrigin("http://localhost:5173")
public class CourseProviderController {

    private final CourseProviderService courseProviderService;

    @Autowired
    public CourseProviderController(CourseProviderService courseProviderService){
        this.courseProviderService = courseProviderService;
    }

    @Operation(summary = "Retrieves providers offering a particular course",
               description = "Retrieves providers offering a particular course.")
    @GetMapping("/course/providers/{courseId}")
    public List<CourseByEachProviderDTO> getProvidersForCourse(
            @PathVariable Long courseId,
            @RequestParam String targetCurrency
    ) {
        return courseProviderService.getProvidersForCourse(courseId, targetCurrency);
    }

    @Operation(summary = "Retrieves the cheapest course prices",
               description = "Retrieves the cheapest course prices.")
    @GetMapping("/cheapest-course-prices")
    public List<CourseProvider> getCheapestCoursePrices(
            @RequestParam String targetCurrency
    ) {
        return courseProviderService.getConvertedCoursePrices(targetCurrency);
    }
}
