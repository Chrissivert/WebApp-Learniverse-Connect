import { createCategories } from "../filter/categoriesFilter/Category";

class CourseDataCombiner {
  static async combineCoursesWithPricesAndCategories(courses, cheapestPrices, courseTags) {
    try {
      const tagIdToCategoryMap = await createCategories();

      // Create a map of courseId to cheapest price
      const cheapestPricesMap = cheapestPrices.reduce((map, price) => {
        map[price.courseId] = price.price;
        return map;
      }, {});

      // Assign categories to courses based on their tag IDs
      const coursesWithData = courses.map(course => {
        // Get tagIds for current course
        const tagIds = courseTags.filter(tag => tag.courseId === course.id).map(tag => tag.tagId);
        // Map tagIds to their categories
        const categories = tagIds.map(tagId => tagIdToCategoryMap[tagId] || "Other");

        return {
          ...course,
          cheapestPrice: cheapestPricesMap[course.id] || null,
          categories: categories, // Array of categories based on the course's tag IDs
        };
      });

      return coursesWithData;
    } catch (error) {
      console.error('Error combining courses with prices and categories:', error);
      return [];
    }
  }
}

export default CourseDataCombiner;
