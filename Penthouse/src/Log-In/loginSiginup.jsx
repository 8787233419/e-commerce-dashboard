import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loginSignup.css";

function Login() {
  const [isSignUpActive, setSignUpActive] = useState(false);
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [userIDvalue, setUserIDvalue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserID = localStorage.getItem("IDofUSER");
    if (storedUserID) {
      navigate("/order");
    }
  }, [navigate]);

  const handleSignUpClick = () => {
    setSignUpActive(true);
    setPassword1("");
    setUsername1("");
  };

  const handleSignInClick = () => {
    setSignUpActive(false);
    setPassword("");
    setUsername("");
    setAddress("");
    setPhone("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${username1}, Password: ${password1}`);
  
    console.log(userIDvalue);
    setUserIDvalue(username1);
    localStorage.setItem("IDofUSER", username1);    
    navigate("/order"); // ✅ Redirect after login
  };

  return (
    <div className="outerContainer">
      <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleLogin} className="form">
            <h1 className="signupheading">Sign up</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input1" placeholder="User ID" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input1" placeholder="Password" required />
            <input type="number" min="0" value={phone} onChange={(e) => setPhone(e.target.value)} className="input1" placeholder="+91" required />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="input1" placeholder="Address" required />
            <button className="signupbutton">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin} className="form">
            <h1 className="signinheading">Sign in</h1>
            <input type="text" value={username1} onChange={(e) => setUsername1(e.target.value)} className="input11" placeholder="User ID" required />
            <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} className="input11" placeholder="Password" required />
            <a className="fgp" href="/forgot-pass">Forgot your password?</a>
            <button className="signinbutton">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Already a user?</h1>
              <p className="text2">Log in to access your account and continue where you left off!</p>
              <button className="tog" onClick={handleSignInClick} id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Create Your Account!</h1>
              <p className="text2">Sign up now to unlock personalized features and join our community!</p>
              <button className="tog" onClick={handleSignUpClick} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
