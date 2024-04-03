package com.ldteam.music.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ldteam.music.entities.User;
import com.ldteam.music.services.UserService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;

@RestController
@RequestMapping("/api/v1/profile")
public class ProfileController {

    private final UserService userService;

    @Autowired
    public ProfileController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("")
    public ResponseEntity<User> getProfile(@RequestHeader("Authorization") String token) {
        // Xác thực token
        if (token != null && token.startsWith("Bearer ")) {
            String tokenWithoutBearer = token.substring(7); // Loại bỏ phần "Bearer "
            try {
                // Giải mã token để lấy ra thông tin payload
                JwtParser parser = Jwts.parser().setSigningKey("123".getBytes());
                Claims claims = parser.parseClaimsJws(tokenWithoutBearer).getBody();
                // Lấy ra id, email, và username từ payload
                String userId = claims.getSubject(); // Lấy ra id
                String email = claims.get("email", String.class); // Lấy ra email
                String username = claims.get("username", String.class); // Lấy ra username

                // Lấy thông tin người dùng từ cơ sở dữ liệu
                Optional<User> optionalUser = userService.getUserByEmail(email);

                // Kiểm tra xem user có tồn tại và thông tin người dùng từ token có khớp với
                // thông tin trong cơ sở dữ liệu không
                if (optionalUser.isPresent() && email.equals(optionalUser.get().getEmail())
                        && username.equals(optionalUser.get().getUsername())) {
                    // Trả về thông tin người dùng nếu thông tin khớp
                    return ResponseEntity.ok(optionalUser.get());
                }
            } catch (Exception e) {
                // Xử lý lỗi nếu có
                e.printStackTrace();
            }
        }
        // Trả về lỗi 401 Unauthorized nếu không tìm thấy thông tin người dùng hoặc
        // token không hợp lệ
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
