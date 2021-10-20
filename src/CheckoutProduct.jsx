import "./CheckoutProduct.css";

import Rating from "./components/Rating";
import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
	const [state, dispatch] = useStateValue();
	function removeFromBasket() {
		console.log(id);
		dispatch({
			type: "DELETE_FROM_BASKET",
			id: id,
		});
	}
	return (
		<div className="checkoutProduct">
			<img
				className="checkoutProduct__image"
				src={image}
				alt={title + " img"}
			/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					{/* Rupee symbol */}
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">{Rating(rating)}</div>
				<button onClick={removeFromBasket}>
					{"Remove from Basket"}
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
