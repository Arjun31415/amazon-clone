import "./Payment.css";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
	const [{ basket, user }] = useStateValue();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);
	const history = useHistory();
	const [, dispatch] = useStateValue();

	useEffect(() => {
		// generate stripe secret
		// whenever the basket changes the secret changes
		const getClientsSecret = async () => {
			const res = await axios({
				method: "post",
				// Stripe expects the total in a currencies sub-units
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			});
			setClientSecret(res.data.clientSecret);
		};
		getClientsSecret();
	}, [basket]);
	// console.log("Client Secret: ", clientSecret);

	const stripe = useStripe(),
		elements = useElements();
	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);
		await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(async ({ paymentIntent }) => {
				// paymentIntent is the payment confirmation

				// ver8 Firebase SDK

				// db.collection("users")
				// 	.doc(user?.uid)
				// 	.collection("orders")
				// 	.doc(paymentIntent.id)
				// 	.set({
				// 		basket: basket,
				// 		amount: paymentIntent.amount,
				// 		created: paymentIntent.created,
				// 	});
				const docRef = await setDoc(
					doc(db, "users", user?.uid, "orders", paymentIntent.id),
					{
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					}
				);
				console.log("Payment succeeded\n");
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				dispatch({ type: "EMPTY_BASKET" });

				history.replace("/orders");
				console.log("Document inserted: ", docRef);
			});
	};
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
