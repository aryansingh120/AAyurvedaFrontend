import React from 'react';
import { FaWhatsapp, FaGoogle, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-4">Welcome to Aayurveda</h1>
        <p className="text-center mb-6">Log into Aayurveda to continue browsing.</p>
        <form>
          <input 
            type="text" 
            placeholder="Email or Phone" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <p className="text-red-500 text-sm mb-3">Invalid email</p>
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <p className="text-red-500 text-sm mb-3">Invalid password</p>
          <button className="w-full bg-orange-500 text-white py-3 font-bold border border-gray-300">
            Continue
          </button>
        </form>
        <p className="text-center text-blue-500 mt-3 cursor-pointer">Forgot Password?</p>
        <Link to={"/signup"}>
        <button className="w-full bg-white text-orange-500 py-3 font-bold border border-orange-500 mt-4">
          Signup
        </button></Link>
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
