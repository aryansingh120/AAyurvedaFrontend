import React, { useState } from 'react'

const Register = () => {
    const [details,setdetails]=useState({fullName:"",email:"",password:"",confirmPassword:""});
const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
        const response = await fetch('https://aayurveda-1.onrender.com/user/signup',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(details)

            
        });
        const data= response.json();
        if(response.ok){
            console.log("Registration successfull");
        alert("Registration successfull")}
        else{
            throw new Error(data.message || "Registration failed")
        }
            
    } catch (error) {
        console.log("error:",error.message);
        
        
    }

}

  return (
    <div>
    <p>hello paras</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={details.fullName} name='' placeholder='enter your name' onChange={(e)=>{setdetails({...details,fullName:e.target.value})}}/>
        <input type="email" value={details.email} placeholder='enter your email' onChange={(e)=>{setdetails({...details,email:e.target.value})}}/>
        <input type="password" value={details.password} placeholder='enter your password' onChange={(e)=>{setdetails({...details,password:e.target.value})}}/>
        <input type="password" value={details.confirmPassword} placeholder='enter your confirmPassword' onChange={(e)=>{setdetails({...details,confirmPassword:e.target.value})}}/>
             <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
