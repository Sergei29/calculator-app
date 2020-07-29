import React, { createContext } from "react";

//components:
import Display from "../Display/Display.component";
import KeyPad from "../KeyPad/KeyPad.component";
import { AppContainer } from "./Calculator.styles";

function Calculator() {
	//create context provider hoc -CalculatorProvider
	return (
		<AppContainer>
			{/* CalculatorProvider hoc */}

			<Display />
			<KeyPad />
		</AppContainer>
	);
}

export default Calculator;
