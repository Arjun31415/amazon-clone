import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDXPt15SJP0yqmfxIGmICz2QpxpNbgzCQ8",
	authDomain: "clone-5943a.firebaseapp.com",
	projectId: "clone-5943a",
	storageBucket: "clone-5943a.appspot.com",
	messagingSenderId: "233487007814",
	appId: "1:233487007814:web:420e0fe544e4d8880c0a47",
	measurementId: "G-P01WSGRTQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
