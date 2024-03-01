// YourComponent.js

import React, { useState, useEffect } from 'react';

const YourComponent = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/api/courses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCourses(data);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course}>{course}</li>
                ))}
            </ul>
        </div>
    );
};

export default YourComponent;
