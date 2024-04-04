package no.ntnu.backend.controller;

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


@RestController
@RequestMapping("/providers")
@CrossOrigin("http://localhost:5173")
public class ProviderController {
  
  @Autowired
  private ProviderService providerService;

  @PostMapping()
  public ResponseEntity<String> cretaeProvider(@RequestBody Provider provider) {
    return this.providerService.create(provider);
  }

  @GetMapping()
  public List<Provider> readAllProviders() {
    return this.providerService.readAll();
  }
  
  @GetMapping("/{id}")
  public ResponseEntity<Provider> readProviderById(@PathVariable Integer id) {
    return this.providerService.readById(id);
  }

  @PutMapping("/{id}")
  public ResponseEntity<String> updateProvider(@PathVariable int id, @RequestBody Provider provider) {
    return this.providerService.update(id, provider);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteProvider(@PathVariable int id) {
    return this.providerService.delete(id);
  }
}