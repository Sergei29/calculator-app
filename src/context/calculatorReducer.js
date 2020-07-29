// init state and reducer export bott
// utils functions
// actions types

export const INITIAL_STATE = {
	currentNumber: null,
	operation: "",
	accumulator: null,
	total: null,
	expression: [],
};

export const calculatorReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// case value:

		//   break;

		default:
			return state;
	}
};
