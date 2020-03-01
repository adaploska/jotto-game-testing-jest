import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions/index";
export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = { currentGuess: null };

    // bind this for submitGuessedWord
    //this.submitGuessedWord = this.submitGuessedWord.bind(this);
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }
  submitGuessedWord(evt) {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  }

  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={this.state.currentGuess}
          onChange={evt => this.setState({ currentGuess: evt.target.value })}
        ></input>
        <button
          className="btn btn-info mb-2"
          type="submit"
          data-test="submit-button"
          onClick={evt => this.submitGuessedWord(evt)}
        >
          submit
        </button>
      </form>
    );
    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput);
