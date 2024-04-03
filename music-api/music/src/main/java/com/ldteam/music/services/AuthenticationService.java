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
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final RoleCustomRepo roleCustomRepo;
    private final JwtService jwtService;
    private final UserService userService;
    private final RoleService roleService;

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
                authenticationRequest.getPassword()));
        User user = userRepository.findByEmail(authenticationRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Role> roles = roleCustomRepo.getRole(user);
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        String accessToken = jwtService.generateAccessToken(user, authorities);
        String refreshToken = jwtService.generateRefreshToken(user, authorities);

        return new AuthenticationResponse(accessToken, refreshToken);
    }

    public RegistrationResponse registerUser(RegistrationRequest registrationRequest) {
        Optional<User> existingUser = userRepository.findByEmail(registrationRequest.getEmail());
        if (existingUser != null) {
            return new RegistrationResponse("Email already exists");
        }
        User user = new User();
        user.setEmail(registrationRequest.getEmail());
        user.setPassword(registrationRequest.getPassword());
        Role role = roleService.create("ROLE_USER");
        user.setRoles(Set.of(role));
        userService.saveUser(user);
        return new RegistrationResponse("Registration successful");
    }
}
