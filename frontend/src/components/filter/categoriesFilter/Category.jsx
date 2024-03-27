import DataFetcher from "../../fetcher/Datafetcher";

const createCategories = async () => {
  try {
    // Fetch tags
    const tags = await DataFetcher.fetchTags();

    // Create a map of tagIds to tags
    const tagsMap = {};
    tags.forEach(tag => {
      tagsMap[tag.tagId] = tag.tag;
    });

    // Map tagIds from courseTags to their corresponding tags and categories
    const categoriesMap = {};
    tags.forEach(tag => {
      const tagId = tag.tagId;
      const category = getCategoryFromTag(tagId); // Use tagId here
      if (!categoriesMap[category]) {
        categoriesMap[category] = [];
      }
      categoriesMap[category].push(tag);
    });

    return categoriesMap;
  } catch (error) {
    console.error('Error fetching or creating categories:', error);
    return {};
  }
};

const getCategoryFromTag = (tagId) => {
  const similarTagsMap = {
    "JAVA": "Programming",
    "MYSQL": "Databases",
    "SQL": "Databases",
  };
  return similarTagsMap[tagId] || tagId; // Use tagId here
};

export { createCategories };
