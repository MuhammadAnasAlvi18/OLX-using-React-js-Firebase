import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../App.css";
import {
  faShareNodes,
  faAngleRight,
  faPhone,
  faHeart,
  faLocationDot,
  faMessage,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../images/avatar.png";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "./Firebase";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Category from "./Category";
import { Link } from "react-router-dom";

const CardDetail = () => {
  const [cardId, setCardId] = useState("");
  const [number, setNumber] = useState("Show Phone Number");
  // const [numberColor, setNumberColor] = useState("black");
  const [datas, setDatas] = useState([]);
  // const [transform, setTransform] = useState(0);
  // const [coverState, setCoverState] = useState(null);
  // const [classd, setClassd] = useState("cardDtl");

  useEffect(() => {
    const fetchCardData = async () => {
      // setClassd("cardDtlAgain");
      
      const locationId = window.location.pathname.split("/");
      const id = locationId[2];
      setCardId(id);

      const db = getFirestore(app);
      const docRef = doc(db, "cards", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const cardData = docSnap.data();
        setDatas([cardData]);
        console.log(datas);
        console.log(cardData);
        
        
        // setCoverState(cardData.cover);
      }
    };

    fetchCardData();
  }, [cardId]);

  return (
    <>
      <Navbar />
      <Category />
      <div className="container">
        {datas.map((cardData, index) => (
          <span key={index} className="card-detail-span">{`Home / ${cardData.other[0]} / ${cardData.other[1]} / ${cardData.other[0]} in ${cardData.location} / ${cardData.other[1]} in ${cardData.location}`}</span>
        ))}
        <div className="cardDtlMain">
          {datas.length > 0 ? (
            datas.map((cardd, index) => {
              let imgArr = cardd.images;
              // let imgArrDup = [...new Set(imgArr)];
              let dated = cardd.time;
              let Cdate = new Date().getTime();
              let finalDate = Cdate - dated;
              let days = Math.floor(finalDate / (1000 * 3600 * 24));
              let hours = Math.floor(finalDate / 1000 / 60 / 60);
              let minutes = Math.floor(finalDate / 1000 / 60);
              let seconds = Math.floor(finalDate / 1000);
              let months = Math.floor(days / 30.44);
              let month = months < 2 ? "month" : "months";
              let day = days < 2 ? "day" : "days";
              let hour = hours < 2 ? "hour" : "hours";
              let min = minutes < 2 ? "minute" : "minutes";
              let sec = seconds < 2 ? "second" : "seconds";
              console.log(imgArr);
              // console.log(imgArrDup);
              return (
                <div className="row" key={index}>
                  <div className="col-md-8 ps-md-0">
                    <div className="card-detail-left">
                      <div className="card-detail-left-img">
                      <div id="carouselExampleControls" className="carousel slide card-detail-carousel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                          {imgArr && imgArr.map((moreimages, imgIndex) => (
                            <div className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`} key={imgIndex}>
                              <img src={moreimages} className="d-block w-100" alt="card_image" />
                            </div>
                          ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                      </div>
                      <div className="card-detail-left-ad-detail">
                        <div className="card-detail-left-ad-detail-flex">
                          <h3>Rs {Number(cardd.price).toLocaleString()}</h3>
                          <div className="card-detail-left-icons">
                            <FontAwesomeIcon icon={faShareNodes} />
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                        </div>
                        <h5>{cardd.title}</h5>
                        <div className="card-detail-left-ad-detail-flex">
                          <div className="card-detail-left-location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <h6>{cardd.location}</h6>
                          </div>
                          <span>
                            {hours === 0
                              ? seconds < 60
                                ? seconds < 30
                                  ? "Just Now"
                                  : `${seconds} ${sec} ago`
                                : `${minutes} ${min} ago`
                              : hours > 24
                              ? days > 30 ? `${months} ${month} ago` : `${days} ${day} ago`
                              : `${hours} ${hour} ago`}
                          </span>
                        </div>
                      </div>
                      <div className="card-detail-left-ad-info">
                        <h3>Details</h3>
                        <div className="card-detail-left-ad-info-flex-main">
                          {cardd.condition && (
                            <div className="card-detail-left-ad-info-flex">
                              <h5>Condition</h5>
                              <h6>{cardd.condition}</h6>
                            </div>
                          )}
                          <div className="card-detail-left-ad-info-flex">
                            <h5>Price</h5>
                            <h6>{Number(cardd.price).toLocaleString()}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-detail-left-ad-description">
                        <h3>Description</h3>
                        <p>{cardd.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 pe-md-0">
                    <div className="card-detail-right">
                      <div className="card-detail-right-profile-detail">
                        <div className="card-detail-right-profile-detail-flex">
                          <div className="avatar-wrapper">
                            <img src={avatar} alt="avatar" />
                          </div>
                          <div className="text-wrapper">
                            <h5>{cardd.name}</h5>
                            <h6>Member since Nov 2017</h6>
                            <h5>
                              See profile{" "}
                              <FontAwesomeIcon icon={faAngleRight} />
                            </h5>
                          </div>
                        </div>
                        <div className="btn-wrapper">
                          <Link
                            to="#"
                            onClick={() => {
                              setNumber(cardd.phone);
                            }}
                          >
                            <FontAwesomeIcon icon={faPhone} />
                            {number}
                          </Link>
                          <Link to="#" className="btn-wrapper-white">
                            <FontAwesomeIcon icon={faMessage} />
                            Chat
                          </Link>
                        </div>
                      </div>
                      <div className="card-detail-right-location">
                        <h3>Location</h3>
                        <div className="card-detail-left-location">
                          <FontAwesomeIcon icon={faLocationDot} />
                          <h6>{cardd.location}</h6>
                        </div>
                      </div>
                      <div className="card-detail-right-id">
                        <h5>AD ID {cardId}</h5>
                        <h6>
                          <FontAwesomeIcon icon={faFlag} />
                          Report this ad
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="loader"></div>
          )}
        </div>
        <Footer />
        <div className="footer-last">
          <h2>Free Classifieds in Pakistan . © 2006-2022 OLX</h2>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
