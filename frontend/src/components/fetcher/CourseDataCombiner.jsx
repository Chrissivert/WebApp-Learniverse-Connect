class CourseDataCombiner {
    static combineCoursesWithPrices(courses, cheapestPrices) {
        // Create a map of courseId to cheapest price
        const cheapestPricesMap = cheapestPrices.reduce((map, price) => {
            map[price.courseId] = price.price; // Adjust the field name here
            return map;
        }, {});

        // Map over courses and add cheapestPrice property
        const coursesWithPrices = courses.map(course => ({
            ...course,
            cheapestPrice: cheapestPricesMap[course.id] || null // Ensure courseId matches course.id
        }));

        return coursesWithPrices;
    }
}

export default CourseDataCombiner;
