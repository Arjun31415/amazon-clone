import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase, { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyDXPt15SJP0yqmfxIGmICz2QpxpNbgzCQ8",
	authDomain: "clone-5943a.firebaseapp.com",
	projectId: "clone-5943a",
	storageBucket: "clone-5943a.appspot.com",
	messagingSenderId: "233487007814",
	appId: "1:233487007814:web:420e0fe544e4d8880c0a47",
	measurementId: "G-P01WSGRTQ0",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
