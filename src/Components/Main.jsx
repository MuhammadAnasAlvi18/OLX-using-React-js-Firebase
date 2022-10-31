import React from "react";
import Top from "./Top";
import Card from "./Card";
import Search from "./Search";
import Category from "./Category";
import Banner from "./Banner";
import banner from "../images/banner.PNG";
import Footer from './Footer'
import Navbar from './Navbar'


const Main = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Banner />
      <h1 className="h1">Fresh recommendations</h1>
      <Card />
      <div className="banner-2">
        <img src={banner}></img>
      </div>
      {/* <Footer /> */}
      <div className="footer-last">
        <h2>Free Classifieds in Pakistan . © 2006-2022 OLX</h2>
      </div>
    </>
  );
};

export default Main;
