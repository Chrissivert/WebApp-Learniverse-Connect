package no.ntnu.backend.dto;

/**
 * Data Transfer Object (DTO) for handling course information provided by each
 * provider.
 * Contains details such as price, currency, course ID, and provider name.
 * 
 * @version 23.05.2024
 */
public class CourseByEachProviderDTO {

  private double price;
  private String currency;
  private Long courseId;
  private String providerName;

  /**
   * Gets the price of the course.
   *
   * @return The price of the course.
   */
  public double getPrice() {
    return price;
  }

  /**
   * Sets the price of the course.
   *
   * @param price The price of the course.
   */
  public void setPrice(double price) {
    this.price = price;
  }

  /**
   * Gets the currency of the price.
   *
   * @return The currency of the price.
   */
  public String getCurrency() {
    return currency;
  }

  /**
   * Sets the currency of the price.
   *
   * @param currency The currency of the price.
   */
  public void setCurrency(String currency) {
    this.currency = currency;
  }

  /**
   * Gets the ID of the course.
   *
   * @return The ID of the course.
   */
  public Long getCourseId() {
    return courseId;
  }

  /**
   * Sets the ID of the course.
   *
   * @param courseId The ID of the course.
   */
  public void setCourseId(Long courseId) {
    this.courseId = courseId;
  }

  /**
   * Gets the name of the provider offering the course.
   *
   * @return The name of the provider.
   */
  public String getProviderName() {
    return providerName;
  }

  /**
   * Sets the name of the provider offering the course.
   *
   * @param providerName The name of the provider.
   */
  public void setProviderName(String providerName) {
    this.providerName = providerName;
  }
}