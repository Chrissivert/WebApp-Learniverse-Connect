import React, { useState, useEffect } from 'react';

const YourComponent = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetch('http://localhost:8081/api/courses', {
            credentials: 'include', // Include cookies in the request
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCourses(data);
                setIsLoading(false); // Update loading state
                console.log('Courses:', data); // Log courses data
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                setIsLoading(false); // Update loading state
            });
    }, []);

    // Log courses and loading state for debugging
    console.log('Courses:', courses);
    console.log('Is loading:', isLoading);

    return (
        <div>
            <h1>Courses</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {courses.map(course => (
                        <li key={course.id}>{course.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default YourComponent;
