import "./Product.css";

import Rating from "./Rating";
import React from "react";
import { useStateValue } from "./StateProvider";

function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
function Product({ id, title, image, price, rating }) {
	const [, dispatch] = useStateValue();
	const addToBasket = () => {
		// Add the item into the Data Layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
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
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
