import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useEffect, useState } from "react";
import "../App.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/olx-logo-vector-black.png";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import {
  faAngleRight,
  faCar,
  faMotorcycle,
  faConciergeBell,
  faBriefcase,
  faDog,
  faCouch,
  faShirt,
  faGuitar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AddCards from "./AddCards";
import store from "../Redux/store";


const Sell = () => {

  const categoryArr = ['Mobiles']
  const [category, setcategory] = useState("Mobile");
  const [subCategory , setsubCategory] = useState("Phones")
  const [track , settrack] = useState("")

  store.dispatch({
    type:"CATEGORY_ADDED",
    payload:{
      category:category,
      subcategory:subCategory
    }
  })

  const mobilePage = (categories) => {
    setcategory(categories);
    if (category === "Mobiles") {
      console.log("Its Working");
      console.log(store.getState())
    }
    console.log(category);
    console.log(subCategory);
  };
function subCategoryFunc(subCategories){
   setsubCategory(subCategories);
    console.log(subCategories)
    console.log(subCategory)
  }

  return (
    <div className="sellDiv">
      <div className="sellTop">
        <Link to="/">
        <FontAwesomeIcon className="back" icon={faArrowLeft}></FontAwesomeIcon>
        <img src={logo}></img>
        </Link>
      </div>
      <div className="sellh2">
        <h1>POST YOUR AD</h1>
      </div>
      <div className="content">
        <div className="adsCategory">
          <div className="adsh1">
            <h1>Choose a Category</h1>
          </div>
          <div
            className="sellCategory"
            onClick={() => {
              mobilePage("Mobiles");
            }}
          >
            <FontAwesomeIcon
              className="mobileIcon"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
            <h4 className="mobiles">Mobiles</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div
            className="sellCategory"
            onClick={() => {
              mobilePage("Vehicles");
            }}
          >
            <FontAwesomeIcon className="carIcon" icon={faCar}></FontAwesomeIcon>
            <h4 className="vehicles">Vehicles</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div
            className="sellCategory"
            onClick={() => {
              mobilePage("Sale");
            }}
          >
            <FontAwesomeIcon
              className="mobileIcon"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
            <h4 className="sale">Property for Sale</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
          onClick={() => {
            mobilePage("Rent");
          }}>
            <FontAwesomeIcon
              className="mobileIcon"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
            <h4 className="rent">Property for Rent</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
          onClick={() => {
            mobilePage("Electronics");
          }}>
            <FontAwesomeIcon
              className="mobileIcon"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
            <h4 className="elecronic">Electronics & Home Appliances</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Bikes");
          }}>
            <FontAwesomeIcon
              className="mobileIcon faBikes"
              icon={faMotorcycle}
            ></FontAwesomeIcon>
            <h4 className="bikes">Bikes</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Bussiness");
          }}>
            <FontAwesomeIcon
              className="mobileIcon"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
            <h4 className="bussiness">Bussiness, Industrial & Agriculture</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Services");
          }}>
            <FontAwesomeIcon
              className="mobileIcon faService"
              icon={faConciergeBell}
            ></FontAwesomeIcon>
            <h4 className="services">Services</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Jobs");
          }}>
            <FontAwesomeIcon
              className="mobileIcon faJobs"
              icon={faBriefcase}
            ></FontAwesomeIcon>
            <h4 className="jobs">Jobs</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Animals");
          }}>
            <FontAwesomeIcon
              className="mobileIcon faAnimals"
              icon={faDog}
            ></FontAwesomeIcon>
            <h4 className="animals">Animals</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Furniture");
          }}>
            <FontAwesomeIcon
              className="mobileIcon faCouch"
              icon={faCouch}
            ></FontAwesomeIcon>
            <h4 className="furniture">Furniture & Home Decor</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Fashion");
          }}>
            <FontAwesomeIcon
              className="mobileIcon faShirt"
              icon={faShirt}
            ></FontAwesomeIcon>
            <h4 className="fashion">Fashion & Beauty</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Books");
          }}>
            <FontAwesomeIcon
              className="mobileIcon faGuitar"
              icon={faGuitar}
            ></FontAwesomeIcon>
            <h4 className="books">Books, Sports & Hobbies</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
          <div className="sellCategory"
           onClick={() => {
            mobilePage("Kids");
          }}>
            <FontAwesomeIcon
              className="mobileIcon"
              icon={faMobileScreenButton}
            ></FontAwesomeIcon>
            <h4 className="kids">Kids</h4>
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
            ></FontAwesomeIcon>
          </div>
        <div className="second">
           {
               categoryArr.map((val)=>{
                   if(category === "Mobiles"){
                       return(
                           <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                               <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Tablets');
                               }}><h4>Tablets</h4></div></Link>
                               <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Accessories');
                               }}><h4>Accessories</h4></div></Link>
                               <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Mobile Phones');
                               }}><h4>Mobile Phones</h4></div></Link>
                           </div> 
                       )
                   }
                   else if(category === "Vehicles"){
                       return(
                        <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Cars');
                               }}><h4>Cars</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Cars on Installment');
                               }}><h4>Cars on Installment</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Cars Accessories');
                               }}><h4>Cars Accessories</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Spare Parts');
                               }}><h4>Spare Parts</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Buses, Vans & Trucks');
                               }}><h4>Buses, Vans & Trucks</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Rickshaw & Chingchi');
                               }}><h4>Rickshaw & Chingchi</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Vehicles');
                               }}><h4>Other Vehicles</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Boats');
                               }}><h4>Boats</h4></div></Link>
                        <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Tractors & Trailers');
                               }}><h4>Tractors & Trailers</h4></div></Link>
                    </div>
                       )
                   }
                   else if(category === "Sale"){
                     return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Lands & Plots');
                               }}><h4>Lands & Plots</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Houses');
                               }}><h4>Houses</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Apartments & Flats');
                               }}><h4>Apartments & Flats</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Shops - Offices - Commercial Space');
                               }}><h4>Shops - Offices - Commercial Space</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Portions & Floors');
                               }}><h4>Portions & Floors</h4></div></Link>
                  </div>
                     )
                   }

                   else if(category === "Rent"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Houses')
                               }}><h4>Houses</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Apartments & Flats')
                               }}><h4>Apartments & Flats</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Portions & Floors')
                               }}><h4>Portions & Floors</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Shops - Offices - Commercial Space')
                               }}><h4>Shops - Offices - Commercial Space</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Rooms')
                               }}><h4>Rooms</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Roommates & Paying Guests')
                               }}><h4>Roommates & Paying Guests</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Vacation Rentals & Guest Houses')
                               }}><h4>Vacation Rentals & Guest Houses</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Lands & Plots')
                               }}><h4>Lands & Plots</h4></div></Link>
                  </div>
                      )
                   }
                   else if(category === "Electronics"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Computers & Accessories')
                               }}><h4>Computers & Accessories</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('TV - Video - Audio')
                               }}><h4>TV - Video - Audio</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Cameras & Accessories')
                               }}><h4>Cameras & Accessories</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Games & Entertainment')
                               }}><h4>Games & Entertainment</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Home Appliances')
                               }}><h4>Other Home Appliances</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Generators, UPS & Power Solutions')
                               }}><h4>Generators, UPS & Power Solutions</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Kitchen Appliances')
                               }}><h4>Kitchen Appliances</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('AC & Coolers')
                               }}><h4>AC & Coolers</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Fridges & Freezers')
                               }}><h4>Fridges & Freezers</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Washing Machines & Dryers')
                               }}><h4>Washing Machines & Dryers</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Bikes"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Motorcycles')
                               }}><h4>Motorcycles</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Spare Parts')
                               }}><h4>Spare Parts</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Bicycles')
                               }}><h4>Bicycles</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('ATV & Quads')
                               }}><h4>ATV & Quads</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Scooters')
                               }}><h4>Scooters</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Bussiness"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Business for Sale')
                               }}><h4>Business for Sale</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Food & Restaurants')
                               }}><h4>Food & Restaurants</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Trade & Industrial')
                               }}><h4>Trade & Industrial</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Construction & Heavy Machinery')
                               }}><h4>Construction & Heavy Machinery</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Agriculture')
                               }}><h4>Agriculture</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Business & Industry')
                               }}><h4>Other Business & Industry</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Medical & Pharma')
                               }}><h4>Medical & Pharma</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Services"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Education & Classes')
                               }}><h4>Education & Classes</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Travel & Visa')
                               }}><h4>Travel & Visa</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Car Rental')
                               }}><h4>Car Rental</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Drivers & Taxi')
                               }}><h4>Drivers & Taxi</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Web Development')
                               }}><h4>Web Development</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Services')
                               }}><h4>Other Services</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Electronics & Computer Repair')
                               }}><h4>Electronics & Computer Repair</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Event Services')
                               }}><h4>Event Services</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Health & Beauty')
                               }}><h4>Health & Beauty</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Maids & Domestic Help')
                               }}><h4>Maids & Domestic Help</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Movers & Packers')
                               }}><h4>Movers & Packers</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Home & Office Repair')
                               }}><h4>Home & Office Repair</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Catering & Restaurant')
                               }}><h4>Catering & Restaurant</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Farm & Fresh Food')
                               }}><h4>Farm & Fresh Food</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Jobs"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Online')
                               }}><h4>Online</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Marketing')
                               }}><h4>Marketing</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Advertising & PR')
                               }}><h4>Advertising & PR</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Education')
                               }}><h4>Education</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Customer Service')
                               }}><h4>Customer Service</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Sales')
                               }}><h4>Sales</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('IT & Networking')
                               }}><h4>IT & Networking</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Hotels & Tourism')
                               }}><h4>Hotels & Tourism</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Clerical & Administration')
                               }}><h4>Clerical & Administration</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Human Resources')
                               }}><h4>Human Resources</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Accounting & Finance')
                               }}><h4>Accounting & Finance</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Manufacturing')
                               }}><h4>Manufacturing</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Medical')
                               }}><h4>Medical</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Part - Time')
                               }}><h4>Part - Time</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Animals"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Fish & Aquariums')
                               }}><h4>Fish & Aquariums</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Birds')
                               }}><h4>Birds</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Hens & Aseel')
                               }}><h4>Hens & Aseel</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Cats')
                               }}><h4>Cats</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Dogs')
                               }}><h4>Dogs</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Livestock')
                               }}><h4>Livestock</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Horses')
                               }}><h4>Horses</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Pet Food & Accessories')
                               }}><h4>Pet Food & Accessories</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Animals')
                               }}><h4>Other Animals</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Furniture"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Sofa & Chairs')
                               }}><h4>Sofa & Chairs</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Beds & Wardrobes')
                               }}><h4>Beds & Wardrobes</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Home Decoration')
                               }}><h4>Home Decoration</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Tables & Dining')
                               }}><h4>Tables & Dining</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Garden & Outdoor')
                               }}><h4>Garden & Outdoor</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Painting & Mirrors')
                               }}><h4>Painting & Mirrors</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Rugs & Carpets')
                               }}><h4>Rugs & Carpets</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Curtains & Blinds')
                               }}><h4>Curtains & Blinds</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Office Furniture')
                               }}><h4>Office Furniture</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Household Items')
                               }}><h4>Other Household Items</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Fashion"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Accessories')
                               }}><h4>Accessories</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Clothes')
                               }}><h4>Clothes</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Footwear')
                               }}><h4>Footwear</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Jewellery')
                               }}><h4>Jewellery</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Make Up')
                               }}><h4>Make Up</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Skin & Hair')
                               }}><h4>Skin & Hair</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Watches')
                               }}><h4>Watches</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Wedding')
                               }}><h4>Wedding</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Lawn & Pret')
                               }}><h4>Lawn & Pret</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Couture')
                               }}><h4>Couture</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Fashion')
                               }}><h4>Other Fashion</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Books"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Books & Magazines')
                               }}><h4>Books & Magazines</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Musical Instruments')
                               }}><h4>Musical Instruments</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Sports Equipment')
                               }}><h4>Sports Equipment</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Gym & Fitness')
                               }}><h4>Gym & Fitness</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Other Hobbies')
                               }}><h4>Other Hobbies</h4></div></Link>
                  </div>
                      )
                  }
                  else if(category === "Kids"){
                    return(
                      <div className="secondCat" key={Math.floor(Math.random()*987654321)}>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Kids Furniture')
                               }}><h4>Kids Furniture</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Toys')
                               }}><h4>Toys</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Prams & Walkers')
                               }}><h4>Prams & Walkers</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Swings & Slides')
                               }}><h4>Swings & Slides</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}} ><div className="cats" onClick={()=>{
                                 subCategoryFunc('Kids Bikes')
                               }}><h4>Kids Bikes</h4></div></Link>
                      <Link to="/sell/attributes" style={{textDecoration:"none"}}><div className="cats" onClick={()=>{
                                 subCategoryFunc('Kids Accessories')
                               }}><h4>Kids Accessories</h4></div></Link>
                  </div>
                      )
                  }
               })
           }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
