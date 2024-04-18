import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ setGuessResults, isGameWon, guessNumber }) {
  const [guessInput, setGuessInput] = React.useState("");
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault()
        setGuessResults((prevGuessResults) => [...prevGuessResults, { id: crypto.randomUUID(), guess: guessInput }])
        setGuessInput("")


      }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input disabled={isGameWon || guessNumber === NUM_OF_GUESSES_ALLOWED} id="guess-input" type="text" required pattern="\w{5}" value={guessInput} onChange={(event) => setGuessInput(event.target.value.toUpperCase())} ></input>
      </form>
    </div>
  )

}

export default GuessInput;
