import React, { useContext, useEffect, useState } from 'react';
import { getCoursesFromServer, updateCourseOnServer } from "../../services/course-service";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminCourse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const [expandedDescription, setExpandedDescription] = useState({});
    const [hiddenCourses, setHiddenCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseData = await getCoursesFromServer();
                setCourses(courseData.data);
                setLoading(false); // Update coursesLoading after fetching data
                const hiddenCourseIds = courseData.data.filter(course => course.hidden).map(course => course.id);
            setHiddenCourses(hiddenCourseIds);
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

    const toggleCourseVisibility = async (courseId) => {
        try {
            const updatedCourses = [...courses];
            const courseIndex = updatedCourses.findIndex(course => course.id === courseId);
            const course = updatedCourses[courseIndex];

            const isHidden = hiddenCourses.includes(courseId);
            await updateCourseOnServer(courseId, {
                ...course,
                hidden: !isHidden // Toggle hidden status
            });

            if (isHidden) {
                setHiddenCourses(hiddenCourses.filter(id => id !== courseId));
            } else {
                setHiddenCourses([...hiddenCourses, courseId]);
            }

            setCourses(updatedCourses);
        } catch (error) {
            console.error("Error toggling course visibility:", error);
        }
    }

    // If user is admin, show admin page content
    return (
        <div>
            <div>
                <Link to={"/admin"}>
                <button className='button'>← Go back</button>
                </Link>   
            </div>
            <h1>COURSES</h1>
            <p>This is all the current courses availabe in Learniverse Connect. All visible and hidden courses are listed in the table below. 
                Hidden courses is marked with a purple background and has a "unhide" button to make it visible. The visible courses has a "hide"
                button to hide the specific course. You can easily change whether you want to hide or unhide a each induvidual course.
                To read full description of a course, click on the description section. </p>
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
                            <tr key={course.id} className={hiddenCourses.includes(course.id) ? 'hidden' : ''}>
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
                                        <div>
                                            <button 
                                                className='button' 
                                                onClick={() => toggleCourseVisibility(course.id)}
                                            >
                                                {hiddenCourses.includes(course.id) ? 'Unhide' : 'Hide'}
                                            </button>
                                        </div>
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
