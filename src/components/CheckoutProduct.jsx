import "./CheckoutProduct.css";

import React, { forwardRef } from "react";

import Rating from "./Rating";
import { useStateValue } from "./StateProvider";
import { v4 as uuidv4 } from "uuid";

const CheckoutProduct = forwardRef(
	({ id, image, title, price, rating, hideBtn }, ref) => {
		const [, dispatch] = useStateValue();
		function removeFromBasket() {
			// console.log(id);
			dispatch({
				type: "DELETE_FROM_BASKET",
				id: id,
			});
		}
		return (
			<div key={uuidv4()} className="checkoutProduct" ref={ref}>
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
					<div className="checkoutProduct__rating">
						{Rating(rating)}
					</div>
					{!hideBtn && (
						<button onClick={removeFromBasket}>
							{"Remove from Basket"}
						</button>
					)}
				</div>
			</div>
		);
	}
);

export default CheckoutProduct;
