package no.ntnu.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Provider;
import no.ntnu.backend.repository.ProviderRepository;
import no.ntnu.backend.service.ProviderService;


@Service
public class ProviderServiceImpl implements ProviderService{

  @Autowired
  private ProviderRepository providerRepository;

  @Override
  public ResponseEntity<String> create(Provider provider) {
    ResponseEntity<String> response;

    try {
      this.addProvider(provider);
      response = new ResponseEntity<>(provider.toString(), HttpStatus.CREATED);
    } catch (IllegalArgumentException iae) {
      response = new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public List<Provider> readAll() {
    return this.providerRepository.findAll();
  }

  @Override
  public ResponseEntity<Provider> readById(int id) {
    ResponseEntity<Provider> response;

    Provider provider = this.getProviderById(id);
    if (provider.isValid() && provider != null) {
      response = new ResponseEntity<>(provider, HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> update(int id, Provider provider) {
    ResponseEntity<String> response;

    try {
      this.updateProvider(id, provider);
      response = new ResponseEntity<>(provider.toString(), HttpStatus.OK);
    } catch (Exception e) {
      response = new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    return response;
  }

  @Override
  public ResponseEntity<String> delete(int id) {
    ResponseEntity<String> response;

    if (this.removeProvider(id)) {
      response = new ResponseEntity<>("Level with ID: " + id + " has been deleted", HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return response;
  } 

  /**
   * 
   *
   * @param id
   * @return
   */
  private Provider getProviderById(int id) {
    return this.providerRepository.findById(id).get();
  }

  /**
   * 
   *
   * @param provider
   * @throws IllegalArgumentException
   */
  private void addProvider(Provider provider) throws IllegalArgumentException {
    if (!provider.isValid() || provider == null) {
      throw new IllegalArgumentException("Provider is invalid");
    }

    this.providerRepository.save(provider);
  }

  /**
   * 
   *
   * @param id
   * @param provider
   * @throws IllegalArgumentException
   */
  private void updateProvider(int id, Provider provider) throws IllegalArgumentException {
    Provider existingProvider = this.getProviderById(id);

    if (existingProvider == null) {
      throw new IllegalArgumentException("No provider with ID: " + id + " was found");
    }
    if (provider == null || !provider.isValid()) {
      throw new IllegalArgumentException("wrong data in request body");
    }
    if ((provider.getId()) != id) {
      throw new IllegalArgumentException("Provider ID in URL does not match the ID in JSON data");
    }

    provider.setId(existingProvider.getId());
    this.providerRepository.save(provider);
  }

  /**
   * 
   *
   * @param id
   * @return
   */
  private boolean removeProvider(int id) {
    boolean result = false;

    try {
      this.providerRepository.delete(this.getProviderById(id));
      result = true;
    } catch (Exception e) {
      throw new IllegalArgumentException("Invalid ID");
    }

    return result;
  }
}