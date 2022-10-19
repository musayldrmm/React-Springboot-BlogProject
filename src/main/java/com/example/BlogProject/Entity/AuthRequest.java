package com.example.BlogProject.Entity;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;

@Getter
@Setter
public class AuthRequest {
    @NotNull @Email
    private String email;

    @NotNull
    private String password;

}