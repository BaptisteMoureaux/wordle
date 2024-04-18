import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_IN_ANSWER } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessResults({ guessResults, answer }) {
  const emptyGuesses = guessResults.length < 6 ? NUM_OF_GUESSES_ALLOWED - guessResults.length : 0;
  return (
    <div className="guess-results">
      {guessResults.slice(0, NUM_OF_GUESSES_ALLOWED).map((guess) => (
        <p key={guess.id} className="guess">{checkGuess(guess.guess, answer).map(({ letter, status }) => (<span key={crypto.randomUUID()} className={`cell ${status}`}>{letter}</span>))}</p>
      ))}
      {Array(emptyGuesses).fill(0).map((_, i) => <p key={crypto.randomUUID()} className="guess">{Array(NUM_OF_LETTERS_IN_ANSWER).fill(0).map(() => <span key={crypto.randomUUID()} className="cell"></span>)}</p>)}
    </div>
  )
}
export default GuessResults;
