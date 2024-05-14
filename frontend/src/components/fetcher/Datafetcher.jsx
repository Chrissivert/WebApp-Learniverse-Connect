import axios from "axios";

class DataFetcher {

  static async fetchCheapestPrices(targetCurrency) {
    try {
      const response = await axios.get(`http://localhost:8080/cheapest-course-prices?targetCurrency=${targetCurrency}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cheapest prices:', error);
      throw error;
    }
  }

  static async fetchProviders(id, targetCurrency) {
    try {
      const response = await axios.get(`http://localhost:8080/course/providers/${id}?targetCurrency=${targetCurrency}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching providers:', error);
      throw error;
    }
  }
}

export default DataFetcher;
