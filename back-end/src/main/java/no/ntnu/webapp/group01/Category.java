package no.ntnu.webapp.group01;

public enum Category {
  INFORMATION_TECHNOLOGIES("Information Technologies"),
  DIGITAL_MARKETING("Digital Marketing"),
  BUSINESS_AND_ENTREPRENEURSHIP("Business and Entrepreneurship"),
  DATA_SCIENCE_AND_ANALYTICS("Data Science and Analytics");

  private String subject;
  private Category(String subject) {
    this.subject = subject;
  }
}
