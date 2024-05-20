import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Unauthorized from '../error/unauthorized/401';
import Courses from '../courses/Courses';
import { getCoursesFromServer } from "../../services/course-service";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminPage() {
    const auth = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the user has the admin role
        if (auth.user && auth.user.roles && Array.isArray(auth.user.roles)) {
            const isAdmin = auth.user.roles.some(role => role.authority === 'ROLE_ADMIN');
            setIsAdmin(isAdmin);
        }
        setLoading(false);

    }, [auth.user]);

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
            <p>As an admin you can add, update, delete and hide/unhide courses. All visible and hidden courses are listed in the table below. To read full description of a course, click on the description section. </p>
            <hr/>
            <div className="button-container">
                <Link to={"/admin/user"}>
                    <button className='admin-button'>User →</button>
                </Link>  
                <Link to={"/admin/course"}>
                    <button className='admin-button'>Course →</button>
                </Link> 
            </div>
    
        </div>
    );
}

export default AdminPage;
