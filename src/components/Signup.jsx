import React, { useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData(prev=>({...prev,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const{fullName,email,password,confirmPassword}=formData;
    if(password!==confirmPassword){
      alert("Password should be same")
      return;
    }
    console.log(formData);
    navigate('/login')
    localStorage.setItem('name',formData.fullName);
    localStorage.setItem('password',formData.password);
  }
  return (
    <div className="auth_container">
      <div className="auth_card" >
        <h2>Sign Up</h2>
        <form className="auth_form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" name='fullName' required onChange={handleChange} />
          <input type="email" placeholder="Email" name='email' required onChange={handleChange} />
          <input type="password" placeholder="Password" name='password' required onChange={handleChange} />
          <input type="password" placeholder="Confirm Password" name='confirmPassword' required onChange={handleChange} />
          <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
