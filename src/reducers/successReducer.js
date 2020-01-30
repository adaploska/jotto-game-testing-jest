import { actionTypes } from "../actions/index";
/**
 * @method successReducer
 * @param {string} state - Array of guessed words.
 * @param {string} action - action to be reduced.
 * @returns {boolean} - new success state
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
