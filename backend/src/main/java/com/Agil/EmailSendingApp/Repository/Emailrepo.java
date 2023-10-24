package com.Agil.EmailSendingApp.Repository;

import com.Agil.EmailSendingApp.Model.EmailSending;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Emailrepo extends JpaRepository<EmailSending,Integer> {

    EmailSending findByEmail(String email);
}
