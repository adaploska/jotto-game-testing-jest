import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps, storeFactory } from "../test/testUtils";
import Input from "./Input";

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
  describe("word has  been guessed", () => {
    test("render without error", () => {});
    test("does not render input box", () => {});
    test("does not render submit button", () => {});
  });
});
describe("update state", () => {});
