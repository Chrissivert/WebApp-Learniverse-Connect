import React, { useState, useEffect } from "react";
import Courses from "../../../pages/courses/Courses";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [courseTags, setCourseTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tags
        const tagsResponse = await fetch('http://localhost:8080/tags');
        const tagsData = await tagsResponse.json();
        const processedTags = processTags(tagsData);

        // Fetch course-tags associations
        const courseTagsResponse = await fetch('http://localhost:8080/course-tags');
        const courseTagsData = await courseTagsResponse.json();

        setCategories(processedTags);
        setCourseTags(courseTagsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const processTags = (tagsData) => {
    // Define mapping for similar tags to group them
    const similarTagsMap = {
      "MYSQL": "Databases",
      "SQL": "Databases",
      // Add more mappings as needed
    };

    // Replace similar tags with their grouped category
    const processedTags = tagsData.map(tag => ({
      ...tag,
      tag: similarTagsMap[tag.tag] || tag.tag // Use grouped category if available, otherwise keep original tag
    }));

    // Remove duplicate categories
    const uniqueTags = processedTags.reduce((acc, curr) => {
      if (!acc.find(tag => tag.tag === curr.tag)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    return uniqueTags;
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterCoursesByCategory = () => {
    if (!selectedCategory) {
      return []; // No category selected, return empty list
    }

    // Find tags associated with the selected category
    const selectedCategoryTags = categories.filter(tag => tag.tag === selectedCategory);

    // Find course IDs associated with the selected tags
    const courseIds = selectedCategoryTags.flatMap(categoryTag =>
      courseTags
        .filter(courseTag => courseTag.tagId === categoryTag.id)
        .map(courseTag => courseTag.courseId)
    );

    // Filter courses based on the filtered course IDs
    return courseIds.map(courseId =>
      // Replace this with your actual course fetching logic
      ({ id: courseId, name: `Course ${courseId}` })
    );
  };

  const filteredCourses = filterCoursesByCategory();

  return (
    <div>
      <h2>Select a category:</h2>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.tag}>
            {category.tag}
          </option>
        ))}
      </select>

      {selectedCategory && <Courses courses={filteredCourses} />}
    </div>
  );
};

export default Categories;
