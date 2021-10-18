import "./Header.css";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Header() {
	return (
		<div className="header">
			<img
				src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
				className="header__logo"
				alt="Amazon Logo"
			/>
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLine1"> Hello User</span>
					<span className="header__optionLine2"> Sign In</span>
				</div>

				<div className="header__option">
					<span className="header__optionLine1"> Returns &</span>
					<span className="header__optionLine2"> Orders</span>
				</div>

				<div className="header__option">
					<span className="header__optionLine1"> Your</span>
					<span className="header__optionLine2"> Prime</span>
				</div>

				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo header__basketCount">
						0
					</span>
				</div>
			</div>
		</div>
	);
}
