package com.operative.springbootdemo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping(value="/",method= RequestMethod.GET)
    public String welcome(){
        System.out.println("HelloController:welcome");
        return "Welcome to Spring boot";
    }
    @GetMapping("/GettingStarted")
    public String GettingStarted(){
        return "Getting Started";
    }
}
