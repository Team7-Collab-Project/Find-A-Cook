import React from "react";

const InfoSection = () => {
    const workInfoData = [
      {
        image:"./images/appImage.png",
        title: "Pick Meals",
        text: "Order delicious meals with just a few taps.",
      },
      {
        image:"./images/cookPot.png",
        title: "Fresh Meals",
        text: "Experience the freshest, tastiest meals with our at home service. ",
      },
      {
        image:"./images/family.png",
        title: "From Kitchen to Table",
        text: "Elevate your family meals with the expertise of a private cook.",
      },
    ];
    return (
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">How It Works</h1>
          <p className="primary-text">
          Browse through our menu and select the meals you'd like to order.
          Place your order through our website. You can choose your desired date and time through our booking system,
          as well as any special instructions or dietary requirements.

          Our cooks use the freshest ingredients to prepare your meals in your kitchen. We prioritize quality, 
          taste, and presentation to ensure that every meal is up to our high standards.

          Once you receive your meals, all that's left to do is sit back, relax, and savor every bite of our delicious, cook-prepared food.
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" className="infoImg"/>
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InfoSection;