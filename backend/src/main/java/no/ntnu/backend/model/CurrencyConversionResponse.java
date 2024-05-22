package no.ntnu.backend.model;

import java.util.Map;

public class CurrencyConversionResponse {
    private Map<String, Double> data;

    public Map<String, Double> getData() {
        return data;
    }

    public void setData(Map<String, Double> rates) {
        this.data = rates;
    }
}
