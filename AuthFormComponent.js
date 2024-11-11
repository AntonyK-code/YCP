import React, { useState } from 'react';
import { auth } from './firebase'; // Ensure Firebase is configured in this file
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './AuthForm.css';

function AuthForm({ onAuthSuccess }) {
  const [isRegistering, setIsRegistering] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
    setError('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
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
    <div className="auth-container">
      <h2>{isRegistering ? "Sign up" : "Login"}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin} className="auth-form">
        {isRegistering && (
          <div className="input-group">
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
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
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
  );
}

export default AuthForm;
