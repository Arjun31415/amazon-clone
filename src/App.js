import "./App.css";

import Header from "./Header";
import Home from "./Home";
import React from "react";

function App() {
	return (
		// Use BEM convention
		<div className="app">
			<Header />
			<Home />
		</div>
		// Header component
	);
}

export default App;
