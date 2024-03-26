// CoursesPage.js
import React, { useState, useEffect } from 'react';
import Courses from './Courses';
// import FilterSection from './FilterSection';
import Pagination from '../../components/pagination/Pagination';
import CoursesFetch from './CoursesFetch';
import FilterSection from '../../components/filter/FilterSection';

function CoursesPage() {
  const [filters, setFilters] = useState({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 100000,
    sortBy: null,
    sortOrder: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState([]); // All courses
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const [perPage, setPerPage] = useState(5); // Number of courses per page

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await CoursesFetch.fetchCourses();
      setCourses(coursesData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(courses.length / perPage);
    setTotalPages(totalPages);
  }, [courses, perPage]);

  const handleSortChange = (sortBy, sortOrder) => {
    setFilters({ ...filters, sortBy, sortOrder });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const handleSearchQueryChange = (query) => {
    setFilters({ ...filters, searchQuery: query });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, minPrice: min, maxPrice: max });
  };

  return (
    <div>
      <FilterSection
        onSearchQueryChange={handleSearchQueryChange}
        onPriceChange={handlePriceChange}
        onSortChange={handleSortChange}
      />
      <Courses
        filters={filters}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={handlePageChange}
        courses={courses}
        setCourses={setCourses}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default CoursesPage;
