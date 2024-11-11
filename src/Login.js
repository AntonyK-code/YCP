// Login.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Assuming login is successful
        navigate('/dashboard');
    };

    return (
        <div className="form-section">
            <h2>Sign in</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit" className="auth-button">Login</button>
                <p className="login-link">
                    <a href="#" onClick={() => navigate('/register')}>Create a new account</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
