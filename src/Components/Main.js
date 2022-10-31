import React from "react";
import Top from "../Components/Top";
import Card from "../Components/Card";
import Search from "../Components/Search";
import Category from "../Components/Category";
import Banner from "../Components/Banner";
import banner from "../images/banner.PNG";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


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
