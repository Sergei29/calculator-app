// useContext : get dispatch
// get actions
// input handler : dispatch actions based on input value
import React from "react";

//components:
import Button from "../../components/Button/Button.component";
import { KeyPadContainer } from "./KeyPad.styles";
import { KEYS } from "../../data/data";

const KeyPad = () => {
	// get context => dispatch fn
	const inputHandler = (event) => {
		// will need switch with all clicked value cases:

		const { name } = event.target;
		console.log("clicked: ", name);
	};

	return (
		<KeyPadContainer>
			{KEYS.map((key) => (
				<Button key={key} name={key} clickHandler={inputHandler} />
			))}
		</KeyPadContainer>
	);
};

export default KeyPad;
