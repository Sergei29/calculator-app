// input handler : dispatch actions based on input value
import React, { useContext } from "react";
import { store } from "../../context/store";
//actions:
import * as actions from "../../context/actions";

//components:
import Button from "../../components/Button/Button.component";
import { KeyPadContainer } from "./KeyPad.styles";
import { KEYS } from "../../data/data";

const KeyPad = () => {
	const { dispatch } = useContext(store);

	const inputHandler = (event) => {
		const { name } = event.target;
		const isNumeric = !isNaN(+name) ? true : false;

		switch (name) {
			case "CE":
				dispatch(actions.backspace());
				return;
			case "=":
				dispatch(actions.setTotal());
				return;
			case "C":
				dispatch(actions.reset());
				return;
			default:
				// set state based on if numeric or binary math symbol
				// !!! here make sense to change logic to update state only once
				if (isNumeric) {
					dispatch(actions.setCurrentNumber(+name));
				} else {
					dispatch(actions.setCurrentOperation(name));
				}
				dispatch(actions.updateExpression(name));
				dispatch(actions.setAccumulator());
				return;
		}
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
