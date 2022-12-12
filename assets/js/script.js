// The following javascript was built with code from Ania Kubow's tutorial '3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)' on her YouTube channel 'Code with Ania Kubów'
let input = document.getElementById("input");
let button = document.getElementById("button");
let greet = document.getElementById("greet");

button.addEventListener ("click", greetingUser)

// function to greet user (homepage)

function greetingUser(event) {
  event.preventDefault()
  greet.textContent = `Nice to meet you, ${input.value}!`
}

const computerChoiceDisplay = document.getElementById('computer');
const userChoiceDisplay = document.getElementById('you');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let points;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  console.log("userChoice: ", userChoice);
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function userScore() {
  let points = 0;
  if (userChoice === 'Winner') {
    playerPoints += 1; 
}
  if (computerChoice === 'Winner') {
    computerPoints += 1;
  }
  points.innerHTML = points;
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }

  if (randomNumber === 2) {
    computerChoice = 'paper';
  }

  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw';
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'Winner';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'Loser';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'Winner';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'Loser';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'Winner';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'Loser';
  }

  resultDisplay.innerHTML = result;
}

