package com.Agil.EmailSendingApp.Controller;


import com.Agil.EmailSendingApp.Model.EmailSending;
import com.Agil.EmailSendingApp.Repository.Emailrepo;
import com.Agil.EmailSendingApp.Service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/mail")
public class MailController {
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
     private Emailrepo repo;
    @PostMapping("/get")
    public String send(@RequestBody EmailSending emailSending){
        System.out.println("mail");
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setSubject("class start with in 5 min");
        simpleMailMessage.setText("your next class is cse 3rd year");
        simpleMailMessage.setTo(emailSending.getEmail());
        simpleMailMessage.setFrom("kit.24.20bcs006@gmail.com");
        mailSender.send(simpleMailMessage);
        System.out.println("Sent");
        return "Done";
    }
    @PostMapping("/timetable")
    public String add(@RequestBody EmailSending emailsending){
        repo.save(emailsending);
        return "success";
    }


    @PutMapping("/update")
    public String update(@RequestBody EmailSending emailSending){
        EmailSending newEnamilSending = repo.findByEmail(emailSending.getEmail());
        newEnamilSending.setName(emailSending.getName());
        newEnamilSending.setSubject(emailSending.getSubject());
        repo.save(newEnamilSending);
        return "Success";
    }
   @GetMapping("/getValue")
    public List<EmailSending> getValue()    {
       return repo.findAll();
          }


}
