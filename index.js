let question = document.querySelector(".heading h2");
let form = document.getElementById("form");
let inputValue = document.getElementById("inputValue");
let score = document.getElementById("score-number");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctans = num1 * num2;
let allScore = JSON.parse(localStorage.getItem("score"));
if(allScore < 0){
    allScore = 0;
}

question.innerText = `What is ${num1} multiply by ${num2}?`;
score.innerText = `score: ${allScore}`;
console.log(allScore);

form.addEventListener("submit", () => {
  let ansVal = +inputValue.value;

  if (ansVal === correctans) {
    allScore++;
    updateScore();
  } else {
    allScore--;
    updateScore();
  }
});

function updateScore() {
  localStorage.setItem("score", JSON.stringify(allScore));
}
