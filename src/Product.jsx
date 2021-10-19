import "./Product.css";

// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
// import StarIcon from "@mui/icons-material/Star";
// import SvgIcon from "@mui/material/SvgIcon";
import FullStar, { EmptyStar, HalfStar } from "./components/Stars";

import React from "react";
import { v4 as uuidv4 } from "uuid";

function Rating(x) {
	if (typeof x === "undefined")
		// return 0 star rating
		return (
			<>
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
				<EmptyStar key={uuidv4()} className="product__rating__star" />
			</>
		);
	let components = [];
	for (let i = 0; i < Math.floor(x); i++) {
		components.push(
			<FullStar key={uuidv4()} className="product__rating__star" />
		);
	}
	if (x !== Math.floor(x))
		components.push(
			<HalfStar key={uuidv4()} className="product__rating__star" />
		);
	for (let i = 0; i < 5 - Math.ceil(x); i++)
		components.push(
			<EmptyStar key={uuidv4()} className="product__rating__star" />
		);
	return components;
}
function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
function Product({ id, title, image, price, rating }) {
	console.log(price.toFixed(2).toLocaleString());
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>₹</small>
					<strong>{numberWithCommas(price.toFixed(2))}</strong>
				</p>
				<div className="product__rating">{Rating(rating)}</div>
			</div>
			<img src={image} alt={title + "image"} />
			<button>Add to basket</button>
		</div>
	);
}

export default Product;
