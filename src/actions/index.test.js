import { correctGuess, actionTypes } from "./index";
//dla mutujących obiektów nie mozna używać toBe()
//uzywamy do tefo toEgual
describe("correctGuess", () => {
  test("return an action type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
