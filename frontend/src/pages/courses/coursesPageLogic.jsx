import { useState, useEffect } from 'react';
import DataFetcher from '../../components/fetcher/Datafetcher';
import CourseDataCombiner from '../../components/fetcher/CourseDataCombiner';
import { useCurrencyContext } from '../../components/currencySelector/TargetCurrencyContext';

function coursesPageLogic() {
  const { targetCurrency } = useCurrencyContext();
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
        const courseProviderData = await DataFetcher.fetchCheapestPrices(targetCurrency); // Pass target currency
        const tagsData = await DataFetcher.fetchCourseTags();''

        console.log('Course Provider Data:', courseProviderData); // Logging course provider data
  
        const combinedCourses = await CourseDataCombiner.combineCoursesWithPricesAndCategories(coursesData, courseProviderData, tagsData);
        setCourses(combinedCourses);
        setCourseTags(tagsData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    fetchData();
  }, [targetCurrency]); // Update when targetCurrency changes

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

  const handleCurrencyChange = async (currency) => {
    setTargetCurrency(currency); // Update target currency

    try {
      const cheapestPricesData = await DataFetcher.fetchCheapestPrices(currency); // Fetch prices for selected currency
      const combinedCourses = await CourseDataCombiner.combineCoursesWithPricesAndCategories(courses, cheapestPricesData, courseTags);
      setCourses(combinedCourses); // Update courses with new prices
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  return {
    filters,
    currentPage,
    perPage,
    courses,
    courseTags,
    targetCurrency,
    handleSortChange,
    handlePageChange,
    handleSearchQueryChange,
    handlePriceChange,
    handleCategoryChange,
    handleCurrencyChange,
  };
}

export default coursesPageLogic;
