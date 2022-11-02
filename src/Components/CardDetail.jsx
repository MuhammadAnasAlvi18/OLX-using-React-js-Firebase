import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { faShareNodes , faAngleRight , faPhone , faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import avatar from "../images/avatar.png"
import mapImage from '../images/Map.png'
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "./Firebase";
import Footer from './Footer'
import Navbar from './Navbar'
import Category from './Category'

const CardDetail = () => {

  const [cardId , setcardId] = useState("")
  const [number , setnumber] = useState("** *** ****")
  const [numbercolor , setnumbercolor] = useState("black")
  const [display , setdisplay] = useState("block")
  const [datas , setdatas] = useState([]);
  const [transform , settransform] = useState(0);
  const [coverState , setcoverState] = useState(null);
  const [classd , setclassd] = useState("cardDtl");
  let datasarr=[];
  

useEffect(async ()=>{

  setInterval(()=>{
    setclassd("cardDtlAgain");
  },100)
    console.log(window.location.pathname.split('/'))
    const locationId = window.location.pathname.split('/')
    const id = locationId[2]
    setcardId(id)
    console.log(id)
    console.log(cardId)

    const db = getFirestore(app)
    const docRef = doc(db, "cards", cardId);
    const docSnap = await getDoc(docRef);
    
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  datas.push(docSnap.data());
  setdatas(datas);
  console.log(datas)
  datasarr.push(datas[0])
  console.log(datasarr)
  setcoverState(datas[0].cover)
}



},[datas,classd])

  
return(
<>
    <Navbar />
    <Category />
    {/* <div className="container">
    <div className='cardDtlMain '>
      {datas.map((cardd)=>{
        let imgArr = cardd.moreimages;
        let imgArrDup = [...new Set(imgArr)];
        console.log(imgArrDup);
        return(
        <div className={classd}>
        <div className='cardDtl2'>
          <div className='a'>
            <div className='a1 '>
              <div className='aa1'>
              <div className='aa1Coverimage'>
                <img src={coverState} ></img>
              </div>
              <div className='aa1Moreimages' style={{transform:`translate(${transform}px)`}}>
                {
                  imgArrDup.map((moreimg)=>{
                    return(
                      <div className='aa1images'>
                        <img src={moreimg} onClick={(e)=>{
                          console.log(e.target.src);
                          setcoverState(e.target.src);
                        }}></img>
                      </div>
                    )
                  })
                }
              </div>
              <div className='transformDiv2' onClick={()=>{
                settransform(transform+260);
                // settransform("-60px");
                // settransform("-120px");
              }}>
                <FontAwesomeIcon className='transformDivicon' icon={faAngleLeft}></FontAwesomeIcon>
              </div>
              <div className='transformDiv' onClick={()=>{
                settransform(transform-260);
                // settransform("-60px");
                // settransform("-120px");
              }}>
                <FontAwesomeIcon className='transformDivicon' icon={faAngleRight}></FontAwesomeIcon>
              </div>
              </div>
              <div className='aa1'>
                <h1 className='aa1H1'>Details</h1>
                <div className='aa1Div1'>
                  <span className='aa1Span1'>Price</span>
                  <span className='aa1Span2'>{cardd.price}</span>
                  <span className='aa1Span3'>Condition</span>
                  <span className='aa1Span4'>{cardd.condition}</span>
                </div>
                <span className='aa1Span5'>Year</span>
                <span className='aa1Span6'>2022</span>
                <div className='aa1Div2'>
                  <span className='underline'></span>
                </div>
                <div className='aa1Div3'>
                  <h1 className='aa1H1'>Description</h1>
                  <h3 className='aa1H3'>{cardd.description}</h3>
                </div>
              </div>
            </div>
            <div className='a2'>
              <div className='aa2'>
                <div className='aaa2'>
                  <h1 className='aaa2H1'>Rs {cardd.price}</h1>
                  <h3 className='aaa2H3'>{cardd.title}</h3>
                  <h5 className='aaa2H5'>{cardd.location}, Pakistan</h5>
                </div>
                <div className='aaa2'>
                  <div style={{display:'flex'}}>
                  <FontAwesomeIcon className='sharenodes' icon={faShareNodes}></FontAwesomeIcon>
                <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1.7em"
                width="1.7em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
              </svg>
                  </div>
                  <h6 className='aaa2H6'>1 hour ago</h6>
                </div>
                </div>
              <div className='aa2'>
                <h1 className='aa2H1'>Seller Description</h1>
                <div className='aa2Div'>
                  <img src={avatar} className='aa2img'></img>
                  <div className='aa2Div2'>
                  <h3 className='aa2H3'>{cardd.name}</h3>
                  <h4 className='aa2H4'>Member since Apr 2021</h4>
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} className='aa2Arrow'></FontAwesomeIcon>
                </div>
                <div className='aa2Div3'>
                <button className='aa2button'>Chat with seller</button>
                <div className='aa2Div4'>
                <FontAwesomeIcon className='aa2Phone' icon={faPhone}></FontAwesomeIcon>
                <span style={{color:numbercolor}}>{number}</span>
                <a href='#' onClick={()=>{setnumber(`+92${Number('3182270890')}`); setnumbercolor("blue"); setdisplay("none")}} style={{display:display}}>Show number</a>
                </div>
                </div>
              </div>
              <div className='aa2'>
                <h1 className='aa2H12'>Posted in</h1>
                <h3 className='aa2H32'>{cardd.location},Sindh</h3>
                <div className='aa2Div5'>
                <img src={mapImage} className="aa2img2"></img>
                <span>See location</span>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </div>
              </div>
              <span className='idSpan'>AD ID {cardId}</span>
            </div>
          </div>
        </div>
      </div>
          )
        })
      }
    </div> */}
    <Footer />
      <div className="footer-last">
        <h2>Free Classifieds in Pakistan . © 2006-2022 OLX</h2>
      </div>
    {/* </div> */}
    </>
          )
}

export default CardDetail;