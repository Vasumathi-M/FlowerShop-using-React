import React, { useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    
    email:'',
    password:'',
   
  })
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData(prev=>({...prev,[name]:value}))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const{email,password}=formData;
    const confirmPassword=localStorage.getItem('password')
    if(password!==confirmPassword){
      alert("Password is incorrect")
      return;
    }
    console.log(formData);
    navigate('/gallery')
   
  }
  return (
    <div className="auth_container">
      <div className="auth_card">
        <h2>Login</h2>
        <form className="auth_form" onSubmit={handleSubmit}>
          
          <input type="email" placeholder="Email" name='email' required onChange={handleChange} />
          <input type="password" placeholder="Password" name='password' required onChange={handleChange} />
          
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
