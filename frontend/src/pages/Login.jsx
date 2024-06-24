import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [errmsg, seterrmsg] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      .post(`${process.env.BACKEND_URI}/api/auth/login`, formData)
      .then((response) => {
        console.log(response);
        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/customer");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        seterrmsg("Invalid Credentials");
        setTimeout(() => {
          seterrmsg(null);
        }, 3000);
      });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
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
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="button btn-primary">
            Login
          </button>
        </form>
        {errmsg && <p className="error-message">{errmsg}</p>}
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
