import React, { useState } from 'react';
// import "./Loginn.css"
import "./Login.css"
const Login = () => {
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

    // <div className="login-container">
    //   <h2>Login</h2>
    //   <form>
    //     <label>Email:</label>
    //     <input type="email" name="email" required />
    //     <label>Password:</label>
    //     <input type="password" name="password" required />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
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
  );
}

export default Login;
