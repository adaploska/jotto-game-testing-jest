import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps, storeFactory } from "../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} initialState - initialState .
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      let initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("render without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      let initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("render without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});
describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    let successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("guessedWord action creator is a function prop", () => {
    const wrapper = setup();
    let guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
describe("`guessWord` action creator", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";
  beforeEach(() => {
    // create a mock function for `getSecretWord`
    guessWordMock = jest.fn();

    // set up Input, with guessWordMock as a prop
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    // add value to input box
    wrapper.setState({ currentGuess: guessedWord });

    // simulate click on submit button
    const submit = findByTestAttr(wrapper, "submit-button");
    submit.simulate("click", { preventDefault() {} });
  });
  test("`guessWord` was called once", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  test("calls `guessWord with input value as argument`", () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    //console.log(guessWordMock.mock.calls);
    expect(guessWordArg).toBe(guessedWord);
  });
  // test("input box clears on submit", () => {
  //   expect(wrapper.state("currentGuess")).toBe("");
  // });
});
