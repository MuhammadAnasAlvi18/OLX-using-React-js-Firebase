import React from "react";
import banner from '../images/Poster.jfif'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
      <img src={banner}></img>
    </div>
    </div>
  );
};

export default Banner;
