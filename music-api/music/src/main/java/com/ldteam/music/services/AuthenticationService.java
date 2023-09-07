package com.ldteam.music.services;

import com.ldteam.music.auth.AuthenticationRequest;
import com.ldteam.music.auth.AuthenticationResponse;
import com.ldteam.music.auth.RegistrationRequest;
import com.ldteam.music.auth.RegistrationResponse;
import com.ldteam.music.entities.Role;
import com.ldteam.music.entities.User;
import com.ldteam.music.repositories.RoleCustomRepo;
import com.ldteam.music.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final RoleCustomRepo roleCustomRepo;
    private final JwtService jwtService;
    private final UserService userService;
    private final RoleService roleService;


    public AuthenticationResponse authenticaticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        User user = userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow();
        List<Role> role = null;
        if(user != null) {
            role = roleCustomRepo.getRole(user);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        Set<Role> set = new HashSet<>();
        role.stream().forEach(c -> set.add(new Role(c.getName())));
        user.setRoles(set);
        set.stream().forEach(i -> authorities.add(new SimpleGrantedAuthority(i.getName())));
        var jwtAccessToken = jwtService.generateAccessToken(user, authorities);
        var jwtRefreshToken = jwtService.generateRefreshToken(user, authorities);
        return AuthenticationResponse.builder().accessToken(jwtAccessToken).refreshToken(jwtRefreshToken).build();
    }

    public RegistrationResponse registerUser(RegistrationRequest registrationRequest) {
        Optional<User> existingUser = userRepository.findByEmail(registrationRequest.getEmail());
        if (existingUser.isPresent()) {
            return new RegistrationResponse("Email already exists");
        }
        User user = new User();
        Role role = roleService.create("ROLE_USER");
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setUser_name(registrationRequest.getUser_name());
        user.setEmail(registrationRequest.getEmail());
        user.setPassword(registrationRequest.getPassword());
        user.setRoles(roles);
        userService.saveUser(user);
        return new RegistrationResponse("Registration successful");
    }
}
