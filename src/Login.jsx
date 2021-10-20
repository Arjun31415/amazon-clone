import "./Login.css";

import { Link, useHistory } from "react-router-dom";

import React from "react";

export default function Login(props) {
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
					<input type="text" className="" />

					<h5>Password</h5>
					<input type="password" className="" />
					<button type="submit" className="login__siginInBtn">
						Sign In
					</button>
				</form>
				<p>
					By continuing, you agree to AMAZON-CLONE's Conditions of Use
					and Privacy Notice.
				</p>
				<p> New to AMAZON-CLONE? </p>
				<button className="login__signUpBtn">Create Account</button>
			</div>
		</div>
	);
}
