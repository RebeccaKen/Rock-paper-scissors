
let you = 0;
let computer = 0;
let result = 'Start';
let playgame = "";

/** Show score */
function showScore() {

	document.getElementById("you").innerText = you;
	document.getElementById("computer").innerText = computer;	
	document.getElementById("result").innerText = result;

/* get user selection */
function playGame(userInput) {

    let userSelection = userInput.textContent;
    let computerSelection = getComputerSelection();
    let result = calcResult(userSelection, computerSelection);
	document.getElementById("vstext").innerText = userSelection + ' VS ' + computerSelection;
    showScore();
	

/* get computer selection */
function getComputerSelection () {

    const options = ['rock, paper, scissors']
    let computerSelection = options[Math.floor(Math.random()*options.length)];
    return computerSelection;
}

/* get results */
function calcResult(user, computer) {

    if (user === computer)
    result = 'Draw'
    return; 
} else if ((user === 'rock' && computer === 'scissors') || (user === 'paper' && computer === 'rock') || (user === 'scissors' && computer === 'paper')) {
	
    you += 1;	

    if (you== 10){
    result = "You are the winner!";
    endgame();
    } else {
    result = 'Wins'
    return;
    }
    
} else {
    computer += 1;
    
    if (computer == 10){
    result = 'Computer is the Winner'
    endgame();
    } else { 
    result = 'Lose'
    return;
    }
            
}