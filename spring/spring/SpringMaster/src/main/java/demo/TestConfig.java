package demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class TestConfig {

    public static void main(String[] args) {
        ApplicationContext context =  new AnnotationConfigApplicationContext(BeanConfig.class);
        Customer customer = context.getBean(Customer.class);
        customer.info();
        ScopeDemo scopeDemo1 = context.getBean(ScopeDemo.class);
        scopeDemo1.setTitle("Title 1");
        System.out.println("scopeDemo1:Title" +scopeDemo1.getTitle());
        ScopeDemo scopeDemo2 = context.getBean(ScopeDemo.class);
        System.out.println("scopeDemo2:Title" +scopeDemo2.getTitle());


    }
}
