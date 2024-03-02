package no.ntnu.webapp.group01.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import no.ntnu.webapp.group01.models.CoursePrice;
import no.ntnu.webapp.group01.repositories.PriceRepository;

@Service
public class CoursePriceService {

    @Autowired
    private PriceRepository priceRepository;

    public List<CoursePrice> getCheapestCoursePrices() {
        return priceRepository.findByOrderByPriceDesc();
    }
}
