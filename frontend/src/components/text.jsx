import React, { useState } from 'react';

const data = {
  tags: [
    { id: 1, tag: 'Java' },
    { id: 2, tag: 'Real-time programming' },
    { id: 3, tag: 'Multi-threading' },
    { id: 4, tag: 'Programming' },
    { id: 5, tag: 'SQL' },
    { id: 6, tag: 'Relational databases' },
    { id: 7, tag: 'MySQL' },
    { id: 8, tag: 'web' },
    { id: 9, tag: '.net' },
    { id: 10, tag: 'C#' },
    { id: 11, tag: 'Azure' },
    { id: 12, tag: 'Could services' },
    { id: 13, tag: 'Administration' },
    { id: 14, tag: 'AWS' },
    { id: 15, tag: 'Keyword reserch and analysis' },
    { id: 16, tag: 'Technical SEO optimization' },
    { id: 17, tag: 'Off-page SEO strategies' },
    { id: 18, tag: 'Advanced analytics and reporting' },
    { id: 19, tag: 'Strategic storytelling' },
    { id: 20, tag: 'Targeted engagement techniques' },
    { id: 21, tag: 'Data-driven optimization' },
    { id: 22, tag: 'Pyhton' },
    { id: 23, tag: 'Machine learning' },
    { id: 24, tag: 'Data science' },
    { id: 25, tag: 'Neural networks' },
    { id: 26, tag: 'Image processing' },
    { id: 27, tag: 'Databricks' },
  ],
  courses: [
    { courseId: 1, tagId: 1 },
    { courseId: 1, tagId: 2 },
    { courseId: 1, tagId: 3 },
    { courseId: 1, tagId: 4 },
    { courseId: 2, tagId: 5 },
    { courseId: 2, tagId: 6 },
    { courseId: 2, tagId: 7 },
    { courseId: 3, tagId: 8 },
    { courseId: 3, tagId: 4 },
    { courseId: 3, tagId: 9 },
    { courseId: 3, tagId: 10 },
    { courseId: 4, tagId: 11 },
    { courseId: 4, tagId: 12 },
    { courseId: 5, tagId: 11 },
    { courseId: 5, tagId: 12 },
    { courseId: 5, tagId: 13 },
    { courseId: 6, tagId: 14 },
    { courseId: 6, tagId: 12 },
    { courseId: 7, tagId: 15 },
    { courseId: 7, tagId: 16 },
    { courseId: 7, tagId: 17 },
    { courseId: 7, tagId: 18 },
    { courseId: 8, tagId: 19 },
    { courseId: 8, tagId: 20 },
    { courseId: 8, tagId: 21 },
    { courseId: 10, tagId: 22 },
    { courseId: 10, tagId: 23 },
    { courseId: 10, tagId: 4 },
    { courseId: 10, tagId: 24 },
    { courseId: 11, tagId: 22 },
    { courseId: 11, tagId: 23 },
    { courseId: 11, tagId: 24 },
    { courseId: 11, tagId: 25 },
    { courseId: 11, tagId: 26 },
    { courseId: 12, tagId: 22 },
    { courseId: 12, tagId: 23 },
    { courseId: 12, tagId: 4 },
    { courseId: 12, tagId: 24 },
    { courseId: 12, tagId: 25 },
    { courseId: 12, tagId: 27 },
  ],
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { tags, courses } = data;

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCourses = courses
    .filter((course) => {
      const tag = tags.find((tag) => tag.id === course.tagId);
      return tag.tag === selectedCategory;
    })
    .map((course) => course.courseId);

  return (
    <div>
      <h2>Select a category:</h2>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">Select a category</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.tag}>
            {tag.tag}
          </option>
        ))}
      </select>

      <h2>Courses in {selectedCategory}:</h2>
      <ul>
        {filteredCourses.map((courseId) => (
          <li key={courseId}>Course ID: {courseId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
