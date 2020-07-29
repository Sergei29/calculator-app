import { shallow } from "enzyme";
import React from "react";

import Calculator from "./Calculator.component";

describe("Calculator", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Calculator />);
	});
	it("should render the component", () => {
		expect(wrapper.length).toEqual(1);
	});
	it("should match the snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
