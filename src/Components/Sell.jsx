import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../App.css";
import logo from "../images/olx-logo-vector-black.png";
import {
  faAngleRight,
  faCar,
  faMotorcycle,
  faConciergeBell,
  faBriefcase,
  faDog,
  faCouch,
  faShirt,
  faBoltLightning,
  faArrowLeft,
  faBook,
  faBuildingColumns,
  faBusinessTime,
  faChild,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import store from "../Redux/store";

const Sell = () => {
  const [category, setcategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [thirdcategory, setThirdcategory] = useState("");
  const [categoryData, setCategoryData] = useState([
    {
      text: "Mobiles",
      categoryText: "Mobiles",
      icons: faMobileScreenButton,
      subcategories: [
        "Tablets",
        "Accessories",
        "Mobile Phones",
        "Smart watches",
      ],
      thirdcategories: [
        "Charging Cables",
        "Converters",
        "Chargers",
        "Screens",
        "Screen Protectors",
        "Mobile Stands",
        "Ring Lights",
        "Selfie Sticks",
        "Power Banks",
        "Headphones",
        "Earphones",
        "Covers & Cases",
        "External Memory",
        "Other Accessories",
      ],
    },
    {
      text: "Vehicles",
      categoryText: "Vehicles",
      icons: faCar,
      subcategories: [
        "Cars",
        "Cars on installments",
        "Cars Accessories",
        "Spare Parts",
        "Buses, Vans & Trucks",
        "Rikshaw & Chingchi",
        "Other Vehicles",
        "Boats",
        "Tractor & Trailers",
      ],
    },
    {
      text: "Property for Sale",
      categoryText: "Sale",
      icons: faBuildingColumns,
      subcategories: [
        "Land & Plots",
        "Houses",
        "Apartments & Flats",
        "Shops - Offices - Commercial Space",
        "Portions & Floors",
      ],
    },
    {
      text: "Property for Rent",
      categoryText: "Rent",
      icons: faCar,
      subcategories: [
        "Houses",
        "Apartments & Flats",
        "Portions & Floors",
        "Shops - Offices - Commercial Space",
        "Rooms",
        "Roommates & Paying Guests",
        "Vacation Rentals - Guests Houses",
        "Land & Plots ",
      ],
    },
    {
      text: "Electronics & Home Appliances",
      categoryText: "Electronics",
      icons: faBoltLightning,
      subcategories: [
        "Computers & Accessories",
        "TV - Video - Audio",
        "Cameras & Accessories",
        "Games & Entertainment",
        "Other Home Appliances",
        "Generators, UPS & Power Solutions",
        "Kitchen Appliances",
        "AC & Coolers",
        "Fridges & Freezers",
        "Washing Machines & Dryers",
      ],
    },
    {
      text: "Bikes",
      categoryText: "Bikes",
      icons: faMotorcycle,
      subcategories: [
        "Motorcycles",
        "Spare Parts",
        "Bicycles",
        "ATV & Quads",
        "Scooters",
      ],
    },
    {
      text: "Bussiness, Industrial & Agriculture",
      categoryText: "Bussiness",
      icons: faBusinessTime,
      subcategories: [
        "Business for Sale",
        "Food & Restaurants",
        "Trade & Industrial",
        "Construction & Heavy Machinery",
        "Agriculture",
        "Other Business & Industry",
        "Medical & Pharma",
      ],
    },
    {
      text: "Services",
      categoryText: "Services",
      icons: faConciergeBell,
      subcategories: [
        "Architecture & Interior Design",
        "Camera Installation",
        "Car Rental",
        "Car Services",
        "Catering & Restaurant",
        "Construction Services",
        "Consultancy Services",
        "Domestic Help",
        "Drivers & Taxi",
        "Tuitions & Academies",
        "Electronics & Computer Repair",
        "Event Services",
        "Farm & Fresh Food",
        "Health & Beauty",
        "Home & Office Repair",
        "Insurance Services",
        "Movers & Packers",
        "Renting Services",
        "Tailor Services",
        "Travel & Visa",
        "Video & Photography",
        "Web Development",
        "Other Services",
      ],
    },
    {
      text: "Jobs",
      categoryText: "Jobs",
      icons: faBriefcase,
      subcategories: [
        "Accounting & Finance",
        "Advertising & PR",
        "Architecture & Interior Design",
        "Clerical & Administration",
        "Content Writing",
        "Customer Service",
        "Delivery Riders",
        "Domestic Staff",
        "Education",
        "Engineering",
        "Graphic Design",
        "Hotels & Tourism",
        "Human Resources",
        "Internships",
        "IT & Networking",
        "Manufacturing",
        "Marketing",
        "Medical",
        "Online",
        "Other Jobs",
        "Part Time",
        "Real Estate",
        "Restaurants & Hospitality",
        "Sales",
        "Security",
      ],
    },
    {
      text: "Animals",
      categoryText: "Animals",
      icons: faDog,
      subcategories: [
        "Fish & Aquariums",
        "Birds",
        "Hens & Aseel",
        "Cats",
        "Dogs",
        "Livestock",
        "Horses",
        "Pet Food & Accessories",
        "Other Animals",
      ],
    },
    {
      text: "Furniture & Home Decor",
      categoryText: "Furniture",
      icons: faCouch,
      subcategories: [
        "Sofa & Chairs",
        "Beds & Wardrobes",
        "Home Decoration",
        "Tables & Dining",
        "Garden & Outdoor",
        "Painting & Mirrors",
        "Rugs & Carpets",
        "Curtains & Blinds",
        "Office Furniture",
        "Other Household Items",
      ],
    },
    {
      text: "Fashion & Beauty",
      categoryText: "Fashion",
      icons: faShirt,
      subcategories: [
        "Clothes",
        "Footwear",
        "Jewellery",
        "Make Up",
        "Skin & Hair",
        "Watches",
        "Wedding",
        "Lawn & Pret",
        "Couture",
        "Other Fashion",
      ],
    },
    {
      text: "Books, Sports & Hobbies",
      categoryText: "Books",
      icons: faBook,
      subcategories: [
        "Books & Magazines",
        "Musical Instruments",
        "Sports Equipment",
        "Gym & Fitness",
        "Other Hobbies",
      ],
    },
    {
      text: "Kids",
      categoryText: "Kids",
      icons: faChild,
      subcategories: [
        "Kids Furniture",
        "Toys",
        "Prams & Walkers",
        "Swings & Slides",
        "Kids Bikes",
        "Kids Accessories",
      ],
    },
  ]);

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
                  {categoryData.map((data) => {
                    console.log(data);
                    return (
                      <div
                        className="sell-category-div"
                        onClick={() => {
                          setcategory(data.categoryText);
                          // setThirdcategory("");
                        }}
                      >
                        <div className="sell-category-name">
                          <FontAwesomeIcon icon={data.icons}></FontAwesomeIcon>
                          <h4>{data.text}</h4>
                        </div>
                        <FontAwesomeIcon
                          className="angleRight"
                          icon={faAngleRight}
                        ></FontAwesomeIcon>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="sell-categories sell-categories-middle">
                  <div>
                    {categoryData.map((data) => {
                      console.log(category === data.categoryText);
                      if (category === data.categoryText) {
                        return (
                          <>
                            {data.subcategories.map((subData) => {
                              return (
                                <>
                                  {subData === "Accessories" ||
                                  subData === "Domestic Help" ||
                                  subData === "Drivers & Taxi" ||
                                  subData === "Health & Beauty" ||
                                  subData === "Home & Office Repair" ? (
                                    <div
                                      className="sell-category-div"
                                      onClick={() => {
                                        setsubCategory(subData);
                                        // setThirdcategory("");
                                      }}
                                      onMouseOver={() => {
                                        setsubCategory(subData);
                                        // setThirdcategory("");
                                      }}
                                    >
                                      <div className="sell-category-name">
                                        <h4>{subData}</h4>
                                      </div>
                                      <FontAwesomeIcon
                                        className="angleRight"
                                        icon={faAngleRight}
                                      ></FontAwesomeIcon>
                                    </div>
                                  ) : (
                                    <Link
                                      to="/sell/attributes"
                                      style={{ textDecoration: "none" }}
                                    >
                                      <div
                                        className="sell-category-div"
                                        onClick={() => {
                                          setsubCategory(subData);
                                          setThirdcategory("");
                                        }}
                                        onMouseOver={() => {
                                          setsubCategory(subData);
                                          setThirdcategory("");
                                        }}
                                      >
                                        <h4>{subData}</h4>
                                      </div>
                                    </Link>
                                  )}
                                </>
                              );
                            })}
                          </>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="sell-categories sell-categories-right">
                  {categoryData.map((data) => {
                    console.log(subCategory);
                    if (subCategory === "Accessories") {
                      return (
                        <>
                          {data.thirdcategories && data.thirdcategories.map((thirdCats) => {
                            return(
                              <Link
                              to="/sell/attributes"
                              style={{ textDecoration: "none" }}
                            >
                              <div
                                className="sell-category-div"
                                onClick={() => {
                                  setThirdcategory("thirdCats");
                                }}
                                onMouseOver={() => {
                                  setThirdcategory("thirdCats");
                                  console.log(thirdcategory);
                                }}
                              >
                                <h4>{thirdCats}</h4>
                              </div>
                            </Link>
                            )
                          })}
                        </>
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
  );
};

export default Sell;
