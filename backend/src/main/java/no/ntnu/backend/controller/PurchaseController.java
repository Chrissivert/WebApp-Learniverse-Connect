package no.ntnu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.backend.model.PurchaseData;

@RequestMapping("/purchased")
@RestController
@CrossOrigin
public class PurchaseController {

    @Autowired
    private EmailSenderService emailSenderService;

    

    @Operation(summary = "Cree", description = "Crekkke.")
    @PostMapping()
    public void handlePurchase(@RequestBody PurchaseData purchaseData) {
        String email = purchaseData.getToEmail();
        System.out.println("eeeeeeee" + purchaseData.getToEmail());
        System.out.println("eeeeeeee" + purchaseData.getSubject());
        String subject = "Purchase Confirmation";
        String text = "Thank you for your purchase!";
        emailSenderService.sendEmail(email, subject, text);
    }
}
