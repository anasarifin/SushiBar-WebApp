const initialValue = {
	cartList: [],
	isPending: false,
	isRejected: false,
	isFulfilled: false,
};

const moveToCart = (state = initialValue, action) => {
	// if (action.type === "COUNT_ADD") {
	// 	return {
	//         ...state,
	//         number: state.number += action.payLoad;
	//     }
	// }
	switch (action.type) {
		case "CART_ADD_PENDING":
			return {
				...state,
				isPending: true,
			};
		case "CART_ADD_REJECTED":
			return {
				...state,
				isRejected: true,
			};
		case "CART_ADD_FULFILLED":
			return {
				...state,
				isFulfilled: true,
				cartList: [...state.cartList, action.payload],
			};
		case "CART_ADD":
			return {
				...state,
				cartList: [...state.cartList, action.payload],
			};
		case "CART_RESET":
			return {
				...state,
				cartList: [],
			};
		default:
			return state;
	}
};

export default moveToCart;

//pending
//rejected
//fulfilled
