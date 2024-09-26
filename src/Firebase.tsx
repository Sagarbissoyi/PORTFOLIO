
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbxaKyM3zYEOcnC56_Xr0eQl2yNn5CRRs",
  authDomain: "portfolio-f581e.firebaseapp.com",
  projectId: "portfolio-f581e",
  storageBucket: "portfolio-f581e.appspot.com",
  messagingSenderId: "543040454100",
  appId: "1:543040454100:web:b0e0a6e3c5d31048f5aa41",
  measurementId: "G-H3XN7Z0J06"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




