import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link, NavLink } from "react-router-dom";
import CardDetail from "./CardDetail";
import { isReactNative } from "@firebase/util";
import store from "../Redux/store";
import cardImage from '../images/card.jpg'
import { getFirestore } from "firebase/firestore";
import app from "./Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Card = () => {
  const [cardData, setcardData] = useState([]);
  const [id, setid] = useState([]);
  const [isTrue , setisTrue] = useState(false)
  const [cardDataId , setcardDataId] = useState("")
  const db = getFirestore(app)
  const [link , setlink] = useState("/")

  let cardId;


  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "cards"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
      setcardData([]);
      cardData.push(doc.data());
      id.push(doc.id);
      setid(id);
      setcardData(cardData);
      console.log(cardData);
      // setisTrue(true)
    });

    console.log(id);

    console.log(cardData);
  }, []);


  if (isTrue){
    return(
      <>
      <CardDetail id={cardId}></CardDetail>
      </>
    )
  } else {
    return(
      <div className="container">
      <div className="row">
        {
          cardData.map((cards , index)=>{
            let cardIds = id[index];
            return(
          <div key={index + 100}
          id={id[index]} className="col-lg-3 col-md-6 col-sm-6 mb-3" onClick={(e) => {
            console.log(e.target.id);
            cardId = e.target.id;
            setcardDataId(cardId)
          }}>
          <div className="ad_card">
            <Link to={`/item/${cardIds}`} param={cardIds}>
            <img src={cards.cover[0]} alt="cardImage" />
            <div className="ad_card_text">
              <div className="ad_card_top">
                <h3>{cards.title}</h3>
                <FontAwesomeIcon icon={faHeart}/>
              </div>
              <h4>Rs {cards.price}</h4>
              <p>{cards.location} ,Karachi • <span>6 minutes ago</span></p>
            </div>
            </Link>
          </div>
        </div>
            )
          })
        }
    </div>
    </div>
    )
  }
};

export default Card;
