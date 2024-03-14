import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8081/public/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, userPassword}),
            });
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            alert('Registration successful!');
            // navigate('/login'); // Use navigate function for redirection
        } catch (error) {
            console.error('Registration failed:', error);
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={userPassword} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" disabled={loading}>Register</button>
            </form>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default RegisterPage;
