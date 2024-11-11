// Register.js

import React from 'react';

function Register() {
    return (
        <div className="auth-container">
            <h2>Sign up</h2>
            <div className="form-group">
                <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Confirm Password" />
            </div>
            <button className="auth-button">Register</button>
            <div className="link">
                <a href="/login">I am already a member</a>
            </div>
        </div>
    );
}

export default Register;
