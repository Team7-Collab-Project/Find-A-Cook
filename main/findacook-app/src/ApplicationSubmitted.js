import React from "react";

const ApplicationSubmitted = () => {
  return (
    <>
      <div className="successBody">
        <div
          className="successCard"
          style={{
            backgroundImage: "url('./images/success.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>Submittion Successful!</h2>
          <p>Your application has been submitted and will be reviewed shortly.
             Within 3 - 5 business days, you should recieve an email with the results of
             your application.
          </p>
          <div className="applicationButton">
            <a href="/"><button className="applicationBtn">Return To Homepage</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationSubmitted;
