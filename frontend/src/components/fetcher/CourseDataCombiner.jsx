class CourseDataCombiner {
  static async combineCoursesWithPricesAndCategories(courses, courseProvider, category) {
    try {
      // Create a map of category IDs to category names
      const categoryIdToNameMap = category.reduce((map, cat) => {
        map[cat.id] = cat.subject;
        return map;
      }, {});

      // Assign categories to courses based on their categoryId
      console.log('courses:', courses)
      const coursesWithData = courses.data.map((course) => {
        // Get the category name for the course's categoryId
        const categoryName = categoryIdToNameMap[course.categoryId] || "Other";

        const courseDataFromProvider = courseProvider.find(courseProvider => courseProvider.courseId === course.id);

        const courseWithCategory = {
          ...course,
          categoryName: categoryName, 
          cheapestPrice: courseDataFromProvider ? courseDataFromProvider.price : null,
          currency: courseDataFromProvider ? courseDataFromProvider.currency : null,
        };

        return courseWithCategory;
      });
    
      return coursesWithData;
    } catch (error) {
      console.error('Error combining courses with prices and/or categories provider:', error);
      return [];
    }
  }
}

export default CourseDataCombiner;
