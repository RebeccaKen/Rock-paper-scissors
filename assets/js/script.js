// The following javascript was built with code from Ania Kubow's tutorial '3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)' on her YouTube channel 'Code with Ania Kubów'
let input = document.getElementById("input");
let button = document.getElementById("submit");
let greet = document.getElementById("greet");

button.addEventListener ("click", greetingUser)

// function to greet user by inputting name and returning welcome

function greetingUser(event) {
  event.preventDefault()
  greet.textContent = `Nice to meet you, ${input.value}!`
}

// code to get elements and add event listeners

const computerChoiceDisplay = document.getElementById('computer');
const userChoiceDisplay = document.getElementById('you');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.controls > button');
const computerPointsDisplay = document.getElementById('computerPoints-id');
const playerPointsDisplay = document.getElementById('playerPoints-id');
let userChoice;
let result;
let computerChoice;
let playerPoints = 0;
let computerPoints = 0;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  console.log("userChoice: ", userChoice);
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

// function to generate a random choice and assign it a number between 1 and 3
// this function also adds one point to the winner of each round

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

// function to assign result and add result to result board

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw';
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'Winner';
    playerPoints += 1;
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'Loser';
    computerPoints += 1;
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'Winner';
    playerPoints += 1;
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'Loser';
    computerPoints += 1;
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'Winner';
    playerPoints += 1;
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'Loser';
    computerPoints += 1;
  }

  resultDisplay.innerHTML = result;
  computerPointsDisplay.innerHTML = computerPoints;
  playerPointsDisplay.innerHTML = playerPoints;
}

