import axios from "axios";

class CoursesFetch {
  static async fetchCourses() {
    try {
      const result = await axios.get("http://localhost:8080/courses");
      return result.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      return [];
    }
  }

  static async fetchCheapestPrices() {
    try {
      const result = await axios.get("http://localhost:8080/cheapest-course-prices");
      const pricesMap = result.data.reduce((acc, current) => {
        acc[current.courseId] = current.price;
        return acc;
      }, {});
      return pricesMap;
    } catch (error) {
      console.error("Error fetching cheapest prices:", error);
      return {};
    }
  }
}

export default CoursesFetch;
import axios from "axios";
import { sendApiGetRequest } from "../../services/api-requests";

class CoursesFetch {
  static async fetchCourses() {
    try {
      const result = await axios.get("http://localhost:8080/courses");
      return result.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      return [];
    }
  }

  static async fetchCheapestPrices() {
    try {
      const result = await axios.get("http://localhost:8080/cheapest-course-prices");
      const pricesMap = result.data.reduce((acc, current) => {
        acc[current.courseId] = current.price;
        return acc;
      }, {});
      return pricesMap;
    } catch (error) {
      console.error("Error fetching cheapest prices:", error);
      return {};
    }
  }
}

export default CoursesFetch;
