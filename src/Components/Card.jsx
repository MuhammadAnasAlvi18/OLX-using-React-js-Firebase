import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import CardDetail from "./CardDetail";
import { getFirestore } from "firebase/firestore";
import app from "./Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useCallback } from "react";

const Card = () => {
  const [cardData, setCardData] = useState([]);
  const [id, setId] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const [cardDataId, setCardDataId] = useState("");
  const db = getFirestore(app);

  const fetchData = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "cards"));
    const cards = [];
    const ids = [];
    querySnapshot?.forEach((doc) => {
      cards.push(doc?.data());
      ids.push(doc?.id);
    });
    setCardData(cards);
    setId(ids);
  }, [db]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCardClick = (cardId) => {
    setCardDataId(cardId);
    setIsTrue(true);
  };

  if (isTrue) {
    return (
      <>
        <CardDetail id={cardDataId}></CardDetail>
      </>
    );
  } else {
    return (
      <div className="container">
        <div className="row pb-5">
          {cardData?.length > 0 ? (
            cardData?.map((cards, index) => {
              let cardIds = id[index];
              let dated = cards?.time;
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
              return (
                <div
                  key={index + 100}
                  id={id[index]}
                  className="col-lg-3 col-md-6 col-sm-6 mb-3"
                  onClick={() => handleCardClick(id[index])}
                >
                  <div className="ad_card">
                    <Link to={`/item/${cardIds}`} param={cardIds}>
                      <img src={cards.images} alt="cardImage" />
                      <div className="ad_card_text">
                        <div className="ad_card_top">
                          <h3>{cards.title}</h3>
                          <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <h4>Rs {Number(cards.price).toLocaleString()}</h4>
                        <p>
                          {cards.location} , Pakistan •{" "}
                          <span>
                            {hours === 0
                              ? seconds < 60
                                ? seconds < 30
                                  ? "Just Now"
                                  : `${seconds} ${sec} ago`
                                : `${minutes} ${min} ago`
                              : hours > 24
                              ? days > 30
                                ? `${months} ${month} ago`
                                : `${days} ${day} ago`
                              : `${hours} ${hour} ago`}
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="loader-main">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Card;
