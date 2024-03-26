export function filterAndSortCourses(courses, filters, cheapestPrices, sortBy, sortOrder) {
    let filtered = Object.values(courses);
  
    // Filter by search query
    if (filters.searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }
  
    // Filter by price range
    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      filtered = filtered.filter(course =>
        cheapestPrices[course.id] >= filters.minPrice && cheapestPrices[course.id] <= filters.maxPrice
      );
    }
  
    // Sort the filtered courses based on the selected attribute and sort order
    if (sortBy === 'title') {
      filtered.sort((courseA, courseB) => {
        return courseA.title.localeCompare(courseB.title);
      });
    } else if (sortBy) {
      filtered.sort((courseA, courseB) => {
        const valueA = getValueByAttribute(courseA, sortBy, cheapestPrices);
        const valueB = getValueByAttribute(courseB, sortBy, cheapestPrices);
        if (sortOrder === 'asc') {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });  
    return filtered;
  }
  
  function getValueByAttribute(course, attribute, cheapestPrices) {
    switch (attribute) {
      case 'price':
        return cheapestPrices[course.id];
      case 'credits':
        return parseInt(course.credit);
      case 'title':
        return course.title;
      default:
        return null;
    }
  }
  