import React, { useState } from "react";
import axios from "axios";

import "./Styles/Signup.css";

const Signup = () => {
  const [successMsg, setsuccessMsg] = useState(null);
  const [errMsg, seterrMsg] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/signup", formData)
      .then((response) => {
        console.log(response);
        setsuccessMsg("Successfully Signed Up!");
        setTimeout(() => {
          setsuccessMsg(null);
        }, 3000)
      })
      .catch((error) => {
        seterrMsg(error.response.data.error);
        setTimeout(() => {
          seterrMsg(null);
        }, 3000);
        console.error("Signup error:", error);
      });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="roles">Role:</label>
            <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="role"
                value="customer"
                checked={formData.role === "customer"}
                onChange={handleChange}
              />
              Customer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === "admin"}
                onChange={handleChange}
              />
              Admin
            </label>
          </div>
          </div>
          <button type="submit" className="button btn-primary">
            Sign Up
          </button>
        </form>
        {successMsg && <div className="success-message">{successMsg}</div>}
        {errMsg && <div className="error-message">{errMsg}</div>}
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
