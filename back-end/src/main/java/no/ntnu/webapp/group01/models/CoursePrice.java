package no.ntnu.webapp.group01.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CoursePricing")
public class CoursePrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pricingID;

    @Column(name = "courseID")
    private int courseID;

    @Column(name = "providerID")
    private int providerID;

    @Column(name = "price")
    private double price;

    @Column(name = "currency")
    private String currency;

    public CoursePrice() {
    }

    public int getPricingID() {
        return pricingID;
    }

    public void setPricingID(int pricingID) {
        this.pricingID = pricingID;
    }

    public int getCourseID() {
        return courseID;
    }

    public void setCourseID(int courseID) {
        this.courseID = courseID;
    }

    public int getProviderID() {
        return providerID;
    }

    public void setProviderID(int providerID) {
        this.providerID = providerID;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
