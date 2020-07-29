export const backSpace = (expression) =>
	expression.slice(0, expression.length - 1);

export const calculate = (expression) => {
	let result;
	try {
		result = (eval(expression.join("")) || "") + "";
		return +result;
	} catch (e) {
		result = "error";
		return result;
	}
};
