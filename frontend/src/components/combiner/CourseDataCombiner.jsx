class CourseDataCombiner {
  static async combineCoursesWithPricesAndCategories(courses, cheapestProvider, mostExpensiveProvider, category, tags, courseTags) {

    console.log("TAAAAA" + JSON.stringify(cheapestProvider.data));
    console.log(JSON.stringify(mostExpensiveProvider.data) + "b");

    try {
      // Create a map of category IDs to category names
      const categoryIdToNameMap = category.data.reduce((map, cat) => {
        map[cat.id] = cat.subject;
        return map;
      }, {});

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
        const categoryName = categoryIdToNameMap[course.categoryId] || "Other";
        
        // Get the tags for the course
        const tags = courseIdToTagsMap[course.id] || [];

        // Get the cheapest price data for the course
        const cheapestCourseData = cheapestProvider.data.find(provider => provider.courseId === course.id);
        
        // Get the most expensive price data for the course
        const mostExpensiveCourseData = mostExpensiveProvider.data.find(provider => provider.courseId === course.id);

        const courseWithCategoryAndTags = {
          ...course,
          categoryName: categoryName,
          cheapestPrice: cheapestCourseData ? cheapestCourseData.price : null,
          cheapestCurrency: cheapestCourseData ? cheapestCourseData.currency : null,
          mostExpensivePrice: mostExpensiveCourseData ? mostExpensiveCourseData.price : null,
          tags: tags
        };

        console.log(JSON.stringify(courseWithCategoryAndTags) + "ABCABC");

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
