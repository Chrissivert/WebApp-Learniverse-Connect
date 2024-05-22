package no.ntnu.backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

/**
 * Represents a user entity in the system with attributes such as username,
 * email, and roles.
 * This class is mapped to a database table using JPA annotations.
 *
 * @version 22.05.2024
 * @author Group 01
 */
@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String username;
  private Date startDate;
  private String email;
  private String password;
  private boolean active = true;
  private Integer imgId;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "user_role", joinColumns = { @JoinColumn(name = "user_id") }, 
      inverseJoinColumns = { @JoinColumn(name = "role_id") })
  private Set<Role> roles = new LinkedHashSet<>();

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private List<FavoriteCourse> favoriteCourses;

  /**
   * Default constructor.
   */
  public User() {
  }

  /**
   * Constructor with email and password.
   *
   * @param email    the email of the user
   * @param password the password of the user
   */
  public User(String email, String password) {
    this.email = email;
    this.password = password;
  }

  /**
   * Constructor with user ID.
   *
   * @param id the ID of the user
   */
  public User(int id) {
    this.id = id;
  }

  /**
   * Sets the roles of the user.
   *
   * @param roles the roles to set
   */
  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  /**
   * Gets the roles of the user.
   *
   * @return the roles of the user
   */
  public Set<Role> getRoles() {
    return this.roles;
  }

  /**
   * Gets the ID of the user.
   *
   * @return the ID of the user
   */
  public int getId() {
    return this.id;
  }

  /**
   * Sets the ID of the user.
   *
   * @param id the new ID of the user
   */
  public void setId(int id) {
    this.id = id;
  }

  /**
   * Adds a role to the user.
   *
   * @param role the role to add
   */
  public void addRole(Role role) {
    this.roles.add(role);
  }

  /**
   * Gets the username of the user.
   *
   * @return the username of the user
   */
  public String getUsername() {
    return this.username;
  }

  /**
   * Sets the username of the user.
   *
   * @param username the new username of the user
   */
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   * Gets the start date of the user.
   *
   * @return the start date of the user
   */
  public Date getStartDate() {
    return this.startDate;
  }

  /**
   * Sets the start date of the user.
   *
   * @param startDate the new start date of the user
   */
  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  /**
   * Gets the email of the user.
   *
   * @return the email of the user
   */
  public String getEmail() {
    return this.email;
  }

  /**
   * Sets the email of the user.
   *
   * @param email the new email of the user
   */
  public void setEmail(String email) {
    this.email = email;
  }

  /**
   * Gets the password of the user.
   *
   * @return the password of the user
   */
  public String getPassword() {
    return this.password;
  }

  /**
   * Sets the password of the user.
   *
   * @param password the new password of the user
   */
  public void setPassword(String password) {
    this.password = password;
  }

  /**
   * Gets the image ID associated with the user.
   *
   * @return the image ID
   */
  public Integer getImgId() {
    return this.imgId;
  }

  /**
   * Sets the image ID associated with the user.
   *
   * @param imgId the new image ID
   */
  public void setImgId(Integer imgId) {
    this.imgId = imgId;
  }

  /**
   * Checks if the user is active.
   *
   * @return true if the user is active, false otherwise
   */
  public boolean isActive() {
    return this.active;
  }

  /**
   * Sets the active status of the user.
   *
   * @param active the new active status
   */
  public void setActive(boolean active) {
    this.active = active;
  }

  @Override
  public boolean equals(Object obj) {
    if (obj == this) {
      return true;
    }
    if (obj == null || obj.getClass() != this.getClass()) {
      return false;
    }
    var that = (User) obj;
    return this.id == that.id && this.roles.equals(that.roles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.username, this.startDate, 
      this.email, this.password, this.active, this.imgId);
  }

  @Override
  public String toString() {
    return "User["
        + "id=" + this.id + ", "
        + "username=" + this.username + ", "
        + "startDate=" + this.startDate + ", "
        + "email=" + this.email + ", "
        + "password=" + this.password + ", "
        + "active=" + this.active + ", "
        + "imgId=" + this.imgId + ']';
  }
}