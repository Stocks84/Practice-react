import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqmxwUGiu3ArRopCU_mEK2_USaJdhQ_BA",
    authDomain: "catch-of-the-day-ws84.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ws84-default-rtdb.europe-west1.firebasedatabase.app",
  });

  const base = Rebase.createClass(firebaseApp.database());

  // This is a named export
  export { firebaseApp };

  // This is a default export
  export default base;