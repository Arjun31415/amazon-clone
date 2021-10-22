import "./App.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import { auth } from "./components/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "./components/StateProvider";

const promise = loadStripe(
	"pk_test_51Jmh9fSDCQEtZc6SymdoSQ4ICOAbLzwLc83a39WSzFCoeL7x3vkESHGbScFt26TiXO10lRoNLi3pVjG6BBrBIuWU00kyyXsCTm"
);
function App() {
	const [state, dispatch] = useStateValue();
	console.log(state);
	useEffect(() => {
		// will only run once when app component loads.
		auth.onAuthStateChanged((authUser) => {
			console.log("User: ", authUser);

			if (authUser) {
				// the user just logged in or the user was already logged in
				// if you refresh the page it will log back in if you were already logged in.
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//  the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, [dispatch]);

	return (
		// Use BEM convention
		<Router>
			<div className="app">
				{/* Header Component */}
				<Header />

				<Switch>
					{/* Login Page */}
					<Route path="/Login">
						<Login />
					</Route>

					{/* Checkout Page */}
					<Route path="/checkout">
						<Checkout />
					</Route>

					{/* Payment Page */}
					<Route path="/payment">
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/orders">
						<Orders />
					</Route>

					{/* Default route must be at the bottom */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
