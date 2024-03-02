package no.ntnu.webapp.group01.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.webapp.group01.service.CoursePriceService;
import no.ntnu.webapp.group01.models.CoursePrice;

@RestController
@RequestMapping("/api")
public class CoursePriceController {

    @Autowired
    private CoursePriceService coursePriceService;

    @GetMapping("/converted-course-prices")
    public List<CoursePrice> getAllCoursePrices() {
        return coursePriceService.getConvertedCoursePrices("NOK");
    }
}
