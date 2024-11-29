import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Send login request to API
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });

      // Simulate storing the token in localStorage
      const token = response.data.token;
      console.log('Generated Token:', token); // Debugging: View the token in the console
      localStorage.setItem('token', token);

      // Redirect to users page
      navigate('/users');
    } catch (err) {
      // Handle errors, e.g., invalid credentials
      console.error(err);
      setError('Invalid login credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label className="label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
