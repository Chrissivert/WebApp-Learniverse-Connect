import React, { useContext, useEffect, useState } from 'react';
import { getUsersFromServer } from "../../services/user-request";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUsersFromServer();
                setUsers(userData.data); 
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


    // If user is admin, show admin page content
    return (
        <div>
            <div>
                <Link to={"/admin"}>
                <button className='button'>Go back →</button>
                </Link>   
            </div>
            <div>
                <Link to={"/admin/user/newUser"}>
                <button className='button'>Add new user</button>
                </Link>
            </div>
            
            {/* Admin page content */}
        
            {/* Courses Table */}
            {loading ? (
                <div>Loading users...</div>
            ) : (
                <table className='userTable'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    {/* Add action buttons like Edit, Delete, etc. */}
                                    <div className="button-container">
                                        <div>
                                            <Link to={`/admin/user/updateUser/${user.id}`}>
                                            <button className="button">Edit</button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={`/admin/user/deleteUser/${user.id}`}>
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

export default AdminUser;
