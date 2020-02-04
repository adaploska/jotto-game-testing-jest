import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions/index";
class Input extends Component {
  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        ></input>
        <button
          className="btn btn-info mb-2"
          type="submit"
          data-test="submit-button"
        >
          submit
        </button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = success => {
  return success;
};

export default connect(
  mapStateToProps,
  { guessWord }
)(Input);
