import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.log(answer)

  useEffect(() => {
    if (guessResults.length === 0) return;
    const lastGuess = guessResults[guessResults.length - 1];
    const isGameWon = lastGuess.guess === answer;
    setIsGameWon(isGameWon);
  }, [guessResults, answer]);

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <Banner guessNumber={guessResults.length} isGameWon={isGameWon} answer={answer} resetGame={() => {
        setAnswer(sample(WORDS))
        setGuessResults([])
        setIsGameWon(false)
      }} />
      <GuessInput setGuessResults={setGuessResults} isGameWon={isGameWon} guessNumber={guessResults.length} />
    </>
  );
}

export default Game;
