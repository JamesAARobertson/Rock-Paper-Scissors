
// function to get computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
        return "Rock";
    }
    else if (computerChoice == 1) {
        return "Paper";
    }
    else {
        return "Scissors"
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