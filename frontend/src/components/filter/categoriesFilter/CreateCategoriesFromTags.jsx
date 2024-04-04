import React, { useState, useEffect } from "react";
import Courses from "../../../pages/courses/Courses";
import DataFetcher from "./DataFetcher"; // Importing the DataFetcher class

const CategoriesFromTags = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [courses, setCourses] = useState([]);
  const [courseTags, setCourseTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const similarTagsMap = {

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data using DataFetcher class
        const [tagsData, coursesData, courseTagsData] = await Promise.all([
          DataFetcher.fetchTags(),
          DataFetcher.fetchCourses(),
          DataFetcher.fetchCourseTags()
        ]);

        setTags(tagsData);
        setCourses(coursesData);
        setCourseTags(courseTagsData);

        const processedTags = tagsData.map(tag => ({
          ...tag,
          tagName: similarTagsMap[tag.tag.toUpperCase()] || "Other"
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
