// CoursesPage.js
import React, { useState, useEffect } from 'react';
import Courses from './Courses';
import SearchBar from '../../components/filter/searchBar/SearchBar';
import PriceRangeFilter from '../../components/filter/pricefilter/PriceFilter';
import TableFilter from '../../components/filter/sortbyfilter/TableFilter';
import Pagination from '../../components/pagination/Pagination';
import CoursesFetch from './CoursesFetch';

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
  const perPage = 4; // Number of courses per page

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await CoursesFetch.fetchCourses();
      setCourses(coursesData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil((courses.length / perPage)+1);
    setTotalPages(totalPages);
  }, [courses, perPage]);

  const handleSortChange = (sortBy, sortOrder) => {
    setFilters({ ...filters, sortBy, sortOrder });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <SearchBar setSearchQuery={(query) => setFilters({ ...filters, searchQuery: query })} />
      <PriceRangeFilter
        minPrice={0}
        maxPrice={100000}
        onPriceChange={(min, max) =>
          setFilters({ ...filters, minPrice: min, maxPrice: max })
        }
      />
      <TableFilter onSortChange={handleSortChange} />
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
