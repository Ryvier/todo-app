import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className="login-form">
      <label>
        Username:
        <input type="text" name="username" className="login-input" />
      </label>
      <label>
        Password:
        <input type="password" name="password" className="login-input" />
      </label>
      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default LoginForm;
