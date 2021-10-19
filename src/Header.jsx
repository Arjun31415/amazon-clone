import "./Header.css";

import { Link } from "react-router-dom";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";

export default function Header() {
	const [{ basket }] = useStateValue();

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
				<div className="header__option">
					<span className="header__optionLine1"> Hello, Sign In</span>
					<span className="header__optionLine2">
						Accounts & Lists
					</span>
				</div>

				<div className="header__option">
					<span className="header__optionLine1"> Returns &</span>
					<span className="header__optionLine2"> Orders</span>
				</div>

				<div className="header__option">
					<span className="header__optionLine1"> Your</span>
					<span className="header__optionLine2"> Prime</span>
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
