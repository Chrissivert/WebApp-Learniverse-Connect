export function filterAndSortCourses(courses, filters, cheapestPrices) {
  // Filter by search query, min and max price
  let filtered = courses.filter(course =>
    course.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
    cheapestPrices[course.id] >= filters.minPrice &&
    cheapestPrices[course.id] <= filters.maxPrice
  );

  // Sort the filtered courses based on the selected attribute and sort order
  if (filters.sortBy === 'title') {
    filtered.sort((courseA, courseB) => {
      const titleA = courseA.title.toLowerCase();
      const titleB = courseB.title.toLowerCase();
      return filters.sortOrder === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });
  } else if (filters.sortBy) {
    filtered.sort((courseA, courseB) => {
      const valueA = getValueByAttribute(courseA, filters.sortBy, cheapestPrices);
      const valueB = getValueByAttribute(courseB, filters.sortBy, cheapestPrices);
      return filters.sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
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
