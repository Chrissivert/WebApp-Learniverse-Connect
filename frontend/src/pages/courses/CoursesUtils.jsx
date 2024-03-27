export function filterAndSortCourses(courses, filters) {
  // Filter by search query, min and max price, and selected category
  let filtered = courses.filter(course =>
    (!filters.searchQuery || course.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) &&
    course.cheapestPrice >= filters.minPrice &&
    course.cheapestPrice <= filters.maxPrice &&
    (!filters.category || // Check if category is undefined or empty
      (course.categories && // Check if course.categories exists
        course.categories.includes(filters.category))
    ) &&
    (!filters.selectedCategory || // Check if selectedCategory is undefined or empty
      (course.categories && // Check if course.categories exists
        course.categories.includes(filters.selectedCategory))
    )
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
      const valueA = getValueByAttribute(courseA, filters.sortBy);
      const valueB = getValueByAttribute(courseB, filters.sortBy);
      return filters.sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    });
  }

  return filtered;
}


function getValueByAttribute(course, attribute) {
  if (attribute === 'price') {
    return course.cheapestPrice || 0;
  } else if (attribute === 'credits') {
    return course.credit || 0;
  } else if (attribute === 'title') {
    return course.title || '';
  }
  return 0;
}
