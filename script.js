
// function to get computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
        return "ROCK";
    }
    else if (computerChoice == 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS"
    }
}


// function to get Player Choice
function getHumanChoice() {
    let humanChoice = (prompt('Enter your choice of ROCK, PAPER or SCISSORS')).toUpperCase();
    return humanChoice
}


// variables to keep track of score
let humanScore = 0;
let computerScore = 0;


// function to play a round
function playRound(humanChoice, computerChoice) {
    if (computerChoice == 'SCISSORS' && humanChoice == 'ROCK') {
        humanScore++
        console.log('You win! Rock beats Scissors.')
    }
    else if (computerChoice == 'ROCK' && humanChoice =='PAPER') {
        humanScore++
        console.log('You win! Paper beats Rock.')
    }
    else if (computerChoice == 'PAPER' && humanChoice == 'SCISSORS') {
        humanScore++
    console.log('You win! Scissors beat Paper.')
    }
    else if (computerChoice == 'SCISSORS' && humanChoice == 'PAPER') {
        computerScore++
        console.log('You lose! Paper loses to Scissors.')
    }
    else if (computerChoice == 'ROCK' && humanChoice == 'SCISSORS') {
        computerScore++
        console.log('You lose! Scissors lose to Rock.')
    }
    else if (computerChoice == 'PAPER' && humanChoice =='ROCK') {
        computerScore++
        console.log('You lose! Rock loses to Paper.')
    }
    else if (computerChoice == humanChoice) {
        console.log('It\'s a tie!')
    }
    else {
        alert('Invalid input! Please enter a choice of ROCK, PAPER or SCISSORS.')
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)