package demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestContext {

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("springannotation.xml");
        Student student = context.getBean(Student.class);
        student.info();

    }
}
