package com.example.BlogProject.Controller;


import com.example.BlogProject.Auth.JwtTokenUtil;
import com.example.BlogProject.Entity.AuthRequest;
import com.example.BlogProject.Entity.AuthResponse;
import com.example.BlogProject.Entity.User;
import com.example.BlogProject.Repository.UserRepository;
import com.example.BlogProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:3000"})

public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtTokenUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/save")
    public ResponseEntity addUser(@RequestBody User user) throws Exception {
        String email = user.getEmail();
        if (userRepository.existsByEmail(email)) {
            throw new Exception("Böyle bir e-mail değeri bulunmakta");
        }
        return ResponseEntity.ok(userService.addCustomer(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest request){
        try {
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(), request.getPassword())
            );

            User user = (User) authentication.getPrincipal();
            String accessToken = jwtUtil.generateAccessToken(user);
            AuthResponse response = new AuthResponse("Bearer "+accessToken);

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> findAllCustomer() {
        return ResponseEntity.ok(userService.findAllCustomer());
    }

    @GetMapping("/find-customer/{id}")
    public ResponseEntity<User> getProduct(@PathVariable Long id) throws Exception {
        if (!userRepository.existsById(id)) {
            throw new Exception("Böyle bir kullanıcı kayıdı bulunmamakta.");
        }
        return ResponseEntity.ok(userService.getById(id));
    }

    @DeleteMapping("/remove-customer/{id}")
    public ResponseEntity<User> removeCustomer(@PathVariable Long id) throws Exception {
        if (!userRepository.existsById(id)) {
            throw new Exception("Silmek istediğiniz kullanıcı kayıdı bulunamamaktadır");
        }
        userService.removeCustomer(id);
        return new ResponseEntity<User>(HttpStatus.ACCEPTED);
    }
}
