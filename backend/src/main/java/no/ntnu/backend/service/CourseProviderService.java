// package no.ntnu.backend.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;
// import no.ntnu.backend.model.CourseProvider;
// import no.ntnu.backend.model.CurrencyConversionResponse;
// import no.ntnu.backend.repository.CourseProviderRepository;

// import java.util.ArrayList;
// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// @Service
// public class CourseProviderService {

//     @Autowired
//     private CourseProviderRepository courseProviderRepository;

//     private Map<String, Double> conversionRates; // Cache for conversion rates
//     private long lastUpdated; // Timestamp of the last update

//     public List<CourseProvider> getConvertedCoursePrices(String targetCurrency) {
//         List<CourseProvider> allCoursePrices = courseProviderRepository.findAll(); // Using repository method here
//         List<CourseProvider> convertedCoursePrices = new ArrayList<>();

//         double conversionRate = getConversionRate(targetCurrency);
//         if (conversionRate == -1) {
//             // Handle error case, return original prices
//             return allCoursePrices;
//         }

//         for (CourseProvider coursePrice : allCoursePrices) {
//             if ("USD".equals(coursePrice.getCurrency())) {
//                 double convertedPrice = coursePrice.getPrice() * conversionRate;
//                 if (convertedPrice >= 0) {
//                     coursePrice.setPrice(convertedPrice);
//                     coursePrice.setCurrency(targetCurrency);
//                 }
//             }
//             convertedCoursePrices.add(coursePrice);
//         }
//         return convertedCoursePrices;
//     }

//     private double getConversionRate(String targetCurrency) {
//         if (conversionRates == null || System.currentTimeMillis() - lastUpdated > 3600000) {
//             // Fetch conversion rates if cache is empty or rates are outdated (1 hour in this example)
//             try {
//                 String apiKey = "fca_live_g7qLJhzahQOmCMlAPGQZZTfLIAfLccPFjRrqS4mu";
//                 String apiUrl = "https://api.freecurrencyapi.com/v1/latest?apikey=" + apiKey + "&base_currency=USD";
//                 RestTemplate restTemplate = new RestTemplate();
//                 CurrencyConversionResponse response = restTemplate.getForObject(apiUrl, CurrencyConversionResponse.class);

//                 conversionRates = response.getData();
//                 lastUpdated = System.currentTimeMillis();
//             } catch (Exception e) {
//                 System.err.println("Error fetching conversion rates: " + e.getMessage());
//                 e.printStackTrace();
//                 return -1;
//             }
//         }
//         if (conversionRates.containsKey(targetCurrency)) {
//             return conversionRates.get(targetCurrency);
//         } else {
//             System.err.println("Currency not found in conversion rates: " + targetCurrency);
//             return -1;
//         }
//     }
// }
