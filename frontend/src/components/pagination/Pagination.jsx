// Pagination.jsx

import React from 'react';
import './pagination.css'; // Ensure the path to your CSS file is correct

function Pagination({currentPage, totalPages, onPageChange }) {
  const changePage = (page) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {getPageNumbers().map((page) => (
        <button key={page} onClick={() => changePage(page)} className={currentPage === page ? 'active' : ''}>
          {page}
        </button>
      ))}
      <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
