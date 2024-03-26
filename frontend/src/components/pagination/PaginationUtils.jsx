export function paginationUtils(data, currentPage, perPage) {
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / perPage);

  return {
    paginatedData,
    totalPages
  };
}
