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

@RestController
@CrossOrigin("http://localhost:5173")
public class CourseProviderController {

    private final CourseProviderService courseProviderService;

    @Autowired
    public CourseProviderController(CourseProviderService courseProviderService){
        this.courseProviderService = courseProviderService;

    }
    // Update CourseProviderController

    @GetMapping("/course/providers/{courseId}")
    public List<CourseByEachProviderDTO> getProvidersForCourse(@PathVariable Long courseId, @RequestParam String targetCurrency) {
    return courseProviderService.getProvidersForCourse(courseId, targetCurrency);
}


    @GetMapping("/cheapest-course-prices")
    public List<CourseProvider> getCheapestCoursePrices(@RequestParam String targetCurrency) {
        return courseProviderService.getConvertedCoursePrices(targetCurrency);
    }
}
