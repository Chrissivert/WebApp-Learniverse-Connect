package no.ntnu.backend.service;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import no.ntnu.backend.model.CourseProvider;
import no.ntnu.backend.model.CurrencyConversionResponse;
import no.ntnu.backend.repository.CourseProviderRepository;

@Service
public class CourseProviderService {

    @Autowired
    private CourseProviderRepository courseProviderRepository;

    // Cache for conversion rates, with separate maps for each base currency
    private Map<String, Map<String, Double>> conversionRatesMap = new HashMap<>();

    // Cache for last update timestamp for each base currency
    private Map<String, Long> lastUpdatedMap = new HashMap<>();

    public List<CourseProvider> getConvertedCoursePrices(String targetCurrency) {
        List<CourseProvider> allCoursePrices = courseProviderRepository.findAll();
        List<CourseProvider> convertedCoursePrices = new ArrayList<>();

        for (CourseProvider coursePrice : allCoursePrices) {
            String baseCurrency = coursePrice.getCurrency(); // Fetch base currency from the database
            double conversionRateToTargetCurrency = getConversionRate(baseCurrency, targetCurrency);
            if (conversionRateToTargetCurrency == -1) {
                // Handle error case, return original prices
                return allCoursePrices; // Return original prices if conversion fails for any course
            }

            double convertedPrice = coursePrice.getPrice() * conversionRateToTargetCurrency;
            coursePrice.setPrice(convertedPrice);
            coursePrice.setCurrency(targetCurrency);
            convertedCoursePrices.add(coursePrice);
        }

        return convertedCoursePrices;
    }

    private double getConversionRate(String baseCurrency, String targetCurrency) {
        Map<String, Double> conversionRates = conversionRatesMap.get(baseCurrency);
        Long lastUpdated = lastUpdatedMap.getOrDefault(baseCurrency, 0L);

        if (conversionRates == null || System.currentTimeMillis() - lastUpdated > 3600000) {
            // Fetch conversion rates if cache is empty or rates are outdated (1 hour in this example)
            try {
                String apiKey = "fca_live_g7qLJhzahQOmCMlAPGQZZTfLIAfLccPFjRrqS4mu";
                String apiUrl = "https://api.freecurrencyapi.com/v1/latest?apikey=" + apiKey + "&base_currency=" + baseCurrency;
                RestTemplate restTemplate = new RestTemplate();
                CurrencyConversionResponse response = restTemplate.getForObject(apiUrl, CurrencyConversionResponse.class);

                conversionRates = response.getData();
                lastUpdated = System.currentTimeMillis();

                // Update cache
                conversionRatesMap.put(baseCurrency, conversionRates);
                lastUpdatedMap.put(baseCurrency, lastUpdated);
            } catch (Exception e) {
                System.err.println("Error fetching conversion rates: " + e.getMessage());
                e.printStackTrace();
                return -1;
            }
        }
        if (conversionRates.containsKey(targetCurrency)) {
            return conversionRates.get(targetCurrency);
        } else {
            System.err.println("Currency not found in conversion rates: " + targetCurrency);
            return -1;
        }
    }
}
