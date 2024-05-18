class CourseDataCombiner {
  static async combineCoursesWithPricesAndCategories(courses, courseProvider, category, tags, courseTags) {

    console.log("t2ags"+ JSON.stringify(tags.data))
        console.log(JSON.stringify(courseTags.data) + "b")
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

      // Assign categories and tags to courses based on their IDs
      const coursesWithData = courses.data.map((course) => {
        // Get the category name for the course's categoryId
        const categoryName = categoryIdToNameMap[course.categoryId] || "Other";
        
        // Get the tags for the course
        const tags = courseIdToTagsMap[course.id] || [];

        const courseDataFromProvider = courseProvider.data.find(courseProvider => courseProvider.courseId === course.id);

        const courseWithCategoryAndTags = {
          ...course,
          categoryName: categoryName, 
          cheapestPrice: courseDataFromProvider ? courseDataFromProvider.price : null,
          currency: courseDataFromProvider ? courseDataFromProvider.currency : null,
          tags: tags
        };

        console.log(JSON.stringify(courseWithCategoryAndTags) + "a")

        

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
