// package no.ntnu.backend.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;

// import no.ntnu.backend.model.CourseProvider;
// import no.ntnu.backend.service.CourseProviderService;

// @RestController
// @CrossOrigin("http://localhost:5173")
// public class CourseProviderController {

//     @Autowired
//     private CourseProviderService courseProviderService;

//     @GetMapping("/cheapest-course-prices")
//     public List<CourseProvider> getCheapestCoursePrices() {
//         return courseProviderService.getConvertedCoursePrices("NOK");
//     }
// }
