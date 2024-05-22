class CourseDataCombiner {
  static async combineCoursesWithPricesAndCategories(courses, cheapestProvider, mostExpensiveProvider, category, tags, courseTags) {
    try {
      // Create a map of tag IDs to tag names
      const tagIdToNameMap = tags.data.reduce((map, tag) => {
        map[tag.id] = tag.tag;
        return map;
      }, {});

      // Create a map of course IDs to tags
      const courseIdToTagsMap = courseTags.data.reduce((map, courseTag) => {
        if (!map[courseTag.courseId]) {
          map[courseTag.courseId] = [];
        }
        map[courseTag.courseId].push(tagIdToNameMap[courseTag.tagId]);
        return map;
      }, {});

      // Assign categories, tags, cheapest and most expensive prices to courses based on their IDs
      const coursesWithData = courses.data.map((course) => {
        // Get the category name for the course's categoryId        
        // Get the tags for the course
        const tags = courseIdToTagsMap[course.id] || [];

        // Get the cheapest price data for the course
        const cheapestCourseData = cheapestProvider.data.find(provider => provider.courseId === course.id);
        
        // Get the most expensive price data for the course
        const mostExpensiveCourseData = mostExpensiveProvider.data.find(provider => provider.courseId === course.id);

        const courseWithCategoryAndTags = {
          ...course,
          cheapestPrice: cheapestCourseData ? cheapestCourseData.price : null,
          cheapestCurrency: cheapestCourseData ? cheapestCourseData.currency : null,
          mostExpensivePrice: mostExpensiveCourseData ? mostExpensiveCourseData.price : null,
          tags: tags
        };
        console.log(courseWithCategoryAndTags);
        return courseWithCategoryAndTags;
      });

      
      return coursesWithData;
    } catch (error) {
      console.error('Error combining courses with prices, categories, and tags:', error);
      return [];
    }
  }
}

export default CourseDataCombiner;
