import { useState, useEffect } from 'react';
import CourseDataCombiner from '../../components/combiner/CourseDataCombiner.jsx';
import { useCurrencyContext } from '../../components/currencySelector/TargetCurrencyContext';
import { filterLogic } from "./FilterLogic.jsx";
import { getCoursesFromServer } from '../../services/course-service.jsx';
import { getCategoriesFromServer } from '../../services/category-service.jsx';
import { getCheapestPriceForEachCourse, getMostExpensivePriceForEachCourse } from '../../services/course-provider.jsx';
import { getTagsFromServer} from '../../services/tags-service.jsx'; // Import the new services
import { getCourseTagsFromServer} from '../../services/course-tags-service.jsx'; // Import the new services


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

  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000); // Initialize with a default value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await getCoursesFromServer();
        const cheapestProviderForEachCourse = await getCheapestPriceForEachCourse(targetCurrency);
        const mostExpensiveProviderForEachCourse = await getMostExpensivePriceForEachCourse(targetCurrency);
        const categoriesData = await getCategoriesFromServer();
        const tagsData = await getTagsFromServer(); // Fetch tags
        const courseTagsData = await getCourseTagsFromServer(); // Fetch course-tags

        const combinedCourses = await CourseDataCombiner.combineCoursesWithPricesAndCategories(
          coursesData,
          cheapestProviderForEachCourse,
          mostExpensiveProviderForEachCourse,
          categoriesData,
          tagsData,
          courseTagsData
        );
        
        setAllCourses(combinedCourses);

        if (mostExpensiveProviderForEachCourse.data.length > 0) {
          const maxPriceValue = Math.max(...mostExpensiveProviderForEachCourse.data.map(provider => provider.price));
          console.log(JSON.stringify(mostExpensiveProviderForEachCourse.data) + "dddd")
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

  const handleSearchQueryChange = (query) => {
    setFilters({ ...filters, searchQuery: query });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, minPrice: min, maxPrice: max });
  };

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category });
  };

  const handleTagSearch = (tag) => {
    setFilters({ ...filters, searchQuery: tag });
  };

  return {
    filters: { ...filters, maxPrice }, // include maxPrice in filters
    courses,
    targetCurrency,
    handleSortChange,
    handleSearchQueryChange,
    handlePriceChange,
    handleCategoryChange,
    handleTagSearch,
  };
}

export default useCoursesPageLogic;
