import React, { Component } from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { connect } from "react-redux";
import Input from "./Input";
import { getSecretWord } from "./actions/index";
import TotalGuesses from "./TotalGuesses";
export class UnConnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1 className="mt-4">Jotto Game</h1>
        <div>secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses guessCount={this.props.guessedWords.length} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};
export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnConnectedApp);
