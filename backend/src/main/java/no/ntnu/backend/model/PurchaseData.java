package no.ntnu.backend.model;

/**
 * Represents data related to a purchase, including email details such as
 * recipient, subject, and text.
 *
 * @version 22.05.2024
 * @author Group 01
 */
public class PurchaseData {
  private String toEmail;
  private String subject;
  private String text;

  /**
   * Gets the email address of the recipient.
   *
   * @return the email address of the recipient
   */
  public String getToEmail() {
    return this.toEmail;
  }

  /**
   * Sets the email address of the recipient.
   *
   * @param toEmail the email address of the recipient
   */
  public void setToEmail(String toEmail) {
    this.toEmail = toEmail;
  }

  /**
   * Gets the subject of the email.
   *
   * @return the subject of the email
   */
  public String getSubject() {
    return this.subject;
  }

  /**
   * Sets the subject of the email.
   *
   * @param subject the subject of the email
   */
  public void setSubject(String subject) {
    this.subject = subject;
  }

  /**
   * Gets the text content of the email.
   *
   * @return the text content of the email
   */
  public String getText() {
    return this.text;
  }

  /**
   * Sets the text content of the email.
   *
   * @param text the text content of the email
   */
  public void setText(String text) {
    this.text = text;
  }
}