package no.ntnu.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.CourseProvider;
import no.ntnu.backend.model.Provider;
import no.ntnu.backend.model.Tags;
import no.ntnu.backend.repository.ProviderRepository;
import no.ntnu.backend.repository.TagsRepository;
import no.ntnu.backend.service.CourseProviderServiceDTO;

@RestController
@CrossOrigin("http://localhost:5173")
public class ProviderController {

    
    @Autowired
    private ProviderRepository providerRepository;
    
    @GetMapping("/providers")
    List<Provider> getAllCourses() {
        return providerRepository.findAll();
    }
}
