import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import TotalGuesses from "./TotalGuesses";

const defaultProps = { guessCount: 0 };
const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setUpProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ guessCount: 0 });
  const component = findByTestAttr(wrapper, "component-total-guesses");
  expect(component.length).toBe(1);
});
test("renders 1 as as numer of guess if 1 guess play", () => {
  const guessCount = 1;
  const wrapper = setup({ guessCount });
  const component = findByTestAttr(wrapper, "component-total-guesses");
  expect(component.text()).toBe("Total Guesses: 1");
  expect(component.text()).toContain(guessCount.toString());
});
