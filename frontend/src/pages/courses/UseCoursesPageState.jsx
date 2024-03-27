import { useState, useEffect } from 'react';
import DataFetcher from '../../components/fetcher/Datafetcher';
import CourseDataCombiner from '../../components/fetcher/CourseDataCombiner';

function useCoursesPageState() {
  const [filters, setFilters] = useState({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 100000,
    sortBy: '',
    sortOrder: 'asc',
    category: ''
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5); // Number of courses per page - hardcoded
  const [courses, setCourses] = useState([]);
  const [courseTags, setCourseTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await DataFetcher.fetchCourses();
        const cheapestPricesData = await DataFetcher.fetchCheapestPrices();
        const tagsData = await DataFetcher.fetchCourseTags();
  
        const combinedCourses = await CourseDataCombiner.combineCoursesWithPricesAndCategories(coursesData, cheapestPricesData, tagsData);
        console.log("Combined", combinedCourses);
        setCourses(combinedCourses);
        setCourseTags(tagsData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    fetchData();
  }, []);

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

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category });
  };

  return {
    filters,
    currentPage,
    perPage,
    courses,
    courseTags,
    handleSortChange,
    handlePageChange,
    handleSearchQueryChange,
    handlePriceChange,
    handleCategoryChange,
  };
}

export default useCoursesPageState;
