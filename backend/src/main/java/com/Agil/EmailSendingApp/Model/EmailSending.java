package com.Agil.EmailSendingApp.Model;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


import javax.persistence.*;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "period")
public class EmailSending {
 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    private String name;
    private String email;
    private String subject;


}
