// useContext : get context.state -> display values
import React, { useContext } from "react";
import { store } from "../../context/store";
import { DisplayContainer } from "./Display.styles";

const Display = () => {
	const { state } = useContext(store);
	const { currentNumber, operation, accumulator, total, expression } = state;

	return (
		<DisplayContainer>
			<span>Expression: {expression.join("")}</span>
			<span title="">Total: {total}</span>
			<span title="the currently selected operation">
				Operation: {operation}
			</span>
			<span title="the current value when the last operation button was pressed">
				Acc : {accumulator}
			</span>
			<span title="the number currently being typed">
				Current: {currentNumber}
			</span>
		</DisplayContainer>
	);
};

export default Display;
