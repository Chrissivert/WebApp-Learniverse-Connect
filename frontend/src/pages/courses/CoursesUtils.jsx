export function filterAndSortCourses(courses, filters, cheapestPrices, sortBy, sortOrder) {
  
  // Filter by search query, min and max price
  let filtered = courses.filter(course =>
    course.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
    cheapestPrices[course.id] >= filters.minPrice &&
    cheapestPrices[course.id] <= filters.maxPrice
  );

  // Sort the filtered courses based on the selected attribute and sort order
  if (sortBy === 'title') {
    filtered.sort((courseA, courseB) => {
      const titleA = courseA.title.toLowerCase();
      const titleB = courseB.title.toLowerCase();
      if (sortOrder === 'asc') {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });
  } else if (sortBy) {
    // Sorting logic for other attributes remains unchanged
    filtered.sort((courseA, courseB) => {
      const valueA = getValueByAttribute(courseA, sortBy, cheapestPrices);
      const valueB = getValueByAttribute(courseB, sortBy, cheapestPrices);
      if (sortOrder === 'asc') {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });
  }

  return filtered;
}


function getValueByAttribute(course, attribute, cheapestPrices) {
  if (attribute === 'price') {
    return cheapestPrices[course.id] || 0;
  } else if (attribute === 'credits') {
    return course.credit || 0;
  } else if (attribute === 'title') {
    return course.title || '';
  }
  return 0;
}
