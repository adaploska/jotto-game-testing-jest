import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers/index";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../src/configureStore";
/**
 * Create a testing store with imported reducers middleware
 * global, rootReducer , middleware and initial state.
 * @param {Object} initialState - initial state for store.
 * @function storeFactory.
 * @returns {Store} redux store
 */
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
