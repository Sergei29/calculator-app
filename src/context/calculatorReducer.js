import actionsTypes from "./actions.types";
import { calculate, backSpace } from "./utils";

export const INITIAL_STATE = {
	currentNumber: null,
	operation: "",
	accumulator: null,
	total: null,
	expression: [],
};

export const calculatorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionsTypes.RESET:
			return INITIAL_STATE;
		case actionsTypes.BACKSPACE:
			return {
				...state,
				expression: backSpace(state.expression),
			};
		case actionsTypes.SET_ACCUMULATOR:
			return {
				...state,
				accumulator: calculate(state.expression),
			};
		case actionsTypes.SET_CURRENT_NUMBER:
			return {
				...state,
				currentNumber: action.payload,
			};
		case actionsTypes.SET_CURRENT_OPERATION:
			return {
				...state,
				operation: action.payload,
			};
		case actionsTypes.SET_TOTAL:
			return {
				...state,
				total: calculate(state.expression),
			};
		case actionsTypes.UPDATE_EXPRESSION:
			return {
				...state,
				expression: [...state.expression, action.payload],
			};
		default:
			return state;
	}
};
