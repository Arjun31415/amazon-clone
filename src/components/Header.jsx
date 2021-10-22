import "./Header.css";

import { Link } from "react-router-dom";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { auth } from "./firebase";
import { useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export default function Header(props) {
	const [{ basket, user }] = useStateValue();
	const location = useLocation().pathname;
	// console.log("header", user);
	function handleAuth() {
		// console.log("in auth for signout");
		// console.log(auth);
		if (user) {
			auth.signOut();
		}
	}
	return (
		<div className="header">
			<Link to="/">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					className="header__logo"
					alt="Amazon Logo"
				/>
			</Link>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link
					to={user ? location : "/login"}
					// to="/login"
					style={{ textDecoration: "none" }}
				>
					<div onClick={handleAuth} className="header__option">
						<span className="header__optionLine1">
							{"Hello, " + (user ? user.email : "Guest")}
						</span>
						<span className="header__optionLine2">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLine1">
							{" "}
							{"Returns &"}
						</span>
						<span className="header__optionLine2"> {"Orders"}</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLine1"> {"Your"} </span>
					<span className="header__optionLine2"> {"Prime"} </span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
