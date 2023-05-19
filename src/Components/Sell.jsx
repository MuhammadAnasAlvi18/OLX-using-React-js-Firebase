import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useEffect, useState } from "react";
import "../App.css";
import { faArrowLeft, faBook, faBuildingColumns, faBusinessTime, faChild } from "@fortawesome/free-solid-svg-icons";
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
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import { Link , useNavigate } from "react-router-dom";
import AddCards from "./AddCards";
import store from "../Redux/store";

const Sell = () => {
  const categoryArr = ["Mobiles"];
  const [category, setcategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [thirdcategory, setThirdcategory] = useState("");
  const [track, settrack] = useState("");

  useEffect(() => {
    store.dispatch({
      type: "CATEGORY_ADDED",
      payload: {
        category: category,
        subcategory: subCategory,
        thirdcategory: thirdcategory,
      },
    });

  }, [category, subCategory]);

  // const setcategory = (categories) => {
  //   setcategory(categories);
  //   // if (category === "Mobiles") {
  //   //   console.log("Its Working");
  //   //   console.log(store.getState());
  //   // }
  //   console.log(category);
  //   console.log(subCategory);
  // };
  // function setsubCategory(subCategories) {
  //   setsubCategory(subCategories);
  //   console.log(subCategories);
  //   console.log(subCategory);
  // }

  return (
    <div className="sell_container">
      <div className="sellTop">
        <Link to={-1}>
          <FontAwesomeIcon
            className="back"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          </Link>
          <Link to="/">
          <img src={logo}></img>
          </Link>
      </div>
      <div className="sellh2">
        <h1>POST YOUR AD</h1>
      </div>
      <div className="container">
        <div className="sell-content-main">
          <h2>Choose a category</h2>
          <div className="sell-categories-main">
            <div className="row m-0">
              <div className="col-md-4 p-0">
                <div className="sell-categories sell-categories-left">
                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Mobiles");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="mobileIcon"
                        icon={faMobileScreenButton}
                      ></FontAwesomeIcon>
                      <h4 className="mobiles">Mobiles</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>
                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Vehicles");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faCar}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Vehicles</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Sale");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faBuildingColumns}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Property for Sale</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Rent");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faCar}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Property for Rent</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Electronics");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faBoltLightning}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">
                        Electronics & Home Appliances
                      </h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Bikes");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faMotorcycle}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Bikes</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Bussiness");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faBusinessTime}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">
                        Bussiness, Industrial & Agriculture
                      </h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Services");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faConciergeBell}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Services</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Jobs");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faBriefcase}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Jobs</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Animals");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faDog}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Animals</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Furniture");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faCouch}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Furniture & Home Decor</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Fashion");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faShirt}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Fashion & Beauty</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Books");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faBook}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Books, Sports & Hobbies</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>

                  <div
                    className="sell-category-div"
                    onClick={() => {
                      setcategory("Kids");
                      setThirdcategory("");
                    }}
                  >
                    <div className="sell-category-name">
                      <FontAwesomeIcon
                        className="carIcon"
                        icon={faChild}
                      ></FontAwesomeIcon>
                      <h4 className="vehicles">Kids</h4>
                    </div>
                    <FontAwesomeIcon
                      className="angleRight"
                      icon={faAngleRight}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="sell-categories sell-categories-middle">
                  {categoryArr.map((val) => {
                    if (category === "Mobiles") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onClick={() => {
                                setsubCategory("Tablets");
                              }}
                              onMouseOver={() => {
                                setsubCategory("Tablets");
                              }}
                            >
                              <h4>Tablets</h4>
                            </div>
                          </Link>
                          <div
                            className="sell-category-div"
                            onClick={() => {
                              setsubCategory("Accessories");
                              setThirdcategory("Accessories");
                            }}
                          >
                            <div className="sell-category-name">
                              {/* <FontAwesomeIcon
                                className="mobileIcon"
                                icon={faMobileScreenButton}
                              ></FontAwesomeIcon> */}
                              <h4 className="mobiles">Accessories</h4>
                            </div>
                            <FontAwesomeIcon
                              className="angleRight"
                              icon={faAngleRight}
                            ></FontAwesomeIcon>
                          </div>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onClick={() => {
                                setsubCategory("Mobile Phones");
                              }}
                              onMouseOver={() => {
                                setsubCategory("Mobile Phones");
                              }}
                            >
                              <h4>Mobile Phones</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onClick={() => {
                                setsubCategory("Smart Watches");
                              }}
                              onMouseOver={() => {
                                setsubCategory("Smart Watches");
                              }}
                            >
                              <h4>Smart Watches</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Vehicles") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Cars");
                              }}
                            >
                              <h4>Cars</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Cars on Installment");
                              }}
                            >
                              <h4>Cars on Installment</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Cars Accessories");
                              }}
                            >
                              <h4>Cars Accessories</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Spare Parts");
                              }}
                            >
                              <h4>Spare Parts</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Buses, Vans & Trucks");
                              }}
                            >
                              <h4>Buses, Vans & Trucks</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Rickshaw & Chingchi");
                              }}
                            >
                              <h4>Rickshaw & Chingchi</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Vehicles");
                              }}
                            >
                              <h4>Other Vehicles</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Boats");
                              }}
                            >
                              <h4>Boats</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Tractors & Trailers");
                              }}
                            >
                              <h4>Tractors & Trailers</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Sale") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Lands & Plots");
                              }}
                            >
                              <h4>Lands & Plots</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Houses");
                              }}
                            >
                              <h4>Houses</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Apartments & Flats");
                              }}
                            >
                              <h4>Apartments & Flats</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory(
                                  "Shops - Offices - Commercial Space"
                                );
                              }}
                            >
                              <h4>Shops - Offices - Commercial Space</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Portions & Floors");
                              }}
                            >
                              <h4>Portions & Floors</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Rent") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Houses");
                              }}
                            >
                              <h4>Houses</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Apartments & Flats");
                              }}
                            >
                              <h4>Apartments & Flats</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Portions & Floors");
                              }}
                            >
                              <h4>Portions & Floors</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory(
                                  "Shops - Offices - Commercial Space"
                                );
                              }}
                            >
                              <h4>Shops - Offices - Commercial Space</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Rooms");
                              }}
                            >
                              <h4>Rooms</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Roommates & Paying Guests");
                              }}
                            >
                              <h4>Roommates & Paying Guests</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory(
                                  "Vacation Rentals & Guest Houses"
                                );
                              }}
                            >
                              <h4>Vacation Rentals & Guest Houses</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Lands & Plots");
                              }}
                            >
                              <h4>Lands & Plots</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Electronics") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Computers & Accessories");
                              }}
                            >
                              <h4>Computers & Accessories</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("TV - Video - Audio");
                              }}
                            >
                              <h4>TV - Video - Audio</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Cameras & Accessories");
                              }}
                            >
                              <h4>Cameras & Accessories</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Games & Entertainment");
                              }}
                            >
                              <h4>Games & Entertainment</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Home Appliances");
                              }}
                            >
                              <h4>Other Home Appliances</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory(
                                  "Generators, UPS & Power Solutions"
                                );
                              }}
                            >
                              <h4>Generators, UPS & Power Solutions</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Kitchen Appliances");
                              }}
                            >
                              <h4>Kitchen Appliances</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("AC & Coolers");
                              }}
                            >
                              <h4>AC & Coolers</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Fridges & Freezers");
                              }}
                            >
                              <h4>Fridges & Freezers</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Washing Machines & Dryers");
                              }}
                            >
                              <h4>Washing Machines & Dryers</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Bikes") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Motorcycles");
                              }}
                            >
                              <h4>Motorcycles</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Spare Parts");
                              }}
                            >
                              <h4>Spare Parts</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Bicycles");
                              }}
                            >
                              <h4>Bicycles</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("ATV & Quads");
                              }}
                            >
                              <h4>ATV & Quads</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Scooters");
                              }}
                            >
                              <h4>Scooters</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Bussiness") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Business for Sale");
                              }}
                            >
                              <h4>Business for Sale</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Food & Restaurants");
                              }}
                            >
                              <h4>Food & Restaurants</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Trade & Industrial");
                              }}
                            >
                              <h4>Trade & Industrial</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory(
                                  "Construction & Heavy Machinery"
                                );
                              }}
                            >
                              <h4>Construction & Heavy Machinery</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Agriculture");
                              }}
                            >
                              <h4>Agriculture</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Business & Industry");
                              }}
                            >
                              <h4>Other Business & Industry</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Medical & Pharma");
                              }}
                            >
                              <h4>Medical & Pharma</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Services") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Education & Classes");
                              }}
                            >
                              <h4>Education & Classes</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Travel & Visa");
                              }}
                            >
                              <h4>Travel & Visa</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Car Rental");
                              }}
                            >
                              <h4>Car Rental</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Drivers & Taxi");
                              }}
                            >
                              <h4>Drivers & Taxi</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Web Development");
                              }}
                            >
                              <h4>Web Development</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Services");
                              }}
                            >
                              <h4>Other Services</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Electronics & Computer Repair");
                              }}
                            >
                              <h4>Electronics & Computer Repair</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Event Services");
                              }}
                            >
                              <h4>Event Services</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Health & Beauty");
                              }}
                            >
                              <h4>Health & Beauty</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Maids & Domestic Help");
                              }}
                            >
                              <h4>Maids & Domestic Help</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Movers & Packers");
                              }}
                            >
                              <h4>Movers & Packers</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Home & Office Repair");
                              }}
                            >
                              <h4>Home & Office Repair</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Catering & Restaurant");
                              }}
                            >
                              <h4>Catering & Restaurant</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Farm & Fresh Food");
                              }}
                            >
                              <h4>Farm & Fresh Food</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Jobs") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Online");
                              }}
                            >
                              <h4>Online</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Marketing");
                              }}
                            >
                              <h4>Marketing</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Advertising & PR");
                              }}
                            >
                              <h4>Advertising & PR</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Education");
                              }}
                            >
                              <h4>Education</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Customer Service");
                              }}
                            >
                              <h4>Customer Service</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Sales");
                              }}
                            >
                              <h4>Sales</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("IT & Networking");
                              }}
                            >
                              <h4>IT & Networking</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Hotels & Tourism");
                              }}
                            >
                              <h4>Hotels & Tourism</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Clerical & Administration");
                              }}
                            >
                              <h4>Clerical & Administration</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Human Resources");
                              }}
                            >
                              <h4>Human Resources</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Accounting & Finance");
                              }}
                            >
                              <h4>Accounting & Finance</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Manufacturing");
                              }}
                            >
                              <h4>Manufacturing</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Medical");
                              }}
                            >
                              <h4>Medical</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Part - Time");
                              }}
                            >
                              <h4>Part - Time</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Animals") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Fish & Aquariums");
                              }}
                            >
                              <h4>Fish & Aquariums</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Birds");
                              }}
                            >
                              <h4>Birds</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Hens & Aseel");
                              }}
                            >
                              <h4>Hens & Aseel</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("sell-category-div");
                              }}
                            >
                              <h4>sell-category-div</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Dogs");
                              }}
                            >
                              <h4>Dogs</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Livestock");
                              }}
                            >
                              <h4>Livestock</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Horses");
                              }}
                            >
                              <h4>Horses</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Pet Food & Accessories");
                              }}
                            >
                              <h4>Pet Food & Accessories</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Animals");
                              }}
                            >
                              <h4>Other Animals</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Furniture") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Sofa & Chairs");
                              }}
                            >
                              <h4>Sofa & Chairs</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Beds & Wardrobes");
                              }}
                            >
                              <h4>Beds & Wardrobes</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Home Decoration");
                              }}
                            >
                              <h4>Home Decoration</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Tables & Dining");
                              }}
                            >
                              <h4>Tables & Dining</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Garden & Outdoor");
                              }}
                            >
                              <h4>Garden & Outdoor</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Painting & Mirrors");
                              }}
                            >
                              <h4>Painting & Mirrors</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Rugs & Carpets");
                              }}
                            >
                              <h4>Rugs & Carpets</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Curtains & Blinds");
                              }}
                            >
                              <h4>Curtains & Blinds</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Office Furniture");
                              }}
                            >
                              <h4>Office Furniture</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Household Items");
                              }}
                            >
                              <h4>Other Household Items</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Fashion") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Accessories");
                              }}
                            >
                              <h4>Accessories</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Clothes");
                              }}
                            >
                              <h4>Clothes</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Footwear");
                              }}
                            >
                              <h4>Footwear</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Jewellery");
                              }}
                            >
                              <h4>Jewellery</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Make Up");
                              }}
                            >
                              <h4>Make Up</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Skin & Hair");
                              }}
                            >
                              <h4>Skin & Hair</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Watches");
                              }}
                            >
                              <h4>Watches</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Wedding");
                              }}
                            >
                              <h4>Wedding</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Lawn & Pret");
                              }}
                            >
                              <h4>Lawn & Pret</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Couture");
                              }}
                            >
                              <h4>Couture</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Fashion");
                              }}
                            >
                              <h4>Other Fashion</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Books") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Books & Magazines");
                              }}
                            >
                              <h4>Books & Magazines</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Musical Instruments");
                              }}
                            >
                              <h4>Musical Instruments</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Sports Equipment");
                              }}
                            >
                              <h4>Sports Equipment</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Gym & Fitness");
                              }}
                            >
                              <h4>Gym & Fitness</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Other Hobbies");
                              }}
                            >
                              <h4>Other Hobbies</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    } else if (category === "Kids") {
                      return (
                        <div key={Math.floor(Math.random() * 987654321)}>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Kids Furniture");
                              }}
                            >
                              <h4>Kids Furniture</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Toys");
                              }}
                            >
                              <h4>Toys</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Prams & Walkers");
                              }}
                            >
                              <h4>Prams & Walkers</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Swings & Slides");
                              }}
                            >
                              <h4>Swings & Slides</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Kids Bikes");
                              }}
                            >
                              <h4>Kids Bikes</h4>
                            </div>
                          </Link>
                          <Link
                            to="/sell/attributes"
                            style={{ textDecoration: "none" }}
                          >
                            <div
                              className="sell-category-div"
                              onMouseOver={() => {
                                setsubCategory("Kids Accessories");
                              }}
                            >
                              <h4>Kids Accessories</h4>
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="sell-categories sell-categories-right">
                  {categoryArr.map((thirdcat) => {
                    if (thirdcategory === "Accessories") {
                      return (
                        <Link
                          to="/sell/attributes"
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="sell-category-div"
                            onClick={() => {
                              setsubCategory("Kids Accessories");
                            }}
                          >
                            <h4>Kids Accessories</h4>
                          </div>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="sellDiv">
    //   <div className="sellTop">
    //     <Link to="/">
    //     <FontAwesomeIcon className="back" icon={faArrowLeft}></FontAwesomeIcon>
    //     <img src={logo}></img>
    //     </Link>
    //   </div>
    //   <div className="sellh2">
    //     <h1>POST YOUR AD</h1>
    //   </div>
    //   <div className="content">
    //     <div className="adsCategory">
    //       <div className="adsh1">
    //         <h1>Choose a Category</h1>
    //       </div>
    //       <div
    //         className="sellCategory"
    //         onClick={() => {
    //           setcategory("Mobiles");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           className="mobileIcon"
    //           icon={faMobileScreenButton}
    //         ></FontAwesomeIcon>
    //         <h4 className="mobiles">Mobiles</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div
    //         className="sellCategory"
    //         onClick={() => {
    //           setcategory("Vehicles");
    //         }}
    //       >
    //         <FontAwesomeIcon className="carIcon" icon={faCar}></FontAwesomeIcon>
    //         <h4 className="vehicles">Vehicles</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div
    //         className="sellCategory"
    //         onClick={() => {
    //           setcategory("Sale");
    //         }}
    //       >
    //         <FontAwesomeIcon
    //           className="mobileIcon"
    //           icon={faMobileScreenButton}
    //         ></FontAwesomeIcon>
    //         <h4 className="sale">Property for Sale</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //       onClick={() => {
    //         setcategory("Rent");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon"
    //           icon={faMobileScreenButton}
    //         ></FontAwesomeIcon>
    //         <h4 className="rent">Property for Rent</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //       onClick={() => {
    //         setcategory("Electronics");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon"
    //           icon={faMobileScreenButton}
    //         ></FontAwesomeIcon>
    //         <h4 className="elecronic">Electronics & Home Appliances</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Bikes");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon faBikes"
    //           icon={faMotorcycle}
    //         ></FontAwesomeIcon>
    //         <h4 className="bikes">Bikes</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Bussiness");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon"
    //           icon={faMobileScreenButton}
    //         ></FontAwesomeIcon>
    //         <h4 className="bussiness">Bussiness, Industrial & Agriculture</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Services");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon faService"
    //           icon={faConciergeBell}
    //         ></FontAwesomeIcon>
    //         <h4 className="services">Services</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Jobs");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon faJobs"
    //           icon={faBriefcase}
    //         ></FontAwesomeIcon>
    //         <h4 className="jobs">Jobs</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Animals");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon faAnimals"
    //           icon={faDog}
    //         ></FontAwesomeIcon>
    //         <h4 className="animals">Animals</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Furniture");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon faCouch"
    //           icon={faCouch}
    //         ></FontAwesomeIcon>
    //         <h4 className="furniture">Furniture & Home Decor</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Fashion");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon faShirt"
    //           icon={faShirt}
    //         ></FontAwesomeIcon>
    //         <h4 className="fashion">Fashion & Beauty</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Books");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon faGuitar"
    //           icon={faGuitar}
    //         ></FontAwesomeIcon>
    //         <h4 className="books">Books, Sports & Hobbies</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //       <div className="sellCategory"
    //        onClick={() => {
    //         setcategory("Kids");
    //       }}>
    //         <FontAwesomeIcon
    //           className="mobileIcon"
    //           icon={faMobileScreenButton}
    //         ></FontAwesomeIcon>
    //         <h4 className="kids">Kids</h4>
    //         <FontAwesomeIcon
    //           className="angleRight"
    //           icon={faAngleRight}
    //         ></FontAwesomeIcon>
    //       </div>
    //  <div className="second">
    //   </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sell;
