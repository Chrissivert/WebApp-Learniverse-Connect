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

  static async addFavoriteCourse(userId, courseId) {
    try {
      const response = await axios.post(`http://localhost:8080/api/favorite-courses/user/${userId}/course/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error adding course to favorites:', error);
      throw error;
    }
  }

  static async removeFavoriteCourse(userId, courseId) {
    try {
      const response = await axios.delete(`http://localhost:8080/api/favorite-courses/user/${userId}/course/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error removing course from favorites:', error);
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

  static async fetchProviders(id, targetCurrency) {
    try {
      const response = await axios.get(`http://localhost:8080/course/providers/${id}?targetCurrency=${targetCurrency}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching providers:', error);
      throw error;
    }
  }


static async fetchCategories() {
  try {
    const response = await axios.get(`http://localhost:8080/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching providers:', error);
    throw error;
  }
}

static async fetchFavoriteCourses(userId) {
  try {
    const response = await axios.get(`http://localhost:8080/api/favorite-courses/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching favorite courses:', error);
    throw error;
  }
}

}

export default DataFetcher;
