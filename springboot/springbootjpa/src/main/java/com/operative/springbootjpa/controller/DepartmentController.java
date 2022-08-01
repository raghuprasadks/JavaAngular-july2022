package com.operative.springbootjpa.controller;

import com.operative.springbootjpa.entity.Department;
import com.operative.springbootjpa.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @PostMapping("/departments")
    public Department saveDepartment(@RequestBody Department department){
        System.out.println("DepartmentController:saveDepartment");
        return this.departmentService.saveDepartment(department);
    }
}
