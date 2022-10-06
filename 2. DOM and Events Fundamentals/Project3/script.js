'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const curScore0El = document.querySelector('#current--0');
const curScore1El = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let curScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice != 1) {
      curScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        curScore;
    } else {
      curScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        curScore;
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += curScore;
    console.log(scores);
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    curScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = curScore;
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  diceEl.classList.add('hidden');
});
