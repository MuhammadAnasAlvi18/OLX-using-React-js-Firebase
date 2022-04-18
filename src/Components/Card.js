import React, { useEffect, useState } from "react";
import db from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import CardDetail from "./CardDetail";
import { isReactNative } from "@firebase/util";
import store from "../Redux/store";
import cardImage from '../images/card.jpg'

const Card = () => {
  const [cardData, setcardData] = useState([]);
  const [id, setid] = useState([]);
  const [isTrue , setisTrue] = useState(false)
  const [cardDataId , setcardDataId] = useState("")

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
      <CardDetail id={cardDataId}></CardDetail>
      </>
    )
  } else {
    return(
      <div className="cards row">
      {cardData.map((cards, index) => {
        return (
          <div
            key={index + 100}
            id={id[index]}
            className="card-1 col-lg"
            onClick={(e) => {
              console.log(e.target.id);
              cardId = e.target.id;
              setcardDataId(cardId)
              setTimeout(()=>{window.location = `/item/${cardId}`; setisTrue(true);},1000)
            }}
          >
            <img src={cardImage}></img>
            <div className="cardText">
              <h1>{cards.title}</h1>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
              </svg>
            </div>
            <h1 className="price" >Rs {cards.price}</h1>
            <h3 className="location">{cards.location} , Pakistan</h3>
          </div>
        );
      })}
    </div>
    )
  }

    // <div className="cards row">
    //   {cardData.map((cards, index) => {
    //     return (
    //       <div
    //         key={index + 100}
    //         id={id[index]}
    //         className="card-1 col-lg"
    //         onClick={(e) => {
    //           console.log(e.target.id);
    //           cardId = e.target.id;
    //         }}
    //       >
    //         <img src={cardimage}></img>
    //         <div className="cardText">
    //           <h1>{cards.title}</h1>
    //           <svg
    //             stroke="currentColor"
    //             fill="currentColor"
    //             strokeWidth="0"
    //             viewBox="0 0 16 16"
    //             height="2em"
    //             width="2em"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
    //           </svg>
    //         </div>
    //         <h1 className="price" >Rs {cards.price}</h1>
    //         <h3 className="location">{cards.location} , Pakistan</h3>
    //       </div>
    //     );
    //   })}
    // </div>
};

export default Card;
