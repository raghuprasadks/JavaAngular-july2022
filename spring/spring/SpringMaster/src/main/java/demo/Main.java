package demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        System.out.println("Welcome to Spring");
        System.out.println("Java way of object creation");
     //   Doctor doctor = new Doctor();
       // doctor.assist();
        System.out.println("Spring way of object creation");
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        Doctor springdoc = context.getBean(Doctor.class);
        springdoc.assist();
        String qualification = springdoc.getQualification();
        System.out.println("Qualification "+qualification);
        int id = springdoc.getId();
        System.out.println("Id "+id);

        Nurse nurse = (Nurse)context.getBean("nurse");
        nurse.assist();

        System.out.println("with interface");

        Staff staff = context.getBean(Doctor.class);
        staff.assist();
        staff = context.getBean(Nurse.class);
        staff.assist();

        System.out.println("Nurse objected is embedded in Doctor");
        springdoc.getNurse().assist();

    }

}
