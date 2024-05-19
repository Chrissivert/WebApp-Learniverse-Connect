import React, { useContext, useEffect, useState } from 'react';
import { getCoursesFromServer } from "../../services/course-service";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminCourse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const [expandedDescription, setExpandedDescription] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseData = await getCoursesFromServer();
                setCourses(courseData.data);
                setLoading(false); // Update coursesLoading after fetching data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const toggleDescription = (courseId) => {
        setExpandedDescription(prevState => ({
            ...prevState,
            [courseId]: !prevState[courseId]
        }));
    }

    // If user is admin, show admin page content
    return (
        <div>
            <div>
                <Link to={"/admin"}>
                <button className='button'>Go back →</button>
                </Link>   
            </div>
            <div>
                <Link to={"/admin/course/newCourse"}>
                <button className='button'>Add new course</button>
                </Link>
            </div>
            
            {/* Admin page content */}
        
            {/* Courses Table */}
            {loading ? (
                <div>Loading courses...</div>
            ) : (
                <table className='courseTable'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.title}</td>
                                <td 
                                    className={`description-cell ${expandedDescription[course.id] ? 'expanded' : ''}`} 
                                    onClick={() => toggleDescription(course.id)}
                                >
                                    {course.description}
                                </td>
                                <td>
                                    {/* Add action buttons like Edit, Delete, etc. */}
                                    <div className="button-container">
                                        <div>
                                            <Link to={`/admin/course/updateCourse/${course.id}`}>
                                            <button className="button">Edit</button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={`/admin/course/deleteCourse/${course.id}`}>
                                            <button className="button">Delete</button>
                                            </Link>
                                        </div>
                                        <button className='button'>Hide</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AdminCourse;
