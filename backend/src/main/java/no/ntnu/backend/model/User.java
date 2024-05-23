package no.ntnu.backend.model;

import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import jakarta.persistence.*;

/**
 * 
 *
 * @author 
 * @version 30.03.2024
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

  @ManyToMany(
          fetch = FetchType.EAGER
  )
  @JoinTable(
          name = "user_role",
          joinColumns = {@JoinColumn(
                  name = "user_id"
          )},
          inverseJoinColumns = {@JoinColumn(
                  name = "role_id"
          )}
  )
  private Set<Role> roles = new LinkedHashSet();

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<FavoriteCourse> favoriteCourses;

  public User() {
  }

  public User(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public User(int id) {
    this.id = id;
}

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public Set<Role> getRoles() {
    return this.roles;
  }

  public int getId() {
    return this.id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void addRole(Role role){
    this.roles.add(role);
  }

  /*public int getRoleId() {
    return this.roleId;
  }

  public void setRoleId(int roleId) {
    this.roleId = roleId;
  }*/




  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public Date getStartDate() {
    return this.startDate;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  /*@JsonIgnore
  public boolean isValid() {
    return //this.id > 0 &&
      this.roleId > 0;
  }*/

  @Override
  public boolean equals(Object obj) {
    if (obj == this)
      return true;
    if (obj == null || obj.getClass() != this.getClass())
      return false;
    var that = (User) obj;
    return this.id == that.id &&
      this.roles.equals(that.roles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id);
  }

  @Override
  public String toString() {
    return "User[" +
        "id=" + this.id + ']';
  }

  public boolean isActive() {
    return this.active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }
}