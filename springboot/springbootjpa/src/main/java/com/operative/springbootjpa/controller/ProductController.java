package com.operative.springbootjpa.controller;

import com.operative.springbootjpa.entity.Product;
import com.operative.springbootjpa.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/product")
    public Product addProduct(@RequestBody Product product){

        return productService.addProduct(product);
    }
}
