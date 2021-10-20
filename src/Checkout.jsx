import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

// import { v4 as uuidv4 } from "uuid";

function Checkout() {
	const [{ basket, user }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
					alt="checkout banner"
				/>
				<div>
					<h3>Hello, {user ? user.email : "Guest"} </h3>
					<h2 className="checkout__title">
						{"Your Shopping Basket"}
					</h2>
					{/* Bunch of basket items */}
					<FlipMove
						leaveAnimation="accordionHorizontal"
						enterAnimation="elevator"
						duration="100"
						// key={uuidv4()}
					>
						{basket.map((item, idx) => (
							<CheckoutProduct
								id={item.id}
								key={item.id + idx.toString()}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</FlipMove>
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
