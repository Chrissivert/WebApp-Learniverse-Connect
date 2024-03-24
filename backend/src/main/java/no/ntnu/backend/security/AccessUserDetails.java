package no.ntnu.backend.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import no.ntnu.backend.model.User;

/**
 * Contains authentication information, needed by UserDetailsService.
 */
public class AccessUserDetails implements UserDetails {
  private final String email;
  private final String password;
//   private final boolean isActive;
  private final Set<GrantedAuthority> authorities = new HashSet<>();

  public AccessUserDetails(User user) {
    this.email = user.getEmail();
    this.password = user.getPassword();
    // this.isActive = user.isActive();
    // this.convertRoles(user.getRoles());
  }

//   private void convertRoles(Set<Role> roles) {
//     authorities.clear();
//     for (Role role : roles) {
//       authorities.add(new SimpleGrantedAuthority(role.getName()));
//     }
//   }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public String getUsername() {
    return email;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true; //isActive;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true; //isActive;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true; //isActive;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
}