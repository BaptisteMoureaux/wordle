import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessResults }) {
  const emptyGuesses = guessResults.length < 6 ? NUM_OF_GUESSES_ALLOWED - guessResults.length : 0;
  console.log(Array(emptyGuesses).fill(0))
  return (
    <div className="guess-results">
      {guessResults.slice(0, NUM_OF_GUESSES_ALLOWED).map((guess) => (
        <p key={guess.id} className="guess">{guess.guess.split("").map(letter => (<span className="cell">{letter}</span>))}</p>
      ))}
      {Array(emptyGuesses).fill(0).map((_, i) => <p key={i} className="guess">{Array(5).fill(0).map(() => <span className="cell"></span>)}</p>)}
    </div>
  )
}
export default GuessResults;
