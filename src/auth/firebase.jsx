
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9TfxdCTWU7FNK2OKL4eM-qsqNLvCz9lg",
  authDomain: "arched-logic-401109.firebaseapp.com",
  projectId: "arched-logic-401109",
  storageBucket: "arched-logic-401109.appspot.com",
  messagingSenderId: "189799975518",
  appId: "1:189799975518:web:d8a39384e0c77e2edb02cf",
  measurementId: "G-RY8TDYYVKD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
