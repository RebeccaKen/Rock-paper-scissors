// The following javascript was built with code from Ania Kubow's tutorial '3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)' on her YouTube channel 'Code with Ania Kubów'


const computerChoiceDisplay = document.getElementById('computer');
const userChoiceDisplay = document.getElementById('you');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  console.log("userChoice: ", userChoice);
  userChoiceDisplay.innerHTML = userChoice;
  generatecomputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = (Math.random() * options.length);
  console.log(randomNumber)
  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if(computerChoice === 2 ) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
computerChoiceDisplay.innerHTML = computerChoice

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