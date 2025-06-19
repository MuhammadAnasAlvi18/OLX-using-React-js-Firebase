import { useEffect, useState } from "react";
import Card from "./Card";
import Category from "./Category";
import Banner from "./Banner";
import banner from "../images/banner.PNG";
import Footer from './Footer'
import Navbar from './Navbar'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "./Firebase";
const auth = getAuth(app);
const db = getFirestore(app);

const Main = () => {

  // const [id, setId] = useState("");
  // const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        if(uid){
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);
      
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            // docSnap.data() && setUserData(docSnap.data());
            console.log("User data set:", docSnap.data());
          } else {
            console.log("No such document!");
          }
        }
        
        // setId(uid);
      } else {
        // setId("");
        // setUserData(null);
      }
    });

    // Cleanup function to unsubscribe from auth state changes
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <Category />
      <Banner />
      <div className="container"><h1 className="h1">Fresh recommendations</h1></div>
      <Card />
      <div className="banner-2">
        <img src={banner} alt="banner"></img>
      </div>
      <Footer />
      <div className="footer-last">
        <h2>Free Classifieds in Pakistan . © 2006-2022 OLX</h2>
      </div>
    </>
  );
};

export default Main;
