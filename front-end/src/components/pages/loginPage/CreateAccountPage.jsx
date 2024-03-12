// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function RegisterPage() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await fetch('/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, email, password }),
//             });
//             if (!response.ok) {
//                 throw new Error('Registration failed');
//             }
//             alert('Registration successful!');
//             history.push('/login'); // Redirect using React Router
//         } catch (error) {
//             console.error('Registration failed:', error);
//             setError('Registration failed. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit" disabled={loading}>Register</button>
//             </form>
//             {loading && <p>Loading...</p>}
//         </div>
//     );
// }

// export default RegisterPage;
