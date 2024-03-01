package no.ntnu.webapp.group01;

import java.util.List;

public class OutdatedCourse {
  private int id;
  private String title;
  private Category category;
  private List<String> tags;
  private Level level;
  private String courseSession;
  private double courseSize;
  private double hoursPerWeek;
  private String relatedCertifications;
  private String provider;
  private double price;
  private String description;

  public OutdatedCourse(int id, String title, Category category, List<String> tags, Level level, String courseSession, double courseSize,
      double hoursPerWeek, String relatedCertifications, String provider, double price, String description) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.tags = tags;
    this.level = level;
    this.courseSession = courseSession;
    this.courseSize = courseSize;
    this.hoursPerWeek = hoursPerWeek;
    this.relatedCertifications = relatedCertifications;
    this.provider = provider;
    this.price = price;
    this.description = description;
  }
  
  public int getId() {
    return this.id;
  }
  
  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Category getCategory() {
    return this.category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public List<String> getTags() {
    return this.tags;
  }

  public void setTags(List<String> tags) {
    this.tags = tags;
  }

  public Level getLevel() {
    return this.level;
  }

  public void setLevel(Level level) {
    this.level = level;
  }

  public String getCourseSession() {
    return this.courseSession;
  }

  public void setCourseSession(String courseSession) {
    this.courseSession = courseSession;
  }

  public double getCourseSize() {
    return this.courseSize;
  }

  public void setCourseSize(double courseSize) {
    this.courseSize = courseSize;
  }

  public double getHoursPerWeek() {
    return this.hoursPerWeek;
  }

  public void setHoursPerWeek(double hoursPerWeek) {
    this.hoursPerWeek = hoursPerWeek;
  }

  public String getRelatedCertifications() {
    return this.relatedCertifications;
  }

  public void setRelatedCertifications(String relatedCertifications) {
    this.relatedCertifications = relatedCertifications;
  }

  public String getProvider() {
    return this.provider;
  }

  public void setProvider(String provider) {
    this.provider = provider;
  }

  public double getPrice() {
    return this.price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}