import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Banner({ isGameWon, guessNumber, answer, resetGame }) {
  const mood = isGameWon ? "happy" : "sad";
  const visibility = isGameWon || guessNumber === NUM_OF_GUESSES_ALLOWED ? "visible" : "hidden";
  return (
    <div className={`${mood} banner`} style={{ visibility: visibility }}>
      {isGameWon ? <p>
        <strong>Congratulations!</strong> Got it in {" "}
        <strong> {guessNumber} guesses</strong >.
      </p> : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
      <button style={{ border: "solid 1px blue" }} onClick={resetGame}>Play Again</button>
    </div>
  )
}

export default Banner;
