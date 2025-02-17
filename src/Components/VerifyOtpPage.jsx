import React, { useState } from 'react';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();

    // Ensure OTP is a number before sending
    const otpNumber = Number(otp);
    if (isNaN(otpNumber)) {
      setError('OTP must be a number');
      return;
    }

    try {
      const response = await fetch('https://aayurveda-1.onrender.com/user/verifyOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp: otpNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('OTP verification successful');
        alert('OTP verification successful');
      } else {
        throw new Error(data.message || 'OTP verification failed');
      }
    } catch (error) {
      console.log('Error:', error.message);
      setError(error.message);
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
          <button type="submit" className="w-full bg-orange-500 text-white py-3 font-bold border border-gray-300">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
