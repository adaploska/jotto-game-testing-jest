import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const defaultProps = { success: false };
const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setUpProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
//nie reneruje tekstu jak props success jest false
test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
//renderuje text jak success jest true
test("renders non-empty text when `success` prop is  true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
test("does not thtow worning with expected props", () => {
  const expectedProps = setup({ success: false });
  checkProps(Congrats, expectedProps);
});
