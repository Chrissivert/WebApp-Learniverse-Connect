package no.ntnu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService{

@Autowired
private JavaMailSender mailSender;

@Value("${spring.mail.username}")
    private String senderEmail;

public void sendEmail(String toEmail, String subject, String text){
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom(senderEmail);
    message.setTo(toEmail);
    message.setSubject(subject);
    message.setText(text);


    System.out.println("Senddadading email to: " + toEmail);
    System.out.println("Subject: " + subject);
    System.out.println("Senddwadawdaing email..." + text);

System.out.println("Sending email..." + message);

    mailSender.send(message);
    
}
}