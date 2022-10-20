const computerChoiceDisplay = document.getElementById('computer')
const userChoiceDisplay= document.getElementById('you')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   console.log("userChoice: ", userChoice)
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }

  if (randomNumber === 2) {
    computerChoice = 'paper'
  }

  if (randomNumber === 3) {
    computerChoice = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Winner'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Loser'
    }
    if (computerChoice=== 'paper' && userChoice === 'scissors') {
        result = 'Winner'
    }
     if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Loser'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'Winner'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Loser'
    }

    resultDisplay.innerHTML = result
}