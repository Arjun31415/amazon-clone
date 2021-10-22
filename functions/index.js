require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// API

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

// API routes

app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
	const total = req.query.total;
	console.log("Payment request received: ", total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // currency in paise
		currency: "inr",
	});
	console.log("\n\nPayment intent:\n\n", paymentIntent);
	// request succeeded and a new resource is created
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});
// Listen Command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-5943a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
