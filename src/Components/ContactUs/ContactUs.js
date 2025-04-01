import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="highlighted">Better yet, see us in person!</p>
      <p>CONTACT : JAGADEESH CG</p>
      <a className='whatsapp'
        href="https://wa.me/7010307436"
        target="_blank"
        rel="noopener noreferrer"
      >
        Message us on whatsapp
      </a>
      <p>Uthukkottai, Thiruvallur district, 602026</p>
    </div>
  );
};

export default ContactUs;
