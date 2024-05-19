package no.ntnu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.PurchaseData;
import no.ntnu.backend.service.EmailSenderService;

@RequestMapping("/purchased")
@RestController
@CrossOrigin
public class PurchaseController {

    @Autowired
    private EmailSenderService emailSenderService;

    @Operation(summary = "Handle Purchase", description = "Handle purchase request and send confirmation email.")
    @PostMapping()
    public void handlePurchase(@RequestBody PurchaseData purchaseData) {
        String email = purchaseData.getToEmail();
        String subject = purchaseData.getSubject();
        String text = "Thank you for your purchase!\n\n" + purchaseData.getText();

        System.out.println("Sending email to: " + email);
        System.out.println("Subject: " + subject);
        System.out.println("Text: " + text);

        System.out.println("Sending email..." + purchaseData.getText());

        emailSenderService.sendEmail(email, subject, text);
    }
}
