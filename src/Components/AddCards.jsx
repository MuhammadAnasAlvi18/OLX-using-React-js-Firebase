import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../App.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/olx-logo-vector-black.png";
import { Link } from "react-router-dom";
import camera from "../images/photo-camera.png";
import avatar from "../images/avatar.png";
import store from "../Redux/store";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "./Firebase";

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
  const [colors, setcolors] = useState("");
  const [coverImage, setcoverImage] = useState(null);
  const [coverImageURL, setcoverImageURL] = useState([]);
  const [btnClass, setbtnClass] = useState("");
  const [image1, setimage1] = useState([]);
  const [image2, setimage2] = useState([]);
  const [image3, setimage3] = useState([]);
  const [image4, setimage4] = useState([]);
  const [image5, setimage5] = useState([]);
  const [image6, setimage6] = useState([]);
  const [image7, setimage7] = useState([]);
  const [image8, setimage8] = useState([]);
  const [image9, setimage9] = useState([]);
  const [image10, setimage10] = useState([]);
  const [image11, setimage11] = useState([]);
  const [image12, setimage12] = useState([]);
  const [image13, setimage13] = useState([]);
  const [image14, setimage14] = useState([]);
  const [image15, setimage15] = useState([]);
  const [image16, setimage16] = useState([]);
  const [image17, setimage17] = useState([]);
  const [image18, setimage18] = useState([]);
  const [image19, setimage19] = useState([]);
  const [files, setfiles] = useState([]);
  const [filesURL, setfilesURL] = useState([]);
  const stores = store.getState();
  const uid = "123456789";
  const db = getFirestore(app);
  const storage = getStorage(app);

  useEffect(async () => {
    setcategoryy(stores[stores.length - 1].categories);
    setsubcategoryy(stores[stores.length - 1].subcategories);
    setthirdcategory(stores[stores.length - 1].thirdcategory);
  }, []);

  const addCard = async (e) => {
    setbtnClass("active");
    e.preventDefault();
    files.map((imagesURL) => {
      filesURL.push(imagesURL);
      setfilesURL(filesURL);
    });

    const storageRef = ref(storage, `images/${coverImage.name}`);
    const uploadTask = uploadBytesResumable(storageRef, coverImage);
    let ImagedownloadURL;

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        ImagedownloadURL = downloadURL;
        coverImageURL.push(downloadURL);
        setcoverImageURL(coverImageURL);
        console.log(downloadURL);
        console.log(ImagedownloadURL);
        console.log(coverImageURL);
        setcoverImage(null);
      });
    });

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
          cover: coverImageURL,
          moreimages: filesURL,
          time: new Date().getTime(),
        });
        console.log("Document written with ID: ", docRef.id);
        setmsg("Your Ad Post Successfully");
        setbtnClass("");
        setcolors("green");
        setTimeout(() => {
          setmsg("");
        }, 2000);
      } catch (e) {
        console.error("Error adding document: ", e);
        setcolors("red");
      }
      setAdtitle("");
      setdescription("");
      setcondition("");
      setloacation("");
      setname("");
      setprice("");
      setnumber("");
      setcoverImage(null);
      setcoverImageURL([]);
    }, 4000);
  };

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
          <img src={logo}></img>
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
              <h3>{categoryy}</h3>
              <h3>/</h3>
              <h3>{subcategoryy}</h3>
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
                rows='5'
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
            {
              categoryy === "Mobiles" && 
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
            }
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
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img = e.target.files[0];
                        setcoverImage(img);
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img1 = e.target.files[0];
                        console.log(img1.name);
                        console.log(img1, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef1 = ref(
                          storage,
                          `moreimages/${img1.name}`
                        );
                        const uploadTask1 = uploadBytesResumable(
                          storageRef1,
                          img1
                        );
                        let ImagedownloadURL1;

                        uploadTask1.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask1.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL1 = downloadURL;
                              image1.push(ImagedownloadURL1);
                              setimage1(image1);
                              console.log(image1);
                              ImagedownloadURL1 = "";
                              if (image1.length > 0) {
                                files.push(image1[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img2 = e.target.files[0];
                        console.log(img2, "IMAGE TWO UPLOAD");
                        e.preventDefault();
                        const storageRef2 = ref(
                          storage,
                          `moreimages/${img2.name}`
                        );
                        const uploadTask2 = uploadBytesResumable(
                          storageRef2,
                          img2
                        );
                        let ImagedownloadURL2;

                        uploadTask2.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask2.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL2 = downloadURL;
                              image2.push(ImagedownloadURL2);
                              setimage2(image2);
                              console.log(image2);
                              ImagedownloadURL2 = "";
                              if (image2.length > 0) {
                                files.push(image2[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img3 = e.target.files[0];
                        console.log(img3.name);
                        console.log(img3, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef3 = ref(
                          storage,
                          `moreimages/${img3.name}`
                        );
                        const uploadTask3 = uploadBytesResumable(
                          storageRef3,
                          img3
                        );
                        let ImagedownloadURL3;

                        uploadTask3.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask3.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL3 = downloadURL;
                              image3.push(ImagedownloadURL3);
                              setimage3(image3);
                              console.log(image3);
                              ImagedownloadURL3 = "";
                              if (image3.length > 0) {
                                files.push(image3[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img4 = e.target.files[0];
                        console.log(img4.name);
                        console.log(img4, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef4 = ref(
                          storage,
                          `moreimages/${img4.name}`
                        );
                        const uploadTask4 = uploadBytesResumable(
                          storageRef4,
                          img4
                        );
                        let ImagedownloadURL4;

                        uploadTask4.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask4.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL4 = downloadURL;
                              image4.push(ImagedownloadURL4);
                              setimage4(image4);
                              console.log(image4);
                              ImagedownloadURL4 = "";
                              if (image4.length > 0) {
                                files.push(image4[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img5 = e.target.files[0];
                        console.log(img5.name);
                        console.log(img5, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef5 = ref(
                          storage,
                          `moreimages/${img5.name}`
                        );
                        const uploadTask5 = uploadBytesResumable(
                          storageRef5,
                          img5
                        );
                        let ImagedownloadURL5;

                        uploadTask5.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask5.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL5 = downloadURL;
                              image5.push(ImagedownloadURL5);
                              setimage5(image5);
                              console.log(image5);
                              ImagedownloadURL5 = "";
                              if (image5.length > 0) {
                                files.push(image5[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img6 = e.target.files[0];
                        console.log(img6.name);
                        console.log(img6, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef6 = ref(
                          storage,
                          `moreimages/${img6.name}`
                        );
                        const uploadTask6 = uploadBytesResumable(
                          storageRef6,
                          img6
                        );
                        let ImagedownloadURL6;

                        uploadTask6.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask6.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL6 = downloadURL;
                              image6.push(ImagedownloadURL6);
                              setimage6(image6);
                              console.log(image6);
                              ImagedownloadURL6 = "";
                              if (image6.length > 0) {
                                files.push(image6[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img7 = e.target.files[0];
                        console.log(img7.name);
                        console.log(img7, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef7 = ref(
                          storage,
                          `moreimages/${img7.name}`
                        );
                        const uploadTask7 = uploadBytesResumable(
                          storageRef7,
                          img7
                        );
                        let ImagedownloadURL7;

                        uploadTask7.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask7.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL7 = downloadURL;
                              image7.push(ImagedownloadURL7);
                              setimage7(image7);
                              console.log(image7);
                              ImagedownloadURL7 = "";
                              if (image7.length > 0) {
                                files.push(image7[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img8 = e.target.files[0];
                        console.log(img8.name);
                        console.log(img8, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef8 = ref(
                          storage,
                          `moreimages/${img8.name}`
                        );
                        const uploadTask8 = uploadBytesResumable(
                          storageRef8,
                          img8
                        );
                        let ImagedownloadURL8;

                        uploadTask8.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask8.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL8 = downloadURL;
                              image8.push(ImagedownloadURL8);
                              setimage8(image8);
                              console.log(image8);
                              ImagedownloadURL8 = "";
                              if (image8.length > 0) {
                                files.push(image8[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img9 = e.target.files[0];
                        console.log(img9.name);
                        console.log(img9, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef9 = ref(
                          storage,
                          `moreimages/${img9.name}`
                        );
                        const uploadTask9 = uploadBytesResumable(
                          storageRef9,
                          img9
                        );
                        let ImagedownloadURL9;

                        uploadTask9.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask9.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL9 = downloadURL;
                              image9.push(ImagedownloadURL9);
                              setimage9(image9);
                              console.log(image9);
                              ImagedownloadURL9 = "";
                              if (image9.length > 0) {
                                files.push(image9[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img10 = e.target.files[0];
                        console.log(img10.name);
                        console.log(img10, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef10 = ref(
                          storage,
                          `moreimages/${img10.name}`
                        );
                        const uploadTask10 = uploadBytesResumable(
                          storageRef10,
                          img10
                        );
                        let ImagedownloadURL10;

                        uploadTask10.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask10.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL10 = downloadURL;
                              image10.push(ImagedownloadURL10);
                              setimage10(image10);
                              console.log(image10);
                              ImagedownloadURL10 = "";
                              if (image10.length > 0) {
                                files.push(image10[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img11 = e.target.files[0];
                        console.log(img11.name);
                        console.log(img11, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef11 = ref(
                          storage,
                          `moreimages/${img11.name}`
                        );
                        const uploadTask11 = uploadBytesResumable(
                          storageRef11,
                          img11
                        );
                        let ImagedownloadURL11;

                        uploadTask11.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask11.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL11 = downloadURL;
                              image11.push(ImagedownloadURL11);
                              setimage11(image11);
                              console.log(image11);
                              ImagedownloadURL11 = "";
                              if (image11.length > 0) {
                                files.push(image11[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img12 = e.target.files[0];
                        console.log(img12.name);
                        console.log(img12, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef12 = ref(
                          storage,
                          `moreimages/${img12.name}`
                        );
                        const uploadTask12 = uploadBytesResumable(
                          storageRef12,
                          img12
                        );
                        let ImagedownloadURL12;

                        uploadTask12.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask12.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL12 = downloadURL;
                              image12.push(ImagedownloadURL12);
                              setimage12(image12);
                              console.log(image12);
                              ImagedownloadURL12 = "";
                              if (image12.length > 0) {
                                files.push(image12[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img13 = e.target.files[0];
                        console.log(img13.name);
                        console.log(img13, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef13 = ref(
                          storage,
                          `moreimages/${img13.name}`
                        );
                        const uploadTask13 = uploadBytesResumable(
                          storageRef13,
                          img13
                        );
                        let ImagedownloadURL13;

                        uploadTask13.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask13.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL13 = downloadURL;
                              image13.push(ImagedownloadURL13);
                              setimage13(image13);
                              console.log(image13);
                              ImagedownloadURL13 = "";
                              if (image13.length > 0) {
                                files.push(image13[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img14 = e.target.files[0];
                        console.log(img14.name);
                        console.log(img14, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef14 = ref(
                          storage,
                          `moreimages/${img14.name}`
                        );
                        const uploadTask14 = uploadBytesResumable(
                          storageRef14,
                          img14
                        );
                        let ImagedownloadURL14;

                        uploadTask14.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask14.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL14 = downloadURL;
                              image14.push(ImagedownloadURL14);
                              setimage14(image14);
                              console.log(image14);
                              ImagedownloadURL14 = "";
                              if (image14.length > 0) {
                                files.push(image14[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img15 = e.target.files[0];
                        console.log(img15.name);
                        console.log(img15, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef15 = ref(
                          storage,
                          `moreimages/${img15.name}`
                        );
                        const uploadTask15 = uploadBytesResumable(
                          storageRef15,
                          img15
                        );
                        let ImagedownloadURL15;

                        uploadTask15.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask15.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL15 = downloadURL;
                              image15.push(ImagedownloadURL15);
                              setimage15(image15);
                              console.log(image15);
                              ImagedownloadURL15 = "";
                              if (image15.length > 0) {
                                files.push(image15[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img16 = e.target.files[0];
                        console.log(img16.name);
                        console.log(img16, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef16 = ref(
                          storage,
                          `moreimages/${img16.name}`
                        );
                        const uploadTask16 = uploadBytesResumable(
                          storageRef16,
                          img16
                        );
                        let ImagedownloadURL16;

                        uploadTask16.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask16.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL16 = downloadURL;
                              image16.push(ImagedownloadURL16);
                              setimage16(image16);
                              console.log(image16);
                              ImagedownloadURL16 = "";
                              if (image16.length > 0) {
                                files.push(image16[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img17 = e.target.files[0];
                        console.log(img17.name);
                        console.log(img17, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef17 = ref(
                          storage,
                          `moreimages/${img17.name}`
                        );
                        const uploadTask17 = uploadBytesResumable(
                          storageRef17,
                          img17
                        );
                        let ImagedownloadURL17;

                        uploadTask17.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask17.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL17 = downloadURL;
                              image17.push(ImagedownloadURL17);
                              setimage17(image17);
                              console.log(image17);
                              ImagedownloadURL17 = "";
                              if (image17.length > 0) {
                                files.push(image17[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img18 = e.target.files[0];
                        console.log(img18.name);
                        console.log(img18, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef18 = ref(
                          storage,
                          `moreimages/${img18.name}`
                        );
                        const uploadTask18 = uploadBytesResumable(
                          storageRef18,
                          img18
                        );
                        let ImagedownloadURL18;

                        uploadTask18.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask18.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL18 = downloadURL;
                              image18.push(ImagedownloadURL18);
                              setimage18(image18);
                              console.log(image18);
                              ImagedownloadURL18 = "";
                              if (image18.length > 0) {
                                files.push(image18[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
                <label className="uploadCards">
                  <input
                    type="file"
                    className="fileUpload"
                    id="fileUpload"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        let img19 = e.target.files[0];
                        console.log(img19.name);
                        console.log(img19, "IMAGE ONE UPLOAD");
                        e.preventDefault();
                        const storageRef19 = ref(
                          storage,
                          `moreimages/${img19.name}`
                        );
                        const uploadTask19 = uploadBytesResumable(
                          storageRef19,
                          img19
                        );
                        let ImagedownloadURL19;

                        uploadTask19.on("state_changed", (snapshot) => {
                          getDownloadURL(uploadTask19.snapshot.ref).then(
                            (downloadURL) => {
                              console.log("File available at", downloadURL);
                              ImagedownloadURL19 = downloadURL;
                              image19.push(ImagedownloadURL19);
                              setimage19(image19);
                              console.log(image19);
                              ImagedownloadURL19 = "";
                              if (image19.length > 0) {
                                files.push(image19[0]);
                                setfiles(files);
                                console.log(files);
                              }
                            }
                          );
                        });
                      }
                    }}
                  ></input>
                  <img src={camera} className="upload-img"></img>
                </label>
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
                <img src={avatar}></img>
                <div className="avatarDiv3">
                  <span className="avatarSpan">Name</span>
                  <input
                    type="text"
                    value={name}
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
                  value={number}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="postDiv">
            <span style={{ color: colors }}>{msg}</span>
            <button onClick={addCard} className={btnClass}>
              Post now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCards;
