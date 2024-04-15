package no.ntnu.backend.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;

@Entity
public class CourseProvider {

    @EmbeddedId
    private CourseProviderId id;

    private double price;
    private String currency;

    public CourseProvider() {
    }

    public CourseProvider(Long courseId, int providerId, double price, String currency) {
        this.id = new CourseProviderId(courseId, providerId);
        this.price = price;
        this.currency = currency;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCurrency() {
        return this.currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Long getCourseId() {
        return this.id.getCourseId();
    }
    
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
