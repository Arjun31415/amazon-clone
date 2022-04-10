import "./Orders.css";

import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";

import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { db } from "./firebase";
import moment from "moment";
import { useStateValue } from "./StateProvider";

function Order({ order }) {
	console.log(order.data.amount / 100);
	return (
		<div className="order" style={{ border: "1px solid lightgray" }}>
			{/* Put the Product details  */}
			<p>
				{moment.unix(order.data.created).format("Do MMMM YYY, h:mma ")}
			</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item, i) => {
				return (
					<CheckoutProduct
						image={item.image}
						key={item.id + i.toString()}
						price={item.price}
						title={item.title}
						rating={item.rating}
						id={item.id}
						hideBtn={true}
					/>
				);
			})}
			<CurrencyFormat
				renderText={(value) => (
					<h3 className="order__total">{`Order Total: ${value}`}</h3>
				)}
				decimalScale={2}
				value={order.data.amount}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
			/>
		</div>
	);
}

function Orders() {
	const [{ user }] = useStateValue();
	const [orders, setOrders] = useState([]);

	const fetchData = useCallback(async () => {
		console.log("User in orders: ", user);

		try {
			if (user) {
				const myQuery = query(
					collection(db, "users", user?.uid, "orders"),
					orderBy("created", "desc")
				);
				// Get the snapshot which is real-time values and will update when there is a change in the DB
				const ordersSnapshot = await getDocs(myQuery);

				setOrders(
					ordersSnapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				);
			} else {
				setOrders([]);
			}
		} catch (error) {
			console.error(error);
		}
	}, [user]);
	console.log(orders);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return (
		<div className="orders">
			<h1>Your Orders</h1>
			{orders.map((order) => {
				console.log(order.data);
				// The actual items
				return <Order order={order} />;
			})}
		</div>
	);
}

export default Orders;
