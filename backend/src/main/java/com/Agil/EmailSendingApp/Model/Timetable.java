package com.Agil.EmailSendingApp.Model;

import javax.persistence.*;

@Entity
@Table(name = "TimeTable")
public class Timetable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     private Integer id;
     private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    private  String subject;
}
