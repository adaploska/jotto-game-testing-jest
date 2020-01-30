export function getLetterMatchCount(guessedWord, secretWord) {
  let secretLetterSet = new Set(secretWord.split(""));
  let guessedLetterSet = new Set(guessedWord.split(""));
  console.log(
    [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
  );
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
