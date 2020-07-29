import { shallow } from "enzyme";
import React from "react";

import CalculatorApp from "./CalculatorApp.component";

describe("CalculatorApp", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<CalculatorApp />);
	});
	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
});
