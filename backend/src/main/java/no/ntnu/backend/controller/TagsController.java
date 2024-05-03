package no.ntnu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.Tags;
import no.ntnu.backend.service.TagsService;

import java.util.List;

@RestController
@RequestMapping("/tags")
@CrossOrigin
public class TagsController {

    private final TagsService tagsService;

    @Autowired
    public TagsController(TagsService tagsService){
        this.tagsService = tagsService;
    }

    @Operation(summary = "Creates a new tag", description = "Creates a new tag.")
    @PostMapping()
    public ResponseEntity<String> createTag(@RequestBody Tags tags) {
        return this.tagsService.create(tags);
    }

    @Operation(summary = "Retrieves all tags", description = "Retrieves all tags.")
    @GetMapping()
    public List<Tags> readAllTags() {
        return this.tagsService.readAll();
    }

    @Operation(summary = "Retrieves a tag by its ID", description = "Retrieves a tag by its ID.")
    @GetMapping("/{id}")
    public ResponseEntity<Tags> readTagById(@PathVariable int id) {
        return this.tagsService.readById(id);
    }

    @Operation(summary = "Updates an existing tag", description = "Updates an existing tag.")
    @PutMapping("/{id}")
    public ResponseEntity<String> updateTag(@PathVariable int id, @RequestBody Tags tags) {
        return this.tagsService.update(id, tags);
    }

    @Operation(summary = "Deletes a tag by its ID", description = "Deletes a tag by its ID.")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTag(@PathVariable int id) {
        return this.tagsService.delete(id);
    }
}
