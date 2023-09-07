package com.ldteam.music.controllers;

import com.ldteam.music.auth.AuthenticationRequest;
import com.ldteam.music.auth.AuthenticationResponse;
import com.ldteam.music.services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demo")
@RequiredArgsConstructor

public class DemoController {
    private AuthenticationService authenticationService;

    @GetMapping("/test")
    public ResponseEntity<String> login() {
        return ResponseEntity.ok("Authentication and Authorization is succeeded");
    }
}
