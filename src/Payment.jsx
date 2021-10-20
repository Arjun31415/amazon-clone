import "./Payment.css";

import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import React from "react";
import { useStateValue } from "./StateProvider";

function Payment() {
	const [{ basket, user }] = useStateValue();
	return (
		<div className="payment">
			<div className="payment__container">
				{/* Delivery Address */}
				<h1>
					Checkout (<Link to="/checkout">{basket?.length}</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>12345 Jeff Bezoz Road</p>
						<p>LA,USA</p>
					</div>
				</div>
				{/* Review Items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review Items and Delivery </h3>
					</div>
					<div className="payment__items">
						{/* Show all the products in the basket  */}
						{basket.map((item, i) => (
							<CheckoutProduct
								key={item.id + i.toString()}
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								image={item.image}
							/>
						))}
					</div>
				</div>

				{/* Payment Method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">{/* Stripe stuff */}</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
