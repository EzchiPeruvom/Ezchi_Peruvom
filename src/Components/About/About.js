import React from 'react';
import "./About.css";
import about_image from "../../Images/about_image.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Ezchi Peruvom</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={about_image} alt="Helping hands" />
        </div>
        <div className="about-text">
        <p>
    At Ezchi Peruvom, we believe in spreading kindness and making a difference in people's lives. Our mission is to support those in need by providing essential resources. We assist people in old age homes, ensuring they receive proper care and companionship. We also empower underprivileged children by providing books and educational materials, believing that education is key to a brighter future. Food donation is another core initiative, where we organize food drives to ensure no one goes to bed hungry. Together, we can bring hope, spread joy, and create a positive impact in our community.
        </p>
        </div>
      </div>
      <img src="../../Images/about.img" alt="" />
    </div>
  );
}

export default About;
