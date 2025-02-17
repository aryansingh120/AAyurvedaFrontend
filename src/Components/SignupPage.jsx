import React, { useState } from 'react';
import { FaWhatsapp, FaGoogle, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!details.fullName) newErrors.fullName = "Full Name is required";
    if (!details.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(details.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!details.password) newErrors.password = "Password is required";
    if (details.password !== details.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://aayurveda-1.onrender.com/user/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful");
        alert("Registration successful");
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-4">Create Account</h1>
        <p className="text-center mb-6">Sign up to Aayurveda to continue browsing.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={details.fullName}
            onChange={(e) => setDetails({ ...details, fullName: e.target.value })}
          />
          {errors.fullName && <p className="text-red-500 text-sm mb-3">{errors.fullName}</p>}
          <input 
            type="text" 
            placeholder="Email or Phone" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={details.password}
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
          />
          {errors.password && <p className="text-red-500 text-sm mb-3">{errors.password}</p>}
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={details.confirmPassword}
            onChange={(e) => setDetails({ ...details, confirmPassword: e.target.value })}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mb-3">{errors.confirmPassword}</p>}
          <button type="submit" className="w-full bg-orange-500 text-white py-3 font-bold border border-gray-300">
            Continue
          </button>
        </form>
        <button className="w-full bg-white text-orange-500 py-3 font-bold border border-orange-500 mt-4">
          Login
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex flex-col space-y-2">
          <button className="w-full border border-gray-300 text-gray-700 py-3 flex items-center justify-center">
            <FaWhatsapp className="mr-2 text-green-500 text-2xl" /> Continue with WhatsApp
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 flex items-center justify-center">
            <FcGoogle className="mr-2 text-2xl" /> Continue with Google
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 flex items-center justify-center">
            <FaFacebook className="mr-2 text-blue-700 text-2xl" /> Continue with Facebook
          </button>
        </div>
        <p className="text-center text-gray-500 mt-6 text-sm">
          By signing in, you agree to our <a href="#" className="text-orange-500">Terms and policy</a>.
        </p>
        <p className="text-center text-gray-400 text-xs mt-4">Powered by the_not_aaryan</p>
      </div>
    </div>
  );
};

export default SignupPage;
