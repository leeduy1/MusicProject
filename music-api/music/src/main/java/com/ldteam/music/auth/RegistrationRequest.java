package com.ldteam.music.auth;

import com.ldteam.music.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationRequest {
    private String id;
    private String user_name;
    private String full_name;
    private String email;
    private String password;
    private String role;
}
