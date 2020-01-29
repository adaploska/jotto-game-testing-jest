import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

test("does not throw worning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});
