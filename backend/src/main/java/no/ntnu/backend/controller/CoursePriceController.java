// package no.ntnu.backend.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import no.ntnu.backend.service.CoursePriceService;
// import no.ntnu.backend.model.CoursePrice;

// @RestController
// @RequestMapping("/public2")
// public class CoursePriceController {

//     @Autowired
//     private CoursePriceService coursePriceService;

//     @GetMapping("/converted-course-prices")
//     public List<CoursePrice> getAllCoursePrices() {
//         return coursePriceService.getConvertedCoursePrices("NOK");
//     }
// }
