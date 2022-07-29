package demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome to Spring");
        System.out.println("Java way of object creation");
        Doctor doctor = new Doctor();
        doctor.assist();
        System.out.println("Spring way of object creation");
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        Doctor springdoc = context.getBean(Doctor.class);
        springdoc.assist();


    }

}
