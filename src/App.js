import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import React from "react";

function App() {
	return (
		// Use BEM convention
		<Router>
			<div className="app">
				{/* Header Component */}
				<Header />
				<Switch>
					<Route path="/Login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Checkout />
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
