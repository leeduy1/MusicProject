package com.ldteam.music.controllers;

import com.ldteam.music.auth.AuthenticationRequest;
import com.ldteam.music.auth.AuthenticationResponse;
import com.ldteam.music.auth.RegistrationRequest;
import com.ldteam.music.auth.RegistrationResponse;
import com.ldteam.music.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.asm.Advice.Origin;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        // System.out.println("Email: " + email);
        // System.out.println("Password: " + password);

        if (email == null || password == null) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }

        AuthenticationRequest authenticationRequest = new AuthenticationRequest(email, password);
        AuthenticationResponse response = authenticationService.authenticate(authenticationRequest);

        // System.out.println(authenticationRequest);
        // System.out.println(response);

        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> register(@RequestBody RegistrationRequest registrationRequest) {

        // Lấy mật khẩu từ yêu cầu đăng ký
        String password = registrationRequest.getPassword();

        // Mã hóa mật khẩu bằng bcrypt
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(password);

        // Gán mật khẩu đã mã hóa lại vào yêu cầu đăng ký
        registrationRequest.setPassword(encodedPassword);

        // Gọi phương thức registerUser từ authenticationService và trả về phản hồi
        return ResponseEntity.ok(authenticationService.registerUser(registrationRequest));
    }
}
