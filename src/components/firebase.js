// const functions = require("firebase-functions");
// import functions from "firebase-functions";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

let config = process.env;
// use firebase config when deployed to firebase
// const deployedToFirebase = process.env.NODE_ENV === "production";
// if (deployedToFirebase) {
// 	config = functions.config().env;
// }
const firebaseConfig = {
	apiKey: config.REACT_APP_FIREBASE_API_KEY,
	authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: "clone-5943a",
	storageBucket: "clone-5943a.appspot.com",
	messagingSenderId: config.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: config.REACT_APP_FIREBASE_APP_ID,
	measurementId: config.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
console.log("FIrebase", firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
