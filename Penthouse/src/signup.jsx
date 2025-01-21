import React, { useState } from "react";
import "./signup.css"; 
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
 const navigate=useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password},Phone: ${phone}`);
  
  };
  const toLogin =()=>{
    navigate("/login")
  };

  return (
    <div className="container">
    
    <div className="right">
      <div>
      <h1 className="welcome-text1">
      Already an user?
      </h1>
      </div>
      <div className="welcome-text2">
      Log in to access your account and continue where you left off !
      </div>
      <button className="sign-up" onClick={toLogin}>SIGN IN</button>
    </div>
    <div className="left">
      <h1 className="heading">Sign up</h1>
      <form onSubmit={handleLogin} className="form">
        <div className="input-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
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
            className="input"
            placeholder="Password"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            min="0"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            placeholder="+91"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input"
            placeholder="Address"
            required
          />
        </div>
    
      
        <button type="submit" className="button">
          SIGN UP
        </button>
      </form>
  
    </div>
    </div>
  );
}

export default Signup;
