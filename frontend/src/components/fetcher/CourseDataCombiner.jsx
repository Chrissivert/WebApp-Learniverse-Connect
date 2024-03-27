import { createCategories } from "../filter/categoriesFilter/Category";

class CourseDataCombiner {
  static async combineCoursesWithPricesAndCategories(courses, cheapestPrices, courseTags) {
    try {
      const categoriesMap = await createCategories();

      // Create a map of courseId to cheapest price
      const cheapestPricesMap = cheapestPrices.reduce((map, price) => {
        map[price.courseId] = price.price;
        return map;
      }, {});

      // Map tagIds from courseTags to their corresponding tags and categories
      const coursesWithData = courses.map(course => {
        // Get tagIds for current course
        const tagId = courseTags.find(tag => tag.courseId === course.id)?.tagId;
        // Get categories for the tagId
        const categories = tagId ? categoriesMap[tagId] || [] : [];
        
        return {
          ...course,
          cheapestPrice: cheapestPricesMap[course.id] || null,
          categories: categories
        };
      });

      console.log("Courses with Data:", coursesWithData);
      return coursesWithData;
    } catch (error) {
      console.error('Error combining courses with prices and categories:', error);
      return [];
    }
  }
}

export default CourseDataCombiner;
