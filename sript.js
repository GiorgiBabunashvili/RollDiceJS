const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
const btnRoll = document.querySelector(".btn-roll");
const finalScore = document.querySelector(".final-score");
const dice = document.querySelector(".dice");

btnRoll.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  dice.src = "img/dice-" + randomNumber + ".png";
  dice.style.display = "block";
});
