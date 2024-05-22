package no.ntnu.backend.security;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import no.ntnu.backend.model.Role;
import no.ntnu.backend.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class AccessUserDetails implements UserDetails {
    private final String email;
    private final String password;
    private final boolean isActive;
    private final Set<GrantedAuthority> authorities = new HashSet();

    public AccessUserDetails(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.isActive = user.isActive();
        this.convertRoles(user.getRoles());
    }

    private void convertRoles(Set<Role> roles) {
        this.authorities.clear();
        Iterator var3 = roles.iterator();

        while(var3.hasNext()) {
            Role role = (Role)var3.next();
            this.authorities.add(new SimpleGrantedAuthority(role.getTitle()));
        }
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    public String getPassword() {
        return this.password;
    }

    public String getUsername() {
        return this.email;
    }

    public boolean isAccountNonExpired() {
        return this.isActive;
    }

    public boolean isAccountNonLocked() {
        return this.isActive;
    }

    public boolean isCredentialsNonExpired() {
        return this.isActive;
    }

    public boolean isEnabled() {
        return true;
    }
}
