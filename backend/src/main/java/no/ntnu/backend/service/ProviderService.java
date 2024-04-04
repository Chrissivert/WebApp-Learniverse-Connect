package no.ntnu.backend.service;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import no.ntnu.backend.model.Provider;


@Service
public interface ProviderService {

  /**
   * POST
   *
   * @param user
   * @return
   */
  public ResponseEntity<String> create(Provider provider);

  /**
   * GET
   *
   * @return
   */
  public List<Provider> readAll(); 

  /**
   * GET
   *
   * @param id
   * @return
   */
  public ResponseEntity<Provider> readById(int id);

  /**
   * PUT
   *
   * @param id
   * @param user
   */
  public ResponseEntity<String> update(int id, Provider provider);

  /**
   * DELETE
   *
   * @param id
   * @return
   */
  public ResponseEntity<String> delete(int id);
}