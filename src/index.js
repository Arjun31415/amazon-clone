import "./index.css";

import reducer, { initialState } from "./reducer";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./StateProvider";
import reportWebVitals from "./reportWebVitals";

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initalState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
