package com.operative.springbootjpa.repository;

import com.operative.springbootjpa.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
