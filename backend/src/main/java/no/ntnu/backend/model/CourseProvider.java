package no.ntnu.backend.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// @Entity
public class CourseProvider {

  private int course_id;
  private int provider_id;
  private double price;

  public CourseProvider() {
  }

  public CourseProvider(int course_id, int provider_id, double price) {
    this.course_id = course_id;
    this.provider_id = provider_id;
    this.price = price;
  }

  public int getCourseId() {
    return course_id;
  }

  public void setCourseId(int course_id) {
    this.course_id = course_id;
  }

  public int getProviderId() {
    return provider_id;
  }

  public void setProviderId(int provider_id) {
    this.provider_id = provider_id;
  }

  public double getPrice() {
    return this.price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (CourseProvider) obj;
        return this.course_id == that.course_id &&
                Objects.equals(this.provider_id, that.provider_id) &&
                Objects.equals(this.price, that.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(course_id, provider_id, price);
    }

    @Override
    public String toString() {
        return "User[" +
                "course_id=" + course_id + ", " +
                "provider_id=" + provider_id + ", " +
                "price=" + price + "]";
    }
}