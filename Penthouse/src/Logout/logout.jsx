import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css";
function Logout() {
 
  const navigate2 = useNavigate();
   const actionx =() =>{
    localStorage.clear();
    navigate2("/login");
   };
  return (
    <div className="logoutContainer">
        <div className="logoutHeading">
                     <h2> You have succesfully logged out!</h2>
                     </div>
                     <div className="loginback">
                        <button className="loginback" onClick={actionx} >Click to Sign In</button>
                     </div>
                     </div>

         
  );
}

export default Logout;
