import React from "react";
import "./Banner.css"; 

const Banner = ({ score }) => {
  return (
    <div className="banner-container">
      <p className="banner-text">
        You have answered {score} / 5 &nbsp;Correctly
      </p>
    </div>
  );
};

export default Banner;
