import { useState, useEffect } from 'react';
import CourseDataCombiner from '../../components/combiner/CourseDataCombiner.jsx';
import { useCurrencyContext } from '../../components/currencySelector/TargetCurrencyContext';
import { filterLogic } from "./FilterLogic.jsx";
import { getCoursesFromServer } from '../../services/course-service.jsx';
import { getCategoriesFromServer } from '../../services/category-service.jsx';
import { getCheapestPriceForEachCourse } from '../../services/course-provider.jsx';


function useCoursesPageLogic() {
  const { targetCurrency } = useCurrencyContext();
  const [filters, setFilters] = useState({
    searchQuery: '',
    minPrice: 0,
    maxPrice: 100000, // Initialize with a default value
    sortBy: '',
    sortOrder: 'asc',
    category: ''
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000); // Initialize with a default value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await getCoursesFromServer();
        const courseProviderData = await getCheapestPriceForEachCourse(targetCurrency);
        // const courseProviderData = await DataFetcher.fetchCheapestPrices(targetCurrency);
        const categoriesData = await getCategoriesFromServer();

        console.log('coursesData:', coursesData)
        console.log('courseProviderData:', courseProviderData)
        console.log('categoriesData:', categoriesData)
        console.log("dadad")

        const combinedCourses = await CourseDataCombiner.combineCoursesWithPricesAndCategories(coursesData, courseProviderData, categoriesData);
        
        setAllCourses(combinedCourses);

        // Calculate the maximum price from courseProviderData
        if (courseProviderData.length > 0) {
          const maxPriceValue = Math.max(...courseProviderData.map(provider => provider.price));
          setMaxPrice(maxPriceValue);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
  
    fetchData();
  }, [targetCurrency]);

  useEffect(() => {
    const filteredCourses = filterLogic(allCourses, filters);
    setCourses(filteredCourses);
  }, [filters, allCourses]);

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
    filters: { ...filters, maxPrice }, // include maxPrice in filters
    currentPage,
    perPage,
    courses,
    targetCurrency,
    handleSortChange,
    handlePageChange,
    handleSearchQueryChange,
    handlePriceChange,
    handleCategoryChange,
  };
}

export default useCoursesPageLogic;
