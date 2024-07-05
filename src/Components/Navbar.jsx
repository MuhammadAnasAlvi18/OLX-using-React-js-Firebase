import React, { useEffect, useState } from "react";
import logo from "../images/olx-logo-vector.png";
import logoBlack from "../images/olx-logo-vector-black.png";
import sellBTN from "../images/BUTTON.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCarRear,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import app from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth/cordova";

const auth = getAuth(app);
const db = getFirestore(app);

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState(false);
  const [selected, setselected] = useState("");
  const options = [
    "Azad Kashmir, Pakistan",
    "Balochistan, Pakistan",
    "Khyber Pakhtunkhwa, Pakistan",
    "Punjab, Pakistan",
    "Sindh, Pakistan",
  ];
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })
  const [loginError, setLoginError] = useState({});
  const [errors, setErrors] = useState({});
  const [authStatus, setAuthStatus] = useState("");
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState(null);

  const validate = () => {
    let errors = {};
  
    if (!formData.fullname.trim()) {
      errors.fullname = "Full name is required";
    }
  
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
  
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid, it should be 11 digits";
    }
  
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
  
    setErrors(errors);
  
    return Object.keys(errors).length === 0;
  };

  const validateLogin = () => {
    let errors = {};

    if (!loginFormData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginFormData.email)) {
      errors.email = "Email address is invalid";     
  }

    if (!loginFormData.password) {
      errors.password = "Password is required";
    } else if (loginFormData.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    
      setLoginError(errors);

      return Object.keys(errors).length === 0;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  
    // Validate the specific field on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: ""
    }));
  
    // Optionally revalidate all fields (or specific field)
    validate();
  };

  const handleChangeLogin = (e) => {
    setLoginFormData({...loginFormData, [e.target.name]: e.target.value });

    // Validate the specific field on change
    setLoginError((prevErrors) => ({
     ...prevErrors,
      [e.target.name]: ""
    }));
    // Optionally revalidate all fields (or specific field)
    validateLogin();
  }

  const handleSignup = () => {
    setLoader(true);
    validate();
  
    if (validate()) {
      if(formData){
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          const id = user.uid;
          id && setDoc(doc(db, "users", id), formData).then(() =>{
            // empty form data
            setFormData({
              fullname: "",
              email: "",
              phoneNumber: "",
              password: "",
            });
            setAuthStatus("Signed Up Successful");
            setLoader(false);
            setTimeout(()=>{
              setAuthStatus("");
            },2000);
            setTimeout(()=>{
              setShow2(false);
            },1000);
          });

          // ...
        })
        .catch((error) => {
          setLoader(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message , "Error");
          // ..
        });
      }
    } else {
      setLoader(false);
      console.log("Form is invalid, please correct the errors", errors);
    }
  };

  const handleLogin = () => {
    setLoader(true);
    validateLogin();

    if (validateLogin()) {
      if(loginFormData){
        const { email, password } = loginFormData;
        if(email && password){
          signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log("User signed in successfully", user);
            setUserData(user);
            setAuthStatus("Login Successful");
            setLoader(false);
            setLoginFormData({
              email: "",
              password: "",
            });
            setTimeout(()=>{
              setAuthStatus("");
            },2000);
            setTimeout(()=>{
              setShow(false);
            },1000);
          })
         .catch((error) => {
            setLoader(false);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error signing in", errorMessage);
            setLoginError({password: "User Not Found"})
            // Handle the error, such as displaying an error message to the user
          });
        }
      }
    } else {
      setLoader(false);
      console.log("Please fill email and password");
    }
  };

  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value });
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setAuthStatus(false);
    setFormData({
      fullname: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    setErrors({});
  }
  const handleShow = () => {
    setShow(true);
    setAuthStatus(false);
    setShow2(false);
    setFormData({
      fullname: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    setErrors({});
  }

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => {
    setShow2(false);
    setAuthStatus(false);
    setFormData({
      fullname: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    setErrors({});
  }
  const handleShow2 = () => {
    setShow2(true);
    setAuthStatus(false);
    setShow(false);
    setFormData({
      fullname: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    setErrors({});
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        if(uid){
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            docSnap.data() && setUserData(docSnap.data());console.log(userData);
            
          } else {
            console.log("No such document!");
          }
        }
        
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      setUserData(null);
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  }

  return (
    <>
      <div className="olx_navbar">
        <div className="container">
          <div className="olx_navbar_top">
            <img
              src={logo}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <a href="#">
              <FontAwesomeIcon icon={faCarRear}></FontAwesomeIcon>Motors
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>Property
            </a>
          </div>

          <div className="olx_navbar_search">
            <img
              src={logoBlack}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <div
              className="location_input"
              onClick={() => {
                setisActive(!isActive);
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                type="text"
                id="input"
                placeholder="Pakistan"
                value={selected}
                readOnly
              />
              <FontAwesomeIcon
                className={isActive ? "locationSVGup" : "locationSVG"}
                icon={faAngleDown}
              />
              {isActive && (
                <div className="dropdown">
                  <ul>
                    {options.map((option) => {
                      return (
                        <li
                          key={Math.floor(Math.random() * 987654321)}
                          onClick={(e) => {
                            setselected(option);
                            setisActive(false);
                          }}
                        >
                          <FontAwesomeIcon icon={faLocationDot} /> {option}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div className="olx_navbar_search_input">
              <input
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            {userData ? 
            <a href="#" className="olx_navbar_login_btn" onClick={handleLogout}>
            Logout
            </a> :
            <a href="#" className="olx_navbar_login_btn" onClick={handleShow}>
              Login
            </a>
            }

            {
              userData ?
              <Link to="/sell">
              <img src={sellBTN} className="olx_navbar_sell_img" alt="sell" />
              </Link> :
              <Link to="javascript:void(0)" onClick={handleShow}>
                <img src={sellBTN} className="olx_navbar_sell_img" alt="sell" />
              </Link>
            }
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="login-modal" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
                src={logo}
                alt="logo"
                width={60}
                height={40}
                onClick={() => {
                    navigate("/");
                }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
            <label>
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                required
                value={loginFormData.email}
                onChange={handleChangeLogin}
                autoComplete="off"
              />
              <span className="detailsSpan-2 text-danger">
                {loginError.email && loginError.email}
              </span>
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                required
                value={loginFormData.password}
                onChange={handleChangeLogin}
                autoComplete="off"
              />
              <span className="detailsSpan-2 text-danger">
              {loginError.password && loginError.password}
              </span>
            </label>
              <span className="detailsSpan-2 text-success">
                {authStatus && authStatus}
              </span>
            <h6>Don't have an account? <a href="#" onClick={handleShow2}>Signup here</a></h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogin}>
            {loader ? <div className="spinner"></div> : "Login"}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} className="login-modal" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
                src={logo}
                alt="logo"
                width={60}
                height={40}
                onClick={() => {
                    navigate("/");
                }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="login-modal-body">
            <label>
              <span>Full Name</span>
              <input
                type="text"
                required
                name="fullname"
                autoComplete="off"
                value={formData.fullname}
                onChange={handleChange}
              />
              <span className="detailsSpan-2 text-danger">
                {errors.fullname && errors.fullname}
              </span>
            </label>
            <label>
              <span>Email Address</span>
              <input
                type="email"
                required
                name="email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="detailsSpan-2 text-danger">
                {errors.email && errors.email}
              </span>
            </label>
            <label>
              <span>Phone Number</span>
              <input
                type="number"
                required
                name="phoneNumber"
                autoComplete="off"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <span className="detailsSpan-2 text-danger">
                {errors.phoneNumber && errors.phoneNumber}
              </span>
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                required
                name="password"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="detailsSpan-2 text-danger">
                {errors.password && errors.password}
              </span>
            </label>
              <span className="detailsSpan-2 text-success">
                {authStatus && authStatus}
              </span>
            <h6>Already have an account? <a href="#" onClick={handleShow}>Login here</a></h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSignup}>
            {loader ? <div className="spinner"></div> : "Signup"} 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
