package no.ntnu.backend.controller;

import no.ntnu.backend.repository.CourseTagsRepository;
import no.ntnu.backend.repository.CourseTagsRepository;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Provider;
import no.ntnu.backend.service.ProviderService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import io.swagger.v3.oas.annotations.Operation;


/**
 * Controller class for managing operations related to providers.
 * Handles HTTP requests/responses for provider-related endpoints.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@RequestMapping("/providers")
@CrossOrigin("http://localhost:5173")
public class ProviderController {

  private final ProviderService providerService;


  private final ProviderService providerService;

  /**
   * Constructor for ProviderController.
   *
   * @param providerService The ProviderService to be injected.
   */
  @Autowired
  public ProviderController(ProviderService providerService) {
    this.providerService = providerService;
  }

  @Operation(summary = "Create a new provider", description = "Creates a new provider object in the system.")
  public ProviderController(ProviderService providerService){
    this.providerService = providerService;

  }

  /**
   * Creates a new provider.
   *
   * @param provider The provider object to be created.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PostMapping()
  public ResponseEntity<String> createProvider(@RequestBody Provider provider) {
    return providerService.create(provider);
  public ResponseEntity<String> createProvider(@RequestBody Provider provider) {
    return this.providerService.create(provider);
  }

  @Operation(summary = "Retrieves all providers", description = "Retrieves a list of all provider objects in the system.")
  /**
   * Retrieves all providers.
   *
   * @return List of Provider containing information about all providers.
   */
  @GetMapping()
  public List<Provider> readAllProviders() {
    return providerService.readAll();
  }

  @Operation(summary = "Retrieve a provider by ID", description = "Retrieves a specific provider object based on its ID.")

  /**
   * Retrieves a provider by its ID.
   *
   * @param id The ID of the provider to retrieve.
   * @return ResponseEntity containing the requested provider, if found.
   */
  @GetMapping("/{id}")
  public ResponseEntity<Provider> readProviderById(@PathVariable Integer id) {
    return providerService.readById(id);
  }

  @Operation(summary = "Update a provider", description = "Updates an existing provider object in the system.")
  /**
   * Updates an existing provider.
   *
   * @param id       The ID of the provider to be updated.
   * @param provider The updated provider object.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateProvider(@PathVariable int id, @RequestBody Provider provider) {
    return providerService.update(id, provider);
  }

  @Operation(summary = "Delete a provider", description = "Deletes a provider object from the system based on its ID.")
  /**
   * Deletes a provider by its ID.
   *
   * @param id The ID of the provider to be deleted.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteProvider(@PathVariable int id) {
    return providerService.delete(id);
  }
}