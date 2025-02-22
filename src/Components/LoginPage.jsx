import React, { useState } from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  // 🔍 Validation Function
  const validate = () => {
    const newErrors = {};

    if (!credentials.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!credentials.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  // 🔑 Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({});
    setServerError('');

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://aayurveda-hn8w.onrender.com/user/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("✅ Login successful");
        alert("Login successful");

        // 🟢 Token ko localStorage me store karna
        localStorage.setItem("authToken", data.token);
        console.log(data.token);
        

        navigate("/"); // ✅ Redirect only on success
      } else {
        throw new Error(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.log("❌ Error:", error.message);
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-4">Welcome to Aayurveda</h1>
        <p className="text-center mb-6">Log into Aayurveda to continue browsing.</p>

        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Email or Phone" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          {errors.password && <p className="text-red-500 text-sm mb-3">{errors.password}</p>}

          <button 
            type="submit" 
            className={`w-full text-white py-3 font-bold border border-gray-300 ${
              loading ? "bg-gray-500" : "bg-orange-500"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Continue"}
          </button>

          {serverError && <p className="text-red-500 text-sm mt-3">{serverError}</p>}
        </form>

        <p className="text-center text-blue-500 mt-3 cursor-pointer">Forgot Password?</p>

        <button 
          className="w-full bg-white text-orange-500 py-3 font-bold border border-orange-500 mt-4"
          onClick={() => navigate("/signup")}
        >
          Signup
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

export default LoginPage;
