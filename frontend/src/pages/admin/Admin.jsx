import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Unauthorized from '../error/unauthorized/401';

function AdminPage() {
    const auth = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(auth.user) // Check if user have been loaded
        // Check if the user has the admin role
        if (auth.user && auth.user.roles && Array.isArray(auth.user.roles)) {
            console.log("User roles:", auth.user.roles);
            const isAdmin = auth.user.roles.some(role => role.authority === 'Admin');
            console.log("Is admin:", isAdmin);
            setIsAdmin(isAdmin);
        }
        setLoading(false);
    }, [auth.user]);

    if (loading) {
        return <div>Loading...</div>;
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
            <h1>Welcome Admin!</h1>
            {/* Admin page content */}
        </div>
    );
}

export default AdminPage;
