package no.ntnu.backend.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

/**
 * Represents the association between a Course and a Provider with additional attributes like price and currency.
 * This class is mapped to a database table using JPA annotations.
 * 
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class CourseProvider {

    @EmbeddedId
    private CourseProviderId id;

    private double price;
    private String currency;

    /**
     * Default constructor.
     */
    public CourseProvider() {
    }

    /**
     * Constructor with course ID, provider ID, price, and currency.
     * 
     * @param courseId the ID of the course
     * @param providerId the ID of the provider
     * @param price the price of the course provided
     * @param currency the currency of the price
     */
    public CourseProvider(Long courseId, int providerId, double price, String currency) {
        this.id = new CourseProviderId(courseId, providerId);
        this.price = price;
        this.currency = currency;
    }

    /**
     * Gets the price of the course.
     * 
     * @return the price of the course
     */
    public double getPrice() {
        return this.price;
    }

    /**
     * Sets the price of the course.
     * 
     * @param price the new price of the course
     */
    public void setPrice(double price) {
        this.price = price;
    }

    /**
     * Gets the currency of the price.
     * 
     * @return the currency of the price
     */
    public String getCurrency() {
        return this.currency;
    }

    /**
     * Sets the currency of the price.
     * 
     * @param currency the new currency of the price
     */
    public void setCurrency(String currency) {
        this.currency = currency;
    }

    /**
     * Gets the ID of the course.
     * 
     * @return the course ID
     */
    public Long getCourseId() {
        return this.id.getCourseId();
    }

    /**
     * Gets the ID of the provider.
     * 
     * @return the provider ID
     */
    public int getProviderId() {
        return this.id.getProviderId();
    }

    
    @Embeddable
    public static class CourseProviderId implements Serializable {

        @Column(name = "course_id", nullable = false)
        private Long courseId;

        @Column(name = "provider_id", nullable = false)
        private int providerId;

        public CourseProviderId() {
        }

        public CourseProviderId(Long courseId, int providerId) {
            this.courseId = courseId;
            this.providerId = providerId;
        }

        public Long getCourseId() {
            return courseId;
        }
    
        public int getProviderId() {
            return providerId;
        }
    }
}
