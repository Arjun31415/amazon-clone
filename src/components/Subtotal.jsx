import "./Subtotal.css";

import CurrencyFormat from "react-currency-format";
import React from "react";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router";
import { useStateValue } from "./StateProvider";

function Subtotal() {
	const history = useHistory();
	const [{ basket }] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} {"items"}):
							<strong>{`${value}`}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							{"This order contains a gift"}
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"₹"}
			/>
			<button onClick={(e) => history.push("/payment")}>
				Proceed to Checkout
			</button>
		</div>
	);
}

export default Subtotal;
