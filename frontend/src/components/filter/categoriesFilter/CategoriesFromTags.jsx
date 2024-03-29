import React, { useState, useEffect } from "react";
import Courses from "../../../pages/courses/Courses"; // Assuming this component displays a list of courses

const CategoriesFromTags = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [courses, setCourses] = useState([]);
  const [courseTags, setCourseTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Define similarTagsMap at the top level so it's accessible throughout the component
  const similarTagsMap = {
    "JAVA": "Programming Languages",
    "MYSQL": "Databasess",
    "SQL": "Databasess",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tags
        const tagsResponse = await fetch('http://localhost:8080/tags');
        const tagsData = await tagsResponse.json();
        setTags(tagsData);

        // Fetch courses
        const coursesResponse = await fetch('http://localhost:8080/courses');
        const coursesData = await coursesResponse.json();
        setCourses(coursesData);

        // Fetch course-tags relationships
        const courseTagsResponse = await fetch('http://localhost:8080/course-tags');
        const courseTagsData = await courseTagsResponse.json();
        setCourseTags(courseTagsData);

        // Process tags to generate categories
        const processedTags = tagsData.map(tag => ({
          ...tag,
          category: similarTagsMap[tag.tag.toUpperCase()] || "Other"
        }));

        const uniqueCategories = Array.from(new Set(processedTags.map(tag => tag.category))).sort();
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterCourses = () => {
      if (!selectedCategory || selectedCategory === "Other") {
        setFilteredCourses(courses);
        return;
      }

      const selectedTagsIds = tags
        .filter(tag => {
          const category = similarTagsMap[tag.tag.toUpperCase()] || "Other";
          return category === selectedCategory;
        })
        .map(tag => tag.id);

      const selectedCourseIds = courseTags
        .filter(ct => selectedTagsIds.includes(ct.tag_id))
        .map(ct => ct.course_id);

      const filtered = courses.filter(course => selectedCourseIds.includes(course.id));
      setFilteredCourses(filtered);
    };

    filterCourses();
  }, [selectedCategory, courses, courseTags, tags]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      <Courses courses={filteredCourses} />
    </div>
  );
};

export default CategoriesFromTags;
