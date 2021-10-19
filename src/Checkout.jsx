import "./Checkout.css";

import React from "react";
import Subtotal from "./Subtotal";

function Checkout() {
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
				</div>
			</div>

			<div className="checkout__right">
				{/* TODO: Add the correct basket of items  */}
				<Subtotal basket={[1, 2, 3, 4]} />
				<h2>{"Subtotal"}</h2>
			</div>
		</div>
	);
}

export default Checkout;
