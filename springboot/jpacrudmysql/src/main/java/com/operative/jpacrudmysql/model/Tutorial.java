package com.operative.jpacrudmysql.model;

import javax.persistence.*;

@Entity
@Table(name="tutorials")
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name="title")
    private String title;
    private String description;
    private boolean published;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isPublished() {
        return published;
    }

    public void setPublished(boolean published) {
        this.published = published;
    }

    public Tutorial(){

    }
    public Tutorial(String title,String description,boolean published){
        this.title = title;
        this.description = description;
        this.published = published;
    }

    public String toString(){
        return "Tutorial id="+id +" title "+title +" desc "+description +" published "+published;
    }


}
