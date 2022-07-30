package com.operative.springbootjpa.service;

import com.operative.springbootjpa.entity.Product;
import com.operative.springbootjpa.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductRepository productRepository;
    @Override
    public Product addProduct(Product product) {
        
        return productRepository.save(product);

    }
}
