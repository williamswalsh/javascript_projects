'use strict';

// DOM elements
// // enable button event listeners??
const newGameBtn = document.querySelector('button.btn--new');
const diceImg = document.querySelector('img.dice');
const rollDiceBtn = document.querySelector('button.btn--roll');
const holdScoreBtn = document.querySelector('button.btn--hold');
const currentScores = [
  document.querySelector('p#current--0'),
  document.querySelector('p#current--1'),
];
const totalScores = [
  document.querySelector('p#score--0'),
  document.querySelector('p#score--1'),
];
const player_blocks = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

// State
let buttonEventListenersEnabled = true;
const MAX_SCORE = 10;
const player_0 = {
  currentRoll: 0,
  currentSum: 0,
  totalScore: 0,
};
const player_1 = {
  currentRoll: 0,
  currentSum: 0,
  totalScore: 0,
};
const players = [player_0, player_1];
let activePlayerIndex = 0;
let diceScore;
let activePlayer;

// Behaviour
const hideDice = () => {
  diceImg.classList.add('hidden');
};
const showDice = () => {
  diceImg.classList.remove('hidden');
};

const displayDice = diceScore => {
  showDice();
  diceImg.src = `dice-${diceScore}.png`;
};

const rollDice = () => {
  if (!buttonEventListenersEnabled) {
    return;
  }

  diceScore = Math.trunc(Math.random() * 6) + 1;
  activePlayer = players[activePlayerIndex];

  displayDice(diceScore);

  if (diceScore === 1) {
    activePlayer.currentSum = 0;
    currentScores[activePlayerIndex].textContent = activePlayer.currentSum;
    swapPlayer();
    return;
  }

  //   diceScore !== 1
  activePlayer.currentSum = activePlayer.currentSum + diceScore;
  currentScores[activePlayerIndex].textContent = activePlayer.currentSum;
};

const hasPlayerWon = player => {
  return player.totalScore >= MAX_SCORE;
};

const holdScore = () => {
  if (!buttonEventListenersEnabled) {
    return;
  }

  activePlayer = players[activePlayerIndex];
  activePlayer.totalScore += activePlayer.currentSum;
  activePlayer.currentRoll = 0;
  activePlayer.currentSum = 0;

  // display updated state
  totalScores[activePlayerIndex].textContent = activePlayer.totalScore;
  currentScores[activePlayerIndex].textContent = 0;

  if (hasPlayerWon(activePlayer)) {
    console.log(`Player ${activePlayerIndex} has won the game`);

    player_blocks[activePlayerIndex].classList.add('player--winner');
    player_blocks[activePlayerIndex].classList.remove('player--active');

    hideDice();

    buttonEventListenersEnabled = false;
  } else {
    swapPlayer();
  }
};

const swapPlayer = () => {
  activePlayerIndex = activePlayerIndex ? 0 : 1;
  player_blocks.forEach(block => block.classList.toggle('player--active'));
};

const clearScores = () => {
  hideDice();
  scoreElementsReset();
};

const scoreElementsReset = () => {
  totalScores.forEach(score => (score.textContent = 0));
  currentScores.forEach(score => (score.textContent = 0));
};

const resetGameState = () => {
  activePlayerIndex = 0;
  player_0.currentRoll = 0;
  player_0.currentSum = 0;
  player_0.totalScore = 0;

  player_1.currentRoll = 0;
  player_1.currentSum = 0;
  player_1.totalScore = 0;
};

const resetPlayerBlockColours = () => {
  player_blocks[0].classList.add('player--active');
  player_blocks[1].classList.remove('player--active');
};

const removeDarkWinninBlock = () => {
  player_blocks[0].classList.remove('player--winner');
  player_blocks[1].classList.remove('player--winner');
};
// Initialize game state
scoreElementsReset();

// Event handlers method registering
rollDiceBtn.addEventListener('click', rollDice);
newGameBtn.addEventListener('click', () => {
  buttonEventListenersEnabled = true;
  resetGameState();
  clearScores();
  resetPlayerBlockColours();
  removeDarkWinninBlock();
});
holdScoreBtn.addEventListener('click', () => {
  holdScore();
});
