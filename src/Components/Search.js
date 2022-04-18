import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import sellImage from "../images/BUTTON.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

const Search = () => {
  const [isActive, setisActive] = useState(false);
  const [selected , setselected] = useState("")
  const options = ['Azad Kashmir, Pakistan','Balochistan, Pakistan','Khyber Pakhtunkhwa, Pakistan','Punjab, Pakistan','Sindh, Pakistan']

  return (
    <div className="search">
      <label
        htmlFor="input"
        className="label"
        onClick={(e) => {
          setisActive(!isActive);
        }}
      >
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
        ></FontAwesomeIcon>
        <input type="text" id="input" placeholder="Pakistan" value={selected} readOnly/>
        <FontAwesomeIcon
          className="angle-icon"
          icon={faAngleDown}
        ></FontAwesomeIcon>
      </label>
      {isActive && <div className="dropdown">
        <ul>
          {
            options.map((option)=>{
              return(
                <li key={Math.floor(Math.random() * 987654321)} onClick={(e)=>{
                  setselected(option)
                  setisActive(false)
                }}>{option}</li>
              )
            })
          }
        </ul>
      </div>}

      <label className="label label-2">
        <input
          type="text"
          placeholder="Find Cars, Mobile Phones and more..."
        ></input>
        <span className="span">
          <FontAwesomeIcon
            className="search-icon search-icon-2"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
        </span>
      </label>
      <a href="#">Login</a>
      <Link to='/sell'>
      <img src={sellImage} alt="sell"></img>
      </Link>
    </div>
  );
};

export default Search;
