package com.operative.springbootjpa.repository;

import com.operative.springbootjpa.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department,Long> {
}
