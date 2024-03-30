package no.ntnu.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.dto.CourseByEachProviderDTO;
import no.ntnu.backend.model.CourseProvider;
import no.ntnu.backend.service.CourseProviderServiceDTO;

@RestController
@CrossOrigin("http://localhost:5173")
public class CourseProviderController {

    @Autowired
    private CourseProviderServiceDTO courseProviderService;

     @GetMapping("/course/providers/{courseId}")
    public List<CourseByEachProviderDTO> getProvidersForCourse(@PathVariable Long courseId) {
        return courseProviderService.getProvidersForCourse(courseId, "NOK");
    }

    @GetMapping("/cheapest-course-prices")
    public List<CourseProvider> getCheapestCoursePrices() {
        return courseProviderService.getCheapestCoursePrices("NOK");
    }
}