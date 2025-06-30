import React from 'react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth_container">
      <div className="auth_card">
        <h2>Login</h2>
        <form className="auth_form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
