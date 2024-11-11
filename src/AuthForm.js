import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './AuthForm.css';

function AuthForm({ onAuthSuccess }) {
    const [isRegistering, setIsRegistering] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
    const [isTermsConfirmed, setIsTermsConfirmed] = useState(false);
    const [error, setError] = useState('');

    const handleToggle = () => {
        setIsRegistering(!isRegistering);
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsAgeConfirmed(false);
        setIsTermsConfirmed(false);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (!isAgeConfirmed) {
            setError("You must confirm you are between 15 and 24 years old.");
            return;
        }
        if (!isTermsConfirmed) {
            setError("You must agree to the terms of service.");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onAuthSuccess();
            alert("Registration successful!");
        } catch (error) {
            setError("Error creating account. Please try again.");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onAuthSuccess();
            alert("Login successful!");
        } catch (error) {
            setError("Incorrect email or password.");
        }
    };

    return (
        <div className="auth-page">
            <div className="welcome-section">
                <h1>Youth Connect Platform</h1>
                <p>Welcome to the Youth Connect Platform, where young people can connect, collaborate, and create positive change in their communities.</p>
            </div>
            <div className="auth-container">
                <h2>{isRegistering ? "Sign up" : "Login"}</h2>
                <form onSubmit={isRegistering ? handleRegister : handleLogin} className="auth-form">
                    {isRegistering && (
                        <div className="input-group">
                            <span className="icon">👤</span>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="input-group">
                        <span className="icon">✉️</span>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <span className="icon">🔒</span>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {isRegistering && (
                        <div className="input-group">
                            <span className="icon">🔒</span>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    {isRegistering && (
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isAgeConfirmed}
                                    onChange={(e) => setIsAgeConfirmed(e.target.checked)}
                                />
                                I confirm that I am between 15-24 years old.
                            </label>
                        </div>
                    )}
                    {isRegistering && (
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isTermsConfirmed}
                                    onChange={(e) => setIsTermsConfirmed(e.target.checked)}
                                />
                                I agree to all statements in <a href="#">Terms of service</a>.
                            </label>
                        </div>
                    )}
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="auth-button">
                        {isRegistering ? "Register" : "Login"}
                    </button>
                </form>
                <p className="toggle-link" onClick={handleToggle}>
                    {isRegistering ? "I am already a member" : "Create a new account"}
                </p>
            </div>
        </div>
    );
}

export default AuthForm;
