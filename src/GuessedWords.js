import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess secret word!</span>
    );
  } else {
    const guessWordsRows = props.guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td data-test="guessed-word-index">{index + 1}</td>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed words</h3>
        <table className="table talle-sm">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>
          <tbody>{guessWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-word">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};
export default GuessedWords;
