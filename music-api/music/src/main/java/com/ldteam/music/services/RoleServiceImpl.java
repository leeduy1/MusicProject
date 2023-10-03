package com.ldteam.music.services;

import com.ldteam.music.entities.Role;
import com.ldteam.music.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService{

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role create(String name) {
        Role role = new Role();
        role.setName(name);
        return roleRepository.save(role);
    }
}
