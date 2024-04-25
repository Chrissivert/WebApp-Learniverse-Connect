import { createCategories } from "../filter/categoriesFilter/Category";

class CourseDataCombiner {
  static async combineCoursesWithPricesAndCategories(courses, courseProvider, courseTags) {
    try {
      const tagIdToCategoryMap = await createCategories();

      // Assign categories to courses based on their tag IDs
      const coursesWithData = courses.map((course) => {
        // Get tagIds for current course
        const tagIds = courseTags.filter(tag => tag.courseId === course.id).map(tag => tag.tagId);
        // Map tagIds to their categories
        const categories = tagIds.map(tagId => tagIdToCategoryMap[tagId] || "Other");

        // Find the course data from the courseProvider by matching courseId
        const courseDataFromProvider = courseProvider.find(courseProvider => courseProvider.courseId === course.id);

        return {
          ...course,
          cheapestPrice: courseDataFromProvider ? courseDataFromProvider.price : null,
          cheapestPriceCurrency: courseDataFromProvider ? courseDataFromProvider.currency : null,
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
