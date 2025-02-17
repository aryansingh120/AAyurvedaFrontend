import React, { useState } from "react";

const Login = () => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://aayurveda-1.onrender.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful");
        alert("Login successful");
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={details.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={details.password}
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
