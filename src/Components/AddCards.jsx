import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../App.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/olx-logo-vector-black.png";
import { Link } from "react-router-dom";
import camera from "../images/photo-camera.png";
import avatar from "../images/avatar.png";
import store from "../Redux/store";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import app from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

const AddCards = () => {
  const [Adtitle, setAdtitle] = useState("");
  const [loacation, setloacation] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [condition, setcondition] = useState("");
  const [price, setprice] = useState("");
  const [number, setnumber] = useState("");
  const [categoryy, setcategoryy] = useState("");
  const [subcategoryy, setsubcategoryy] = useState("");
  const [thirdcategory, setthirdcategory] = useState("");
  const [msg, setmsg] = useState("");
  const [coverImage, setcoverImage] = useState([]);
  const [btnClass, setbtnClass] = useState("");
  const [images, setImages] = useState([]);
  const [userData, setUserData] = useState(null);
  const [uid, setUid] = useState(null);

  const stores = store.getState();
  // const uid = "123456789";
  const db = getFirestore(app);
  const storage = getStorage(app);

  // Fix 1: Remove async from useEffect and handle properly
  useEffect(() => {
    if (stores.length > 0) {
      const lastStore = stores[stores.length - 1];
      setcategoryy(lastStore?.categories || "");
      setsubcategoryy(lastStore?.subcategories || "");
      setthirdcategory(lastStore?.thirdcategory || "");
    }
  }, [stores]);

  const handleImageUploader = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = window.URL.createObjectURL(file);
    
    // Fix 2: Properly update coverImage array
    setcoverImage(prev => {
      const newCoverImage = [...prev];
      newCoverImage[index] = url;
      return newCoverImage;
    });

    // Fix 3: Properly update images array
    setImages(prev => {
      const updatedImages = [...prev];
      updatedImages[index] = file;
      return updatedImages;
    });
  };

  const addCard = async (e) => {
    setbtnClass("active");
    e.preventDefault();

    // Filter out undefined/null images
    const validImages = images.filter(img => img);
    
    if (validImages.length === 0) {
      setmsg("Please upload at least one image");
      setbtnClass("");
      return;
    }

    const urlPromises = validImages.map(async (img) => {
      try {
        const storageRef = ref(storage, `moreimages/${img.name}`);
        await uploadBytes(storageRef, img);
        const url = await getDownloadURL(storageRef);
        return url;
      } catch (error) {
        console.error(`Failed to upload ${img.name}:`, error);
        return null;
      }
    });

    try {
      const urls = await Promise.all(urlPromises);
      const validUrls = urls.filter(url => url !== null);
      
      setTimeout(async () => {
        try {
          const docRef = await addDoc(collection(db, "cards"), {
            title: Adtitle,
            description: description,
            price: price,
            condition: condition,
            location: loacation,
            name: name,
            phone: number,
            uid: uid,
            images: validUrls,
            other: [categoryy, subcategoryy, thirdcategory],
            time: new Date().getTime(),
          });
          console.log("Document written with ID: ", docRef.id);
          setmsg("Your Ad Post Successfully");
          setbtnClass("");
          setTimeout(() => {
            setmsg("");
          }, 5000);
          
          // Reset form
          setAdtitle("");
          setdescription("");
          setcondition("");
          setloacation("");
          setname("");
          setprice("");
          setnumber("");
          setcoverImage([]);
          setImages([]);
        } catch (e) {
          console.error("Error adding document: ", e);
          setmsg("Error posting ad. Please try again.");
          setbtnClass("");
        }
      }, 1000);
      console.log('All images uploaded and URLs obtained successfully!', validUrls);
    } catch (error) {
      console.error('Error while uploading images or getting URLs:', error);
      setmsg("Error uploading images. Please try again.");
      setbtnClass("");
    }
  };

  // Fix 4: Properly handle auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
        try {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserData(docSnap.data());
            setname(docSnap.data().fullname);
            setnumber(docSnap.data().phoneNumber);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
      }
    });

    // Return cleanup function
    return () => unsubscribe();
  }, [db]);

  return (
    <div className="sellDiv">
      <div className="sellTop">
        <Link to="/sell">
          <FontAwesomeIcon
            className="back"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
        </Link>
        <Link to="/">
          <img alt="logo" src={logo}></img>
        </Link>
      </div>
      <div className="sellh2">
        <h1>POST YOUR AD</h1>
      </div>
      <div className="content-2">
        <div className="adsCategory-2">
          <div className="adsh1-2">
            <h1>Selected Category</h1>
            <br />
            <div className="new" style={{ display: "flex" }}>
              <h3>{categoryy && categoryy}</h3>
              <h3>/</h3>  
              <h3>{subcategoryy && subcategoryy}</h3>
              {thirdcategory && (
                <>
                  <h3>/</h3>
                  <h3>{thirdcategory}</h3>
                </>
              )}
              <h3>
                <Link to={-1}>Change</Link>
              </h3>
            </div>
          </div>
          <div className="details">
            <h1>INCLUDE SOME DETAILS</h1>
            <label htmlFor="detailsInput" className="labels">
              <span className="detailsSpan">Ad title</span>
              <input
                type="text"
                id="detailsInput"
                value={Adtitle}
                onChange={(e) => {
                  setAdtitle(e.target.value);
                }}
                required
                autoComplete="off"
              />
              <span className="detailsSpan-2">
                Mention the key features of your item (e.g. brand, model, age,
                type)
              </span>
            </label>
            <label htmlFor="detailsInput2" className="detailsLabel">
              <span className="detailsSpan2">Description</span>
              <textarea
                id="detailsInput2"
                maxLength="4096"
                rows="5"
                autoComplete="nope"
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              ></textarea>
              <span className="detailsSpan-2">
                Include condition, features and reason for selling
              </span>
            </label>
            {categoryy === "Mobiles" && (
              <div className="condition">
                <h3>Condition</h3>
                <div className="checkLabel">
                  <label className="labelses">
                    <input
                      type="checkbox"
                      className="checkboxes"
                      name="checkboxes"
                      value="New"
                      onChange={(e) => {
                        setcondition(e.target.value);
                      }}
                    ></input>
                    <span className="checkSpan">New</span>
                  </label>
                  <label className="labelses">
                    <input
                      type="checkbox"
                      className="checkboxes"
                      name="checkboxes"
                      value="Used"
                      onChange={(e) => {
                        setcondition(e.target.value);
                      }}
                    ></input>
                    <span className="checkSpan">Used</span>
                  </label>
                </div>
              </div>
            )}
            <div className="setAprice">
              <h2>Set A Price</h2>
              <span>Price</span>
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              ></input>
            </div>
            <div className="photo">
              <h2 className="uploadh2">Upload Up To 20 Photos</h2>
              <div className="upload">
                {/* Fix 5: Add key prop and handle array properly */}
                {Array.from({ length: 19 }).map((_, i) => (
                  <label key={i} className="uploadCards">
                    <input
                      type="file"
                      className="fileUpload"
                      id={`fileUpload${i}`}
                      accept="image/*"
                      onChange={(e) => handleImageUploader(e, i)}
                    />
                    {coverImage[i] ? (
                      <img src={coverImage[i]} className="upload-cover" alt="" />
                    ) : (
                      <img src={camera} className="upload-img" alt="upload" />
                    )}
                  </label>
                ))}
              </div>
              <h2 className="uploadh22">
                For the cover picture we recommend using the landscape mode.
              </h2>
            </div>
            <div className="locationDIV">
              <h1>Your Ad's Location</h1>
              <span>Location</span>
              <div className="locationInput">
                <input
                  type="text"
                  className="locationInp"
                  value={loacation}
                  onChange={(e) => {
                    setloacation(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="verifyDetails">
            <h1>Review your Details</h1>
            <div className="avatarDiv">
              <div className="avatarDiv2">
                <img alt="avatar" src={avatar}></img>
                <div className="avatarDiv3">
                  <span className="avatarSpan">Name</span>
                  <input
                    type="text"
                    value={userData ? userData.fullname : name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="avatarPhone">
                <span>Your Phone Number</span>
                <input
                  type="number"
                  value={userData ? userData.phoneNumber : number}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="postDiv">
            <span style={{ color: "green" }}>{msg}</span>
            {Adtitle &&
            description &&
            price &&
            images.filter(img => img).length > 0 &&
            loacation &&
            (userData ? userData.fullname : name) &&
            (userData ? userData.phoneNumber : number) ? (
              <button onClick={addCard} className={btnClass}>
                Post now
              </button>
            ) : (
              <button
                onClick={() => {
                  setmsg("Please Fill The Form");
                }}
                className={`${btnClass} disable-btn`}
              >
                Post now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCards;