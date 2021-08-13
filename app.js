const scoreEl = document.getElementById('score');
const timeLeftEl = document.getElementById('time-left');

let score = 0
let timeLeft = timeLeftEl.textContent;

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseup', whack)
});

function whack() {
  if (this.classList.contains('mole')) {
    score += 1;
    scoreEl.textContent = score;
  }
}


function randomMole() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });
  const randomPosition = Math.floor(Math.random()*9);
  let randomSquare = squares[randomPosition];
  randomSquare.classList.add('mole');
}

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomMole, 1000);
}

function countdown() {
  timeLeft--;
  timeLeftEl.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(mainTimer);
    alert(`Time's up! Your score was ${score}. Reload the page to play again!`);
    score = 0;
    scoreEl.textContent = score; 
    squares.forEach(square => {square.classList.remove('square')});
  }
}

let mainTimer = null;
mainTimer = setInterval(countdown, 1000);

moveMole();