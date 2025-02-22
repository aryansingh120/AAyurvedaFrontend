import React, { useState } from "react";

const OrderAddress = () => {
  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    addressType: "home",
  });
  const [pincodeValid, setPincodeValid] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    
    if (name === "pincode") {
      setPincodeValid(/^[1-9][0-9]{5}$/.test(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Saved:", address);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-orange-500">Enter Your Address</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={address.fullName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={address.mobile}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={address.street}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={address.pincode}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        {pincodeValid !== null && (
          <p className={`text-sm ${pincodeValid ? "text-green-500" : "text-red-500"}`}>
            {pincodeValid ? "Pincode is valid" : "Invalid Pincode"}
          </p>
        )}
        <input
          type="text"
          name="landmark"
          placeholder="Landmark (Optional)"
          value={address.landmark}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="flex space-x-4 mt-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="addressType"
              value="home"
              checked={address.addressType === "home"}
              onChange={handleChange}
              className="form-radio text-orange-500"
            />
            <span>Home</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="addressType"
              value="office"
              checked={address.addressType === "office"}
              onChange={handleChange}
              className="form-radio text-orange-500"
            />
            <span>Office</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="addressType"
              value="other"
              checked={address.addressType === "other"}
              onChange={handleChange}
              className="form-radio text-orange-500"
            />
            <span>Other</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Save Address and Make Payment
        </button>
      </form>
    </div>
  );
};

export default OrderAddress;
