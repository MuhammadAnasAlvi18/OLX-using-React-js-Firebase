import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDsZp3bC_K6OkvrcLUdvLN7IGN3omewyiU",
  authDomain: "olx-clone-react-firebase.firebaseapp.com",
  projectId: "olx-clone-react-firebase",
  storageBucket: "olx-clone-react-firebase.appspot.com",
  messagingSenderId: "215902858237",
  appId: "1:215902858237:web:afdaf63433b5a640b60794",
  measurementId: "G-DQ97HG8PWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app);


export default app;

