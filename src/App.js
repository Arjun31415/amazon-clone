import "./App.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

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
						<Payment />
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
