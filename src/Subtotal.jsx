import "./Subtotal.css";

import CurrencyFormat from "react-currency-format";
import React from "react";
import { useStateValue } from "./StateProvider";

function getBasketTotal(basket) {
	let price = 0;
	for (let item of basket) price += item.price;

	return price;
}
function Subtotal() {
	const [{ basket }] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items):
							<strong>{`${value}`}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
