import React, { createContext, useReducer } from "react";
import { INITIAL_STATE, calculatorReducer } from "./calculatorReducer";

export const store = createContext(INITIAL_STATE);
const { Provider } = store;

export const CalculatorStoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);
	return <Provider value={{ state, dispatch }}> {children} </Provider>;
};
