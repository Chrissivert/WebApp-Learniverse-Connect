package no.ntnu.webapp.group01.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.webapp.group01.models.EmailRequest;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@RestController
class EmailController {

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest request) {
        String name = request.getName();
        String email = request.getEmail();
        String message = request.getMessage();

        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Authenticator auth = new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("your-email@gmail.com", "your-password");
            }
        };

        Session session = Session.getInstance(props, auth);

        try {
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress("your-email@gmail.com"));
            msg.setRecipient(Message.RecipientType.TO, new InternetAddress("recipient@example.com"));
            msg.setSubject("New Contact Form Submission");
            msg.setText("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
            Transport.send(msg);

            return "Email sent successfully";
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error sending email";
        }
    }
}
