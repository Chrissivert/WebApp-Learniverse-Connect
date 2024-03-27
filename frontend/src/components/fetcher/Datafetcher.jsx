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
  
    static async fetchCheapestPrices() {
        try {
            const response = await fetch('http://localhost:8080/cheapest-course-prices');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching cheapest prices:', error);
            throw error;
        }
    }
  }
  
  export default DataFetcher;
  