package no.ntnu.webapp.group01.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import no.ntnu.webapp.group01.models.EmailRequest;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@RestController
@RequestMapping("/api")
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/email")
    public String sendEmail(@RequestBody EmailRequest request) {
        String name = request.getName();
        String email = request.getEmail();
        String message = request.getMessage();

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo("group01WebApp@outlook.com");
            helper.setFrom("IAmChuckNorris1940@outlook.com");
            helper.setSubject("New Contact Form Submission");
            helper.setText("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

            mailSender.send(mimeMessage);
            return "Email sent successfully";
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error sending email";
        }
    }
}
