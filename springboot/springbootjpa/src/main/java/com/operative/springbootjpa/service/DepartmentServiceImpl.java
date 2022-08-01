package com.operative.springbootjpa.service;

import com.operative.springbootjpa.entity.Department;
import com.operative.springbootjpa.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentServiceImpl implements DepartmentService{

    @Autowired
    private DepartmentRepository departmentRepository;
    @Override
    public Department saveDepartment(Department department) {
        System.out.println("DepartmentServiceImpl:saveDepartment");
        return this.departmentRepository.save(department);
    }
}
