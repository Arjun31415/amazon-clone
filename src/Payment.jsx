import "./Payment.css";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
	const [{ basket, user }] = useStateValue();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(true);
	const [processing, setProcessing] = useState(true);

	const stripe = useStripe(),
		elements = useElements();
	const handleSubmit = (e) => {};
	function handleChange(e) {
		// Listen for changes in CardElement and display and errors
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	}
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
					<div className="payment__details">
						{/* Stripe stuff */}
						<form action="post" onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<h3>Order Total: {value}</h3>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"₹"}
								/>
								<button
									disabled={
										processing || disabled || succeeded
									}
								>
									<span>
										{processing ? (
											<p>Processing</p>
										) : (
											"Buy Now"
										)}
									</span>
								</button>
							</div>
							{/* Show the errors */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
