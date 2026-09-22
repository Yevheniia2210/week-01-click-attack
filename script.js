let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const powerAttackButton = document.getElementById("powerAttackButton");
const resetButton = document.getElementById("resetButton");

function addPoint() {
    score = score + 1;
    scoreDisplay.textContent = score;
}
/function resetGame() {
score = 0;
scoreDisplay.textContent = score;
}

function powerAttack() {
    score = score + 5;
    scoreDisplay.textContent = score;
}

attackButton.addEventListener("click", addPoint);
resetButton.addEventListener("click", resetGame);
powerAttackButton.addEventListener("click", powerAttack);
