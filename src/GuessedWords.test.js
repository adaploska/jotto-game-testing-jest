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

describe("if there are not words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("render without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess the word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text()).not.toBe(0);
  });
});
describe("if there is words guessed", () => {
  let guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: guessedWords });
  });
  test("render without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });
  test("renders guess word section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("renders correct number of guessed word", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
  test("show correct number of guessed word", () => {
    const guessWordIndexes = findByTestAttr(wrapper, "guessed-word-index");
    const indexTextSet = new Set(
      guessWordIndexes.map(wrapper => wrapper.text())
    );
    const expectedSet = new Set(
      guessedWords.map((word, index) => (index + 1).toString())
    );
    expect(indexTextSet).toEqual(expectedSet);
  });
});
