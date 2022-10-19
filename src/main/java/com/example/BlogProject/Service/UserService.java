package com.example.BlogProject.Service;

import com.example.BlogProject.Entity.User;
import com.example.BlogProject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addCustomer(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode(user.getPassword());
        user.setPassword(password);
        return userRepository.save(user);
    }

    public List<User> findAllCustomer() {
        return userRepository.findAll();
    }

    public User getById(Long userId) {
        return userRepository.findById(userId).get();
    }

    public void removeCustomer(Long userId) {
        userRepository.deleteById(userId);
    }

}
