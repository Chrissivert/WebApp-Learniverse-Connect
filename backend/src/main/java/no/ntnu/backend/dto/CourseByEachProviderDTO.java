package no.ntnu.backend.dto;

public class CourseByEachProviderDTO {

    private double price;
    private String currency;
    private int courseId;
    private String providerName;

    // Getters
    public double getPrice() {
        return price;
    }

    public String getCurrency() {
        return currency;
    }

    public int getCourseId() {
        return courseId;
    }

    public String getProviderName() {
        return providerName;
    }

    // Setters
    public void setPrice(double price) {
        this.price = price;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }
}
