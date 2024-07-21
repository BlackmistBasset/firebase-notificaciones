import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDA8CHGH7EZ3Jmq9Z-RZgTXKRxQvlphKak",
  authDomain: "fir-notificaciones-fc137.firebaseapp.com",
  projectId: "fir-notificaciones-fc137",
  storageBucket: "fir-notificaciones-fc137.appspot.com",
  messagingSenderId: "1029175301006",
  appId: "1:1029175301006:web:bfa58b5e10a18343234adf",
  measurementId: "G-FLYREB5XQQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
