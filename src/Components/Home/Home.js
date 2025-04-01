import React from 'react';
import "./Home.css";
// import images from "../../Images/images.jpg"

const Home = () => {
  return (
    <div>   
         <div className="banner">
          <h2>Fighting hunger,sharing,food,spreading kindness <br />
          <a href="https://wa.me/7010307436">+91-7010307436</a>
          </h2>
          <a
          href="https://wa.me/7010307436" // Replace with your WhatsApp number
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>
         </div>
    </div>

  )
}

export default Home