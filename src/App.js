import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import GetInvolved from './GetInvolved';
import WhyItMatters from './WhyItMatters';
import MissionImg from './assests/Mission.png';
import VisionImg from './assests/vision.png';
import ValuesImg from './assests/values.png';
import './assests/style.css';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-5">About Us</h1>
        <div className="row">
          <Card 
            imgSrc={MissionImg}
            title="Our Mission"
            text="We are dedicated to tackling the issues of food waste and hunger simultaneously. 
                Our mission is to create a sustainable solution where surplus food can be donated to those in need. 
                We connect generous donors with orphanages and charitable homes, ensuring that no food goes to waste 
                and every meal counts. By reducing food waste and providing for the less fortunate, we strive to make 
                a meaningful impact on our community."
            imgAlt="Our Mission"
            imgPosition="left"  
          />
          <Card 
            imgSrc={VisionImg}
            title="Our Vision"
            text="Our vision is to create a world where no one has to suffer from hunger, 
                and where food waste is a thing of the past. We aim to achieve this by building a 
                community of like-minded individuals and organizations who share our passion for 
                reducing food waste and feeding the hungry. Together, we can make a difference and 
                create a better future for all."
            imgAlt="Our Vision"
            imgPosition="right"
          />
          <Card 
            imgSrc={ValuesImg}
            title="Our Values"
            text="At Food Waste Management, we believe in the importance of 
                integrity, compassion, and sustainability. We are committed to operating with 
                transparency and accountability, and to always putting the needs of our 
                beneficiaries first. We strive to be environmentally responsible and to 
                minimize our own waste and carbon footprint."
            imgAlt="Our Values"
            imgPosition="left"
          />
        </div>
        
        <HowItWorks />
        
      </div>
      <WhyItMatters />
      <GetInvolved />
      <Footer />
    </>
  );
};

export default AboutUs;
