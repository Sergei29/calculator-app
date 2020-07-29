import React from "react";

// store provider:
import { CalculatorStoreProvider } from "../../context/store";
//components:
import Display from "../Display/Display.component";
import KeyPad from "../KeyPad/KeyPad.component";
import { AppContainer } from "./Calculator.styles";

function Calculator() {
	return (
		<AppContainer>
			<CalculatorStoreProvider>
				<Display />
				<KeyPad />
			</CalculatorStoreProvider>
		</AppContainer>
	);
}

export default Calculator;
