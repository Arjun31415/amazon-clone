import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
					alt="checkout banner"
				/>
				<div>
					<h2 className="checkout__title">
						{"Your Shopping Basket"}

						{/* Bunch of basket items */}
					</h2>
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
				<h2>{"Subtotal"}</h2>
			</div>
		</div>
	);
}

export default Checkout;
