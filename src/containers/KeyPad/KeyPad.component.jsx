// get actions
// input handler : dispatch actions based on input value
import React, { useContext } from "react";
import { store } from "../../context/store";

//components:
import Button from "../../components/Button/Button.component";
import { KeyPadContainer } from "./KeyPad.styles";
import { KEYS } from "../../data/data";

const KeyPad = () => {
	const { dispatch } = useContext(store);
	console.log(" KeyPad component dispatch fn: ", typeof dispatch);

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
