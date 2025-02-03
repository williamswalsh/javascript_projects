'use strict';

const scoreElemSpan = document.querySelector('.score');
let highScore = 0;
const highScoreSpan = document.querySelector('span.highscore');
// number between 1 & 20
const generateNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = generateNumber();
const guessInput = document.querySelector('.guess');
const replayBtn = document.querySelector('button.btn.again');

// const messageParagraph = document.querySelector('.message');
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const hiddenNumber = document.querySelector('.number');
const bodyElement = document.querySelector('body');
let guess = -1;
// State value
let score = 20;
// hiddenNumber.textContent = secretNumber;

replayBtn.addEventListener('click', () => {
  guessInput.value = '';
  hiddenNumber.textContent = '?';
  displayMessage('Start guessing...');
  hiddenNumber.style.width = '15rem';
  score = 20;
  scoreElemSpan.textContent = score;
  bodyElement.style.backgroundColor = '#222';
  secretNumber = generateNumber();
  //   hiddenNumber.textContent = secretNumber;
});

// Button listener - logs value to console
document.querySelector('.check').addEventListener('click', () => {
  guess = Number(guessInput.value);
  console.log(`Guess: ${guess}, Type of guess: ${typeof guess}`);

  //   When no input
  if (!guess) {
    displayMessage('No guess submitted! Enter a number.');

    //   When player wins
  } else if (guess === secretNumber) {
    hiddenNumber.textContent = secretNumber;
    displayMessage('Correct Number - you win!');
    // score += 10;
    scoreElemSpan.textContent = score;

    if (score > highScore) {
      highScore = score;
      highScoreSpan.textContent = highScore;
    }

    // Both set as inline style - applied directly in html not to css file.
    // backgroundColor style attribute on body element
    bodyElement.style.backgroundColor = '#60b347';
    // backgroundColor style attribute on body element
    hiddenNumber.style.width = '30rem';
  } else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber ? 'Guess is too High' : 'Guess is too Low'
    );
    score--;
    scoreElemSpan.textContent = score;
  }

  if (score <= 0) {
    displayMessage('You lost the game.');
  }
});
