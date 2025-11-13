// Simple event-driven binary search guesser
let min, max, middle, guessCount, currentGuess;

const el = id => document.getElementById(id);

function updateDebug() {
  el('debug').textContent = `min: ${min}, middle: ${middle}, max: ${max}`;
  console.log(`DEBUG -> min:${min} middle:${middle} max:${max}`);
}

function setFeedback(msg) {
  el('feedback').textContent = msg;
}

function disableGuessBtns(disable = true) {
  el('btnHigher').disabled = disable;
  el('btnLower').disabled = disable;
}

function makeGuess() {
  // Check for inconsistent state
  if (min > max) {
    setFeedback('Der er ingen mulige tal tilbage — inkonsistent svar (måske er der blevet trykket forkert).');
    disableGuessBtns(true);
    return;
  }

  // If only one possibility left, show it and refuse to continue guessing
  if (min === max) {
    middle = min;
    currentGuess = min;
    updateDebug();
    el('guess').textContent = currentGuess;
    setFeedback(`Kun ét muligt tal tilbage: ${currentGuess}. Jeg gætter ikke mere - bekræft med 'Korrekt' hvis det passer.`);
    disableGuessBtns(true);
    return;
  }

  middle = Math.floor((min + max) / 2);
  currentGuess = middle;
  guessCount += 1;
  el('guess').textContent = currentGuess;
  updateDebug();
  setFeedback(`Gæt #${guessCount}: Jeg gætter ${currentGuess}. Er det for lavt, for højt eller korrekt?`);
}

function onHigher() {
  // User says current guess is too low -> real number is higher
  if (middle == null) return;
  min = middle + 1;
  console.log('User: higher -> set min =', min);
  updateDebug();
  disableGuessBtns(false);
  makeGuess();
}

function onLower() {
  // User says current guess is too high -> real number is lower
  if (middle == null) return;
  max = middle - 1;
  console.log('User: lower -> set max =', max);
  updateDebug();
  disableGuessBtns(false);
  makeGuess();
}

function onCorrect() {
  if (currentGuess == null) return;
  // Provide comment based on number of guesses
  let remark;
  if (guessCount <= 3) remark = 'Fantastisk! Det var skarpt.';
  else if (guessCount <= 6) remark = 'Godt gættet — ikke dårligt.';
  else remark = 'Meh — det tog lidt lang tid, men vi fandt det.';

  setFeedback(`Korrekt — jeg gættede ${currentGuess} på ${guessCount} gæt. ${remark}`);
  disableGuessBtns(true);
}

function resetGame() {
  el('minInput').value = 1;
  el('maxInput').value = 100;
  startGame();
}

function startGame() {
  // read user-provided bounds
  min = parseInt(el('minInput').value, 10);
  max = parseInt(el('maxInput').value, 10);
  if (Number.isNaN(min) || Number.isNaN(max) || min > max) {
    setFeedback('Ugyldige startværdier. Sørg for at min og max er tal, og min ≤ max.');
    return;
  }
  middle = null;
  guessCount = 0;
  currentGuess = null;
  el('guess').textContent = '—';
  disableGuessBtns(false);
  setFeedback('Spillet er startet. Jeg begynder at gætte...');
  updateDebug();
  // Make the first guess
  makeGuess();
}

// Wire buttons
document.addEventListener('DOMContentLoaded', () => {
  el('btnHigher').addEventListener('click', onHigher);
  el('btnLower').addEventListener('click', onLower);
  el('btnCorrect').addEventListener('click', onCorrect);
  el('btnReset').addEventListener('click', resetGame);
  el('startBtn').addEventListener('click', startGame);
  // initialize debug
  el('debug').textContent = 'min: -, middle: -, max: -';
});
