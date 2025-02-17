import React, { useState } from "react";

const VerifyOtp = () => {
    const [otp, setOtp] = useState(""); // ✅ Null ki jagah empty string

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://aayurveda-1.onrender.com/user/verifyOtp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ otp }),
            });
    
            // ✅ Check response format first
            const contentType = response.headers.get("content-type");
    
            let data;
            if (contentType && contentType.includes("application/json")) {
                data = await response.json(); // ✅ If JSON, parse it
            } else {
                data = await response.text(); // ✅ If plain text, read as text
            }
    
            console.log("Server Response:", data);
    
            if (response.ok) {
                alert("OTP verified successfully");
            } else {
                throw new Error(data.message || data || "OTP verification failed");
            }
        } catch (error) {
            console.error("Error:", error.message);
            alert("Error: " + error.message);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                />
                <button type="submit">Verify</button>
            </form>
        </div>
    );
};

export default VerifyOtp;
