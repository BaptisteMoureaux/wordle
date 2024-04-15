import React from 'react';

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guess) => (
        <p key={guess.id} className="guess">{guess.guess}</p>
      ))}
    </div>
  )
}

export default GuessResults;
