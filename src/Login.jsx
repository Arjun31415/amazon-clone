import "./Login.css";

import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "@firebase/auth";

import { auth } from "./firebase";

export default function Login(props) {
	const history = useHistory();
	function signIn(e) {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				console.log(userCredential);
				// const user = userCredential.user;
				if (userCredential) {
					history.push("/");
				}
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error({ code: errorCode, message: errorMessage });
			});
	}
	function signUp(e) {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				console.log(userCredential);
				// const user = userCredential.user;
				if (userCredential) {
					history.push("/");
				}
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
				console.error({ code: errorCode, message: errorMessage });
				// ..
			});
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="Amazon Logo"
				/>
			</Link>
			<div className="login__container">
				<h1>{"Sign In"}</h1>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="login__siginInBtn"
						onClick={signIn}
					>
						Sign In
					</button>
				</form>
				<p>
					By continuing, you agree to AMAZON-CLONE's Conditions of Use
					and Privacy Notice.
				</p>
				<p> New to AMAZON-CLONE? </p>
				<button className="login__signUpBtn" onClick={signUp}>
					Create Account
				</button>
			</div>
		</div>
	);
}
