// useContext : get context.state -> display values
import React from "react";
import { DisplayContainer } from "./Display.styles";

const Display = () => {
	const [expression, total, operation, accumulator, currentNumber] = [
		["1", "+", "2"],
		null,
		"+",
		"3",
		"2",
	]; //stub data
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
