import actionsTypes from "./action.types";

export const reset = () => ({
	type: actionsTypes.RESET,
});

export const backspace = () => ({
	type: actionsTypes.BACKSPACE,
});

export const setAccumulator = () => ({
	type: actionsTypes.SET_ACCUMULATOR,
});

export const setTotal = () => ({
	type: actionsTypes.SET_TOTAL,
});

export const setCurrentNumber = (number) => ({
	type: actionsTypes.SET_CURRENT_NUMBER,
	payload: number,
});

export const setCurrentOperation = (operation) => ({
	type: actionsTypes.SET_CURRENT_OPERATION,
	payload: operation,
});

export const updateExpression = (value) => ({
	type: actionsTypes.UPDATE_EXPRESSION,
	payload: value,
});
