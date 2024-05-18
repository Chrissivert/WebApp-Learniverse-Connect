import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Unauthorized from '../error/unauthorized/401';
import Courses from '../courses/Courses';
import { getCoursesFromServer } from "../../services/course-service";
import "./Admin.css";

function AdminPage() {
    const auth = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const [courses, setCourses] = useState([]);
    const [coursesLoading, setCoursesLoading] = useState(true);

    const [expandedDescription, setExpandedDescription] = useState({});
    
    useEffect(() => {
        console.log(auth.user) // Check if user have been loaded
        // Check if the user has the admin role
        if (auth.user && auth.user.roles && Array.isArray(auth.user.roles)) {
            console.log("User roles:", auth.user.roles);
            const isAdmin = auth.user.roles.some(role => role.authority === 'ROLE_ADMIN');
            console.log("Is admin:", isAdmin);
            setIsAdmin(isAdmin);
        }
        setLoading(false);

    }, [auth.user]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseData = await getCoursesFromServer();
                setCourses(courseData.data);
                setCoursesLoading(false); // Update coursesLoading after fetching data
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

    // If user is not admin, show unauthorized page
    if (!isAdmin) {
        return (
            // <div>
            //     <h1>Unauthorized Access</h1>
            //     <p>You do not have permission to access this page.</p>
            // </div>
            <Unauthorized/>
        );
    }

    // If user is admin, show admin page content
    return (
        <div>
            <h1>Welcome {auth.user.sub}</h1>
            <p>You can add, update and delete courses as well as users.</p>
            <hr/>
            <p>You can also hide courses, you dont want to show but dont want to delete either</p>
            {/* Admin page content */}
        
            {/* Courses Table */}
            {coursesLoading ? (
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
                                        <button className="button">Edit</button>
                                        <button className="button">Delete</button>
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

export default AdminPage;
