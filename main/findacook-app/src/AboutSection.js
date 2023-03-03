import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const AboutSection = () => {
  return (
    <>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img
            className="landingImg"
            src="./images/about-background-image.png"
          />
        </div>
        <div className="about-section-image-container">
          <img className="landingImg2" src="./images/about-image.png" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">
            Bring the Restaurant to your Doorstep
          </h1>
          <p className="primary-text">
            At Find A Cook, we believe that a great meal can transport you to
            another place and time. That's why we offer the ultimate culinary
            experience right in the comfort of your own home. Our team of
            talented chefs specializes in both local and foreign cuisine, using
            only the freshest ingredients to create dishes that are sure to
            delight your taste buds.
          </p>
          <p className="primary-text">
            Whether you're in the mood for a classic Italian pasta dish, a spicy
            Thai curry, or a traditional Nigerian stew, we've got you covered.
            We work with you to craft a personalized menu that fits your unique
            taste preferences and dietary needs. And, because we come to your
            home, you get to enjoy the convenience of restaurant-quality food
            without the hassle of leaving your house.
          </p>
          <p className="primary-text">
            Give it a try yourself and <strong>Sign Up Today!</strong>
          </p>
          <div className="about-buttons-container">
            <a className="signUpButton" href="/register">
              <button className="secondary-button">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
