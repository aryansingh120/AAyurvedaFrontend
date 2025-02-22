import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaQuestionCircle } from "react-icons/fa";
import img1 from "../assets/india.png"
const ContactUs = () => {
  return (
    <div className=" mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 border border-gray-300">
      {/* Header Image */}
      <img 
        src={img1}
        alt="Contact Us" 
        className="w-full object-cover rounded-lg mb-6"
      />
      
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Get in touch with our team</h2>
      <p className="text-gray-600 text-center mb-6">We have the team and know-how to help you scale 10x faster.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="p-6 border rounded-lg shadow-sm text-center bg-gray-100">
          <FaEnvelope className="text-orange-500 text-3xl mx-auto mb-3" />
          <p className="text-gray-700 font-medium">Chat to sales</p>
          <span className="text-blue-600 text-sm">sales@aayurveda.com</span>
        </div>
        <div className="p-6 border rounded-lg shadow-sm text-center bg-gray-100">
          <FaEnvelope className="text-orange-500 text-3xl mx-auto mb-3" />
          <p className="text-gray-700 font-medium">Chat to support</p>
          <span className="text-blue-600 text-sm">support@aayurveda.com</span>
        </div>
        <div className="p-6 border rounded-lg shadow-sm text-center bg-gray-100">
          <FaMapMarkerAlt className="text-orange-500 text-3xl mx-auto mb-3" />
          <p className="text-gray-700 font-medium">Visit us</p>
          <span className="text-blue-600 text-sm">View on Google Maps</span>
        </div>
        <div className="p-6 border rounded-lg shadow-sm text-center bg-gray-100">
          <FaPhoneAlt className="text-orange-500 text-3xl mx-auto mb-3" />
          <p className="text-gray-700 font-medium">Call us</p>
          <span className="text-blue-600 text-sm">+91-7240429672</span>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h3>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-gray-100">
          <div className="flex items-center space-x-2">
            <FaQuestionCircle className="text-orange-500 text-xl" />
            <h4 className="text-gray-800 font-semibold">Is there a free trial available?</h4>
          </div>
          <p className="text-gray-600 mt-2">Yes, we offer a 30-day free trial with full access to all features.</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
          <div className="flex items-center space-x-2">
            <FaQuestionCircle className="text-orange-500 text-xl" />
            <h4 className="text-gray-800 font-semibold">What’s your cancellation policy?</h4>
          </div>
          <p className="text-gray-600 mt-2">You can cancel anytime without any hidden fees or obligations.</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
          <div className="flex items-center space-x-2">
            <FaQuestionCircle className="text-orange-500 text-xl" />
            <h4 className="text-gray-800 font-semibold">How do I change my account email?</h4>
          </div>
          <p className="text-gray-600 mt-2">You can update your email address from your account settings page.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
