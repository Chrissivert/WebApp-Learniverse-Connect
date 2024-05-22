package no.ntnu.backend.dto;

public class CourseByEachProviderDTO {

    private double price;
    private String currency;
    private Long courseId;
    private String providerName;

    // Getters
    public double getPrice() {
        return price;
    }

    public String getCurrency() {
        return currency;
    }

    public Long getCourseId() {
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

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }
}
