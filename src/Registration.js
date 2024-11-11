// Registration.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Registration = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        ageConfirmation: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.ageConfirmation) {
            console.log('Form submitted:', form);
            navigate('/login');
        } else {
            alert('Please confirm you are within the age range and agree to the terms.');
        }
    };

    return (
        <div className="form-section">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group age-confirmation">
                    <label>
                        <input
                            type="checkbox"
                            name="ageConfirmation"
                            checked={form.ageConfirmation}
                            onChange={handleChange}
                            required
                        />
                        I confirm that I am between 15-24 years old and agree to all statements in the <a href="#">Terms of service</a>.
                    </label>
                </div>
                <button type="submit">Register</button>
                <p className="login-link">
                    <a href="#" onClick={() => navigate('/login')}>I am already a member</a>
                </p>
            </form>
        </div>
    );
};

export default Registration;
