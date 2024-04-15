import React from 'react';

function GuessInput({ setGuessResults }) {
  const [guessInput, setGuessInput] = React.useState("");
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(event) => {
        event.preventDefault()
        setGuessResults((prevGuessResults) => [...prevGuessResults, { id: crypto.randomUUID(), guess: guessInput }])
        setGuessInput("")


      }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" required pattern="\w{5}" value={guessInput} onChange={(event) => setGuessInput(event.target.value.toUpperCase())} ></input>
      </form>
    </div>
  )

}

export default GuessInput;
