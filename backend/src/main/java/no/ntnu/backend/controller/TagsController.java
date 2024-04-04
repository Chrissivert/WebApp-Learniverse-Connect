package no.ntnu.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Tags;
import no.ntnu.backend.repository.TagsRepository;


@RestController
@CrossOrigin("http://localhost:5173")
public class TagsController {

    @Autowired
    private TagsRepository tagsRepository;

    @GetMapping("/tags")
    List<Tags> getAllCourses() {
        return tagsRepository.findAll();
    }
}


