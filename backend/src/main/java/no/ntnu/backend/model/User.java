package no.ntnu.backend.model;


import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "user")
public final class User{
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "role_id")
    private int roleId;
    
    @Column(name = "username")
    private String username;

    @Column(name = "start_date")
    private String startDate;

    private String email;
    private String password;

    public User() {
    }

    public User(int id, int roleId, String userName, String startDate, String email, String password) {
        this.id = id;
        this.roleId = roleId;
        this.username = userName;
        this.startDate = startDate;
        this.email = email;
        this.password = password;
    }


    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public int getRoleId() {
        return roleId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String firstName) {
        this.username = firstName;
    }


    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (User) obj;
        return this.id == that.id &&
                Objects.equals(this.username, that.username) &&
                Objects.equals(this.email, that.email) &&
                Objects.equals(this.password, that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id,roleId, username, startDate, email, password);
    }

    @Override
    public String toString() {
        return "User[" +
                "id=" + id + ", " +
                "roleId=" + roleId + ", " +
                "firstName=" + username + ", " +
                "startDate=" + startDate + ", " +
                "email=" + email + ", " +
                "password=" + password + ']';
    }

}