import React, { useState } from "react";
import "./login.css"; 
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };
  const toSignup = () => {
    navigate('/signup'); 
  };

  return (
    <div className="container1">
      <div className="left1">
      <h1 className="heading1">Sign in</h1>
      <form onSubmit={handleLogin} className="form">
        <div className="input-group">
  
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input1"
            placeholder="User ID"
            required
          />
        </div>
        <div className="input-group">
        
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input1"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="button1">
          SIGN IN
        </button>
      </form>
      <a href="/forgot-password" className="forgot-password">
        Forgot password?
      </a>
  
    </div>
    <div className="right1">
      <div>
      <h1 className="welcome-text1a">
      Create Your Account!
      </h1>
      </div>
      <div className="welcome-text2a">
      Sign up now to unlock personalized features and join our community!
      </div>
      <button className="sign-up1" onClick={toSignup}>SIGN UP</button>
    </div>
    </div>
  );
}

export default Login;