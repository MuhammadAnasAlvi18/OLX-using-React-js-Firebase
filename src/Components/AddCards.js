import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../App.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/olx-logo-vector-black.png";
import { Link } from "react-router-dom";
import camera from '../images/photo-camera.png'
import avatar from '../images/avatar.png'
import store from "../Redux/store";


const AddCards = () => {

  const [Adtitle,setAdtitle] = useState("")
  const [loacation,setloacation] = useState("")
  const [name,setname] = useState("")
  const [description,setdescription] = useState("")
  const [condition,setcondition] = useState("")
  const [price,setprice] = useState("")
  const [number,setnumber] = useState("")
  const [categoryy , setcategoryy] = useState("")
  const [subcategoryy , setsubcategoryy] = useState("")
  const stores = store.getState();

  useEffect(()=>{
    setcategoryy(stores[1].categories)
    setsubcategoryy(stores[1].subcategories)
  },[])

  return (
    <div className="sellDiv">
      <div className="sellTop">
        <Link to="/sell">
        <FontAwesomeIcon className="back" icon={faArrowLeft}></FontAwesomeIcon>
        <img src={logo}></img>
        </Link>
      </div>
      <div className="sellh2">
        <h1>POST YOUR AD</h1>
      </div>
      <div className="content-2">
        <div className="adsCategory-2">
          <div className="adsh1-2">
            <h1>Selected Category</h1><br/>
            <div className="new" style={{display:'flex'}}>
            <h3>{categoryy}</h3>
            <h3>/</h3>
            <h3>{subcategoryy}</h3>
            <h3><a href="#">Change</a></h3>
            </div>
          </div>
          <div className="details">
            <h1>INCLUDE SOME DETAILS</h1>
            <label htmlFor="detailsInput" className="labels">
                <span className="detailsSpan">Ad title</span>
                <input type='text' id="detailsInput" value={Adtitle} onChange={(e)=>{
                  setAdtitle(e.target.value)
                }}/>
                <span className="detailsSpan-2">Mention the key features of your item (e.g. brand, model, age, type)</span>
            </label>
            <lable htmlFor="detailsInput2" className="detailsLabel">
              <span className="detailsSpan2">Description</span>
              <textarea id="detailsInput2" maxlength="4096" autocomplete="nope" value={description} onChange={(e)=>{setdescription(e.target.value)}}></textarea>
              <span className="detailsSpan-2">Include condition, features and reason for selling</span>
            </lable>
            <div className="condition">
            <h3>
              Condition
            </h3>
            <div className="checkLabel">
            <label className="labelses">
              <input type='checkbox' className="checkboxes" name="checkboxes" value="New" onChange={(e)=>{setcondition(e.target.value)}}></input>
              <span className="checkSpan">New</span>
            </label>
            <label className="labelses">
              <input type='checkbox' className="checkboxes" name="checkboxes" value="Used" onChange={(e)=>{setcondition(e.target.value)}}></input>
              <span className="checkSpan">Used</span>
            </label>
            </div>
            </div>
            <div className="setAprice">
              <h2>Set A Price</h2>    
              <span>Price</span>
              <input type="number" value={price} onChange={(e)=>{setprice(e.target.value)}}></input>
            </div>
            <div className="photo">
              <h2 className="uploadh2">Upload Up To 20 Photos</h2>
              <div className="upload">
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>            
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
              <label className="uploadCards"><input type='file' className="fileUpload" id="fileUpload"></input><img src={camera}></img></label>
            </div>
            <h2 className="uploadh22">For the cover picture we recommend using the landscape mode.</h2>
            </div>
            <div className="locationDIV">
              <h1>Your Ad's Location</h1>
              <span>Location</span>
              <div className='locationInput'>
                <input type='text' className="locationInp" value={loacation} onChange={(e)=>{
                  setloacation(e.target.value)
                }}></input>
              </div>
            </div>
        </div>
        <div className="verifyDetails">
          <h1>Review your Details</h1>
          <div className="avatarDiv">
            <div className="avatarDiv2">
             <img src={avatar}></img>
             <div className="avatarDiv3">
              <span className="avatarSpan">Name</span>
              <input type='text' value={name} onChange={(e)=>{
                setname(e.target.value)
              }}></input>
              </div>
            </div>
            <div className="avatarPhone">
            <span>Your Phone Number</span>
            <input type='number' value={number} onChange={(e)=>{setnumber(e.target.value)}}></input>
            </div>
          </div>
        </div>
        <div className="postDiv">
          <button>Post now</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddCards;