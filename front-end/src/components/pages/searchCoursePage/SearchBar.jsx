// import React, { useState, useEffect } from 'react';
// import CourseSection from '../../courseBox/CourseSection';
// import './searchBar.css';

// function SearchBar() {
//   const [query, setQuery] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [results, setResults] = useState([]);

//   const highlightMatch = (title) => {
//     const index = title.toLowerCase().indexOf(query.toLowerCase());
//     if (index !== -1) {
//       return (
//         <>
//           {title.substring(0, index)}
//           <span className="highlight">{title.substring(index, index + query.length)}</span>
//           {title.substring(index + query.length)}
//         </>
//       );
//     }
//     return title;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!query) {
//         setResults([]);
//         return;
//       }

//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`http://localhost:8081/api/search?query=${query}`, {
//           credentials: 'include'
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();
//         setResults(data);
//       } catch (error) {
//         setError('Error searching courses. Please try again later.');
//         console.error('Error searching courses:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [query]);

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search courses..."
//       />
  
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
  
//       {query && results.length === 0 && <p>No results found.</p>}
  
//       {results.length > 0 && (
//         <div className="result-box">
//           <ul>
//             {results.map((result) => (
//               <li key={result.courseID} onClick={() => setQuery(result.title)}>
//                 {highlightMatch(result.title)}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
  
//       <CourseSection searchQuery={query} />
//     </div>
//   );
// }

// export default SearchBar;