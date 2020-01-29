import React from "react";
import PropTypes from "prop-types";
import checkPropTypes from "check-prop-types";
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="mt-5 mb-5">
        <span data-test="congrats-message" className="alert alert-success">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
export default Congrats;
