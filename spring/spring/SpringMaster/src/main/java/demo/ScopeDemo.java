package demo;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
//@Scope(scopeName = "singleton")
@Scope(scopeName = "prototype")
public class ScopeDemo {

    private String title;

    public void scopeDemo(){
        System.out.println("Scope demo");
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
