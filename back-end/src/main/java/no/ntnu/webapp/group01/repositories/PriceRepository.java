package no.ntnu.webapp.group01.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import no.ntnu.webapp.group01.models.CoursePrice;

public interface PriceRepository extends JpaRepository<CoursePrice, Long> {
    List<CoursePrice> findByOrderByPriceDesc();
}
