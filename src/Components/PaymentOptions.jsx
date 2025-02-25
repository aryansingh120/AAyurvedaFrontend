import React, { useState,useEffect } from "react";
import { FaGooglePay, FaCcVisa, FaUniversity, FaWallet, FaMoneyBillWave } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { useLocation } from "react-router-dom";

const PaymentOptions = () => {
  let location=useLocation();
    let path=location.pathname;
    
        useEffect(()=>{
            window.scrollTo(0,0)

        },[path])
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const paymentMethods = [
    { id: "upi", label: "Google Pay", icon: <FaGooglePay className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-green-500 text-2xl" /> },
    { id: "phonepe", label: "PhonePe", icon: <SiPhonepe className="text-purple-600 text-2xl" /> },
    { id: "paytm", label: "Paytm", icon: <SiPaytm className="text-blue-500 text-2xl" /> },
    { id: "card", label: "Credit/Debit Card", icon: <FaCcVisa className="text-indigo-600 text-2xl" /> },
    { id: "netbanking", label: "Net Banking", icon: <FaUniversity className="text-green-600 text-2xl" /> },
    { id: "wallet", label: "Wallets", icon: <FaWallet className="text-orange-500 text-2xl" /> },
    { id: "cod", label: "Cash on Delivery (COD)", icon: <FaMoneyBillWave className="text-yellow-500 text-2xl" /> },
  ];

  const handleProceed = () => {
    if (!selectedOption) {
      setError("Please select a payment method before proceeding.");
    } else {
      setError("");
      alert(`Proceeding with payment method: ${selectedOption}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-orange-500 text-center">Select Payment Method</h2>
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <label key={method.id} className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${selectedOption === method.id ? 'bg-gray-100 border border-orange-500' : 'bg-white border border-gray-300'}`}>
            <div className={`w-5 h-5 flex items-center justify-center rounded-full border ${selectedOption === method.id ? 'bg-blue-500 border-blue-500' : 'border-gray-400'}`}>
              {selectedOption === method.id && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
            </div>
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedOption === method.id}
              onChange={() => setSelectedOption(method.id)}
              className="hidden"
            />
            <span className="text-lg flex items-center space-x-3">
              {method.icon}
              <span className="font-medium text-gray-700">{method.label}</span>
            </span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      <button
        onClick={handleProceed}
        className="w-full bg-orange-500 text-white py-3 rounded mt-6 hover:bg-orange-600 transition duration-200 ease-in-out transform hover:scale-105"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default PaymentOptions;
