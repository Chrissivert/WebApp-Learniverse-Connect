// DataFetcher.js
class DataFetcher {
    static async fetchCourses() {
      try {
        const response = await fetch('http://localhost:8080/courses');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching courses:', error);
        throw error; // Optional: re-throw the error to handle it in the component
      }
    }
  
    static async fetchCheapestPrices(targetCurrency) {
      try {
        const response = await fetch(`http://localhost:8080/cheapest-course-prices?targetCurrency=${targetCurrency}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching cheapest prices:', error);
        throw error;
      }
    }

    static async fetchTags() {
        try {
          const response = await fetch('http://localhost:8080/tags');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching tags:', error);
          throw error;
        }
      }
    
      static async fetchCourseTags() {
        try {
          const response = await fetch('http://localhost:8080/course-tags');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching course tags:', error);
          throw error;
        }
      }
  }
  export default DataFetcher;