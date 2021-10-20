export const initialState = {
	basket: [],
	user: null,
};

// Selector
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	// console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "DELETE_FROM_BASKET": {
			// console.log(state.basket);
			// console.log("action id: ", action.id);
			const idx = state.basket.findIndex((item) => item.id === action.id);
			let newBasket = [...state.basket];
			if (idx >= 0) {
				// newBasket.splice(idx, 1);
				return {
					...state,
					basket: state.basket.filter((_item, i) => idx !== i),
				};
			} else {
				console.warn(
					`Cannot remove this product (id:${action.id}.
                    Not found in Basket (basket: ${state.basket}) `
				);
				return state;
			}
		}
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
