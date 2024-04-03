package com.ldteam.music.services;

import java.util.Optional;

import com.ldteam.music.entities.Role;
import com.ldteam.music.entities.User;

public interface UserService {
    User saveUser(User user);
    Optional<User> getUserByEmail(String email);
    Optional<User> getUserById(Long id);
}
