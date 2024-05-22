package no.ntnu.backend.model;

import java.util.Map;

/**
 * Represents a response object for currency conversion, containing a map of
 * currency codes to conversion rates.
 * This class is used to deserialize JSON responses from currency conversion
 * APIs.
 *
 * @version 22.05.2024
 * @author Group 01
 */
public class CurrencyConversionResponse {
  private Map<String, Double> data;

  /**
   * Gets the map containing currency codes as keys and conversion rates as
   * values.
   *
   * @return the map of currency codes to conversion rates
   */
  public Map<String, Double> getData() {
    return this.data;
  }

  /**
   * Sets the map containing currency codes as keys and conversion rates as
   * values.
   *
   * @param rates the map of currency codes to conversion rates to set
   */
  public void setData(Map<String, Double> rates) {
    this.data = rates;
  }
}