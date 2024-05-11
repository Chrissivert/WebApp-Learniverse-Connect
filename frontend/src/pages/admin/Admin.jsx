import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

function AdminPage() {
    const auth = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if the user has the admin role
        if (auth.user && auth.user.roles && auth.user.roles.includes('ADMIN')) {
            setIsAdmin(true);
        }
        setLoading(false);
    }, [auth.user]);

    if (loading) {
        return <div>Loading...</div>;
    }


    // If user is not admin, show unauthorized page
    if (!isAdmin) {
        return (
            <div>
                <h1>Unauthorized Access</h1>
                <p>You do not have permission to access this page.</p>
            </div>
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
