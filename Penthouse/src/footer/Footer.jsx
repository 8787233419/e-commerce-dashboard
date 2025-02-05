import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerDetails">STORE DETAILS</div>
        <div className="footerShopName">Penthouse, IIT Bombay</div>
  
        <div className="footerContact">
          <div className="footerEmail">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
              alt="Email Icon"
              className="icon"
            />
            pent@iitb.ac.in
          </div>
          <div className="footerPhone">
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
              alt="Phone Icon"
              className="icon"
            />
            +91 9876543210
          </div>
        </div>

        <div className="footerAddress">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim aliquid
          repellendus pariatur, ex odit maxime. Qui tempora expedita repellat
          aliquam nobis. Eveniet atque adipisci mollitia ducimus maiores
          excepturi voluptates esse.
        </div>
      </div>
     {/* <p> copyright &copy; DevCom Mentorship IIT Bombay </p> */}
    </footer>
  );
}
