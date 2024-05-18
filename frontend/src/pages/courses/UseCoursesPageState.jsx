// import { useState, useEffect } from 'react';
// import CourseDataCombiner from '../../components/combiner/CourseDataCombiner';
// import { getCoursesFromServer, getTagsFromServer, getCheapestPriceForEachCourse } from '../../../../services/course-service';
// import { getCategoriesFromServer } from '../../services/category-service';

// function useCoursesPageState() {
//   const [filters, setFilters] = useState({
//     searchQuery: '',
//     minPrice: 0,
//     maxPrice: 100000,
//     sortBy: '',
//     sortOrder: 'asc',
//     category: ''
//   });

//   const [courses, setCourses] = useState([]);
//   const [courseTags, setCourseTags] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const coursesData = await getCoursesFromServer();
//         const cheapestPricesData = await getCheapestPriceForEachCourse();
//         const categoryData = await getCategoriesFromServer();
//         const tagsData = await getTagsFromServer();

//         const combinedCourses = await CourseDataCombiner.combineCoursesWithPricesAndCategories(coursesData, cheapestPricesData, categoryData, tagsData);

//         setCourses(combinedCourses);
//         setCourseTags(tagsData);  // Assuming you want to set courseTags with tagsData
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSortChange = (sortBy, sortOrder) => {
//     setFilters({ ...filters, sortBy, sortOrder });
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSearchQueryChange = (query) => {
//     setFilters({ ...filters, searchQuery: query });
//   };

//   const handlePriceChange = (min, max) => {
//     setFilters({ ...filters, minPrice: min, maxPrice: max });
//   };

//   const handleCategoryChange = (category) => {
//     setFilters({ ...filters, category });
//   };

//   return {
//     filters,
//     courses,
//     courseTags,
//     handleSortChange,
//     handlePageChange,
//     handleSearchQueryChange,
//     handlePriceChange,
//     handleCategoryChange,
//   };
// }

// export default useCoursesPageState;
