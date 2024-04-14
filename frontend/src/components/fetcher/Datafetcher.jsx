import axios from "axios";

class DataFetcher {
  static async fetchCourses() {
    try {
      const response = await axios.get('http://localhost:8080/courses');
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  }

  static async fetchCheapestPrices(targetCurrency) {
    try {
      const response = await axios.get(`http://localhost:8080/cheapest-course-prices?targetCurrency=${targetCurrency}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cheapest prices:', error);
      throw error;
    }
  }

  static async fetchTags() {
    try {
      const response = await axios.get('http://localhost:8080/tags');
      return response.data;
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }

  static async fetchCourseTags() {
    try {
      const response = await axios.get('http://localhost:8080/course-tags');
      return response.data;
    } catch (error) {
      console.error('Error fetching course tags:', error);
      throw error;
    }
  }

  static async fetchCourse(id) {
    try {
      const response = await axios.get(`http://localhost:8080/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course:', error);
      throw error;
    }
  }

  static async fetchProviders(id) {
    try {
      const response = await axios.get(`http://localhost:8080/course/providers/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching providers:', error);
      throw error;
    }
  }
}

export default DataFetcher;
