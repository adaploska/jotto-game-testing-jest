import React, { Component } from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
class App extends Component {
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1 className="mt-4">Jotto Game</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
