package no.ntnu.backend.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CourseProvider {

  @Id
  @Column (name = "course_id")
  private int courseId;
  @Column (name = "provider_id")
  private int providerId;
  private double price;
  private String currency;

  public CourseProvider() {
  }

  public CourseProvider(int course_id, int provider_id, double price, String currency) {
    this.courseId = course_id;
    this.providerId = provider_id;
    this.price = price;
    this.currency = currency;
  }

  public int getCourseId() {
    return courseId;
  }

  public void setCourseId(int course_id) {
    this.courseId = course_id;
  }

  public int getProviderId() {
    return providerId;
  }

  public void setProviderId(int provider_id) {
    this.providerId = provider_id;
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

  @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (CourseProvider) obj;
        return this.courseId == that.courseId &&
                Objects.equals(this.providerId, that.providerId) &&
                Objects.equals(this.price, that.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(courseId, providerId, price);
    }

    @Override
    public String toString() {
        return "User[" +
                "course_id=" + courseId + ", " +
                "provider_id=" + providerId + ", " +
                "price=" + price + "]";
    }
}
