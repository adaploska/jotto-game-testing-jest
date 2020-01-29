import App from "./App";
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
const setup = (props = {}) => {
  const setUpProps = { ...props };
  return shallow(<App {...setUpProps} />);
};
test("renders learn react link", () => {
  // const { getByText } = render(<App />);
  let wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
