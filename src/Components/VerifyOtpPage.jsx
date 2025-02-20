import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateOtp = () => {
    if (!otp.trim()) {
      return "OTP is required";
    }
    if (!/^\d{4}$/.test(otp)) {
      return "OTP must be a 4-digit number";
    }
    return null;
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    // 🛑 Validate OTP before sending request
    const validationError = validateOtp();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://aayurveda-hn8w.onrender.com/user/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp: Number(otp) }),
      });
         console.log(response.status);
         
      const data = await response.json();
      if (response.ok) {
        console.log('✅ OTP verification successful');
        alert('OTP verification successful');
        navigate("/login"); // ✅ Redirect only if 200 response
      } else {
        throw new Error(data.message || 'OTP verification failed');
      }
    } catch (error) {
      console.log('❌ Error:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-4">Verify OTP</h1>
        <p className="text-center mb-6">Please enter the OTP sent to your phone.</p>
        
        <form onSubmit={handleVerify}>
          <input 
            type="text" 
            placeholder="Enter OTP" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button 
            type="submit" 
            className={`w-full text-white py-3 font-bold border border-gray-300 ${
              loading ? "bg-gray-500" : "bg-orange-500"
            }`}
            disabled={loading}
          >
            {loading ? "Verifying OTP..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
