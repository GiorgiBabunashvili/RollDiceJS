const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
const btnRoll = document.querySelector(".btn-roll");
const finalScore = document.querySelector(".final-score");
const dice = document.querySelector(".dice");

let score = [0, 0],
  currentScore = 0,
  activePlayer = 0,
  gameStatus = true,
  activePlayerPannel = document.querySelector(".player-0-pannel");

const next = () => {
  currentScore = 0;
  activePlayerPannel.querySelector(".player-current-score").textContent = 0;
  activePlayerPannel.classList.remove("active");
  activePlayer = activePlayer === 1 ? 0 : 1;
  activePlayerPannel = document.querySelector(
    ".player-" + activePlayer + "-pannel"
  );
  activePlayerPannel.classList.add("active");
  dice.style.display = "none";
};

btnRoll.addEventListener("click", () => {
  if (finalScore.value) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = "img/dice-" + randomNumber + ".png";
    dice.style.display = "block";

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      activePlayerPannel.querySelector(".player-current-score").textContent =
        currentScore;
    } else {
      next();
    }
  } else {
    finalScore.focus();
    finalScore.placeholder = "Please inert  WINNER SCORE!";
  }
});

btnHold.addEventListener("click", () => {
  if (gameStatus) {
    let endGameScore = finalScore.value;

    score[activePlayer] += currentScore;
    activePlayerPannel.querySelector(".player-score").textContent =
      score[activePlayer];

    if (score[activePlayer] >= +endGameScore) {
      //winner
      activePlayerPannel.classList.remove("active");
      activePlayerPannel.classList.add("winner");
      activePlayerPannel.querySelector(".player-name").textContent = "WINNER";
      dice.style.display = "none";
      finalScore.placeholder = "Winner Score";
      finalScore.value = "";
      gameStatus = false;
    } else {
      next();
    }
  }
});

btnNew.addEventListener("click", () => {
  window.location.reload();
});
