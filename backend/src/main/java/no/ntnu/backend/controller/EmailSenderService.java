package no.ntnu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService{

@Autowired
private JavaMailSender mailSender;

public void sendEmail(String toEmail, String subject, String text){
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("group01webapp.outlook.com");
    message.setTo("chris.sivert@outlook.com");
    message.setSubject("adawdwad");
    message.setText("hello");

    mailSender.send(message);
    
}
}