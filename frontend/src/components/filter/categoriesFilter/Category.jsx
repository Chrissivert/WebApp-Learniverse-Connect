import DataFetcher from "../../fetcher/Datafetcher";

const createCategories = async () => {
  try {
    const tags = await DataFetcher.fetchTags();
    
    // Map tagIds directly to categories
    const tagIdToCategoryMap = {};
    tags.forEach(tag => {
      const category = getCategoryFromTag(tag.tag); // Using tag.tag to get the category
      tagIdToCategoryMap[tag.id] = category; // Map tag ID to its category
    });

    return tagIdToCategoryMap;
  } catch (error) {
    console.error('Error fetching or creating categories:', error);
    return {};
  }
};

const getCategoryFromTag = (tagName) => {
  const categoryMap = {
    // Programming Languages and Concepts
    "Java": "Programming",
    "Pyhton": "Programming", // Note the typo in Python
    "C#": "Programming",
    ".net": "Programming",
    // Database Technologies
    "SQL": "Databases",
    "MySQL": "Databases",
    "Databricks": "Databases",
    // Cloud and Infrastructure
    "Azure": "Cloud Services",
    "AWS": "Cloud Services",
    "Cloud services": "Cloud Services",
    "Administration": "Cloud Services",
    // Web Development
    "web": "Web Development",
    // SEO and Marketing
    "Keyword research and analysis": "SEO and Marketing",
    "Technical SEO optimization": "SEO and Marketing",
    "Off-page SEO strategies": "SEO and Marketing",
    "Advanced analytics and reporting": "SEO and Marketing",
    "Strategic storytelling": "SEO and Marketing",
    "Targeted engagement techniques": "SEO and Marketing",
    "Data-driven optimization": "SEO and Marketing",
    // Machine Learning and Data Science
    "Machine learning": "Machine Learning",
    "Neural networks": "Machine Learning",
    "Image processing": "Machine Learning",
    // Misc
    "Real-time programming": "Programming",
    "Data science": "Programming",
    "Multi-threading": "Programming",
    "Relational databases": "Databases"
  };

  return categoryMap[tagName] || "Other";
};


export { createCategories };
