function guessingGame() {
  let number = Math.floor(Math.random() * 100);
  let numGuess = 0;
  let gameOver = false;
  return function game(guess) {
    if (gameOver) return "The game is over, you already won!";
    numGuess++;
    if (guess === number) {
      gameOver = true;
      return `You win! You found ${number} in ${numGuess} guesses.`;
    } else if (guess > number) {
      return `${guess} is too high!`;
    } else {
      return `${guess} is too low!`;
    }
  };
}

module.exports = { guessingGame };
