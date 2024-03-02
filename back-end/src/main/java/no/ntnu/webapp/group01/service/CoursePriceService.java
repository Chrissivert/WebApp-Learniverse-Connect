package no.ntnu.webapp.group01.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import no.ntnu.webapp.group01.models.CoursePrice;
import no.ntnu.webapp.group01.models.CurrencyConversionResponse;
import no.ntnu.webapp.group01.repositories.PriceRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class CoursePriceService {

    @Autowired
    private PriceRepository priceRepository;

    public List<CoursePrice> getConvertedCoursePrices(String targetCurrency) {
        List<CoursePrice> allCoursePrices = priceRepository.findAll();
        List<CoursePrice> convertedCoursePrices = new ArrayList<>();

        for (CoursePrice coursePrice : allCoursePrices) {
            if ("USD".equals(coursePrice.getCurrency())) {
                double convertedPrice = convertToCurrency(coursePrice.getPrice(), targetCurrency);
                if (convertedPrice >= 0) {
                    coursePrice.setPrice(convertedPrice);
                    coursePrice.setCurrency(targetCurrency);
                }
            }
            convertedCoursePrices.add(coursePrice);
        }
        return convertedCoursePrices;
    }

    private double convertToCurrency(double price, String targetCurrency) {
        try {
            String apiKey = "fca_live_g7qLJhzahQOmCMlAPGQZZTfLIAfLccPFjRrqS4mu";
            String apiUrl = "https://api.freecurrencyapi.com/v1/latest?apikey=" + apiKey + "&base_currency=USD";
            RestTemplate restTemplate = new RestTemplate();
            CurrencyConversionResponse response = restTemplate.getForObject(apiUrl, CurrencyConversionResponse.class);

            Map<String, Double> rates = response.getData();
            if (rates.containsKey(targetCurrency)) {
                double conversionRate = rates.get(targetCurrency);
                return price * conversionRate;
            } else {
                throw new IllegalArgumentException("Currency not found in API response: " + targetCurrency);
            }
        } catch (Exception e) {
            System.err.println("Error converting currency: " + e.getMessage());
            e.printStackTrace();
            return -1;
        }
    }
}
