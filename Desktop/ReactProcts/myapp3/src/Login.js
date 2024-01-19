import React, { useState } from 'react'
import './Login.css'

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        //console.log('Login form submitted:', formData);
        alert("Logged in successfully!",formData);
      };
  return (
    <div>
        <h1 className="myhead">Welcome Come to Online Gift Shop!! </h1>
    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
    <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  )
}