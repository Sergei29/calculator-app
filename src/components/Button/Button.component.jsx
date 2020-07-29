import React from "react";
import { ButtonContainer } from "./Button.styles";

const Button = ({ name, clickHandler }) => {
	return (
		<ButtonContainer name={name} onClick={clickHandler}>
			{name}
		</ButtonContainer>
	);
};

export default Button;
