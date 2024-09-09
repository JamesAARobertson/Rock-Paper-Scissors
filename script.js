
// function to get computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "ROCK";
    }
    else if (computerChoice === 1) {
        return "PAPER";
    }
    else {
        return "SCISSORS"
    }
}


// function to get Player Choice
// function getHumanChoice() {
//     let humanChoice = (prompt('Enter your choice of ROCK, PAPER or SCISSORS')).toUpperCase();
//     return humanChoice
// }


// variables to keep track of score
let humanScore = 0;
let computerScore = 0;


// function to play a round
function playRound(humanChoice, computerChoice) {
    let result = ''
    if (computerChoice == 'SCISSORS' && humanChoice == 'ROCK') {
        humanScore++
        result ='You win! Rock beats Scissors.'
    }
    else if (computerChoice == 'ROCK' && humanChoice =='PAPER') {
        humanScore++
        result ='You win! Paper beats Rock.'
    }
    else if (computerChoice == 'PAPER' && humanChoice == 'SCISSORS') {
        humanScore++
    result ='You win! Scissors beat Paper.'
    }
    else if (computerChoice == 'SCISSORS' && humanChoice == 'PAPER') {
        computerScore++
        result ='You lose! Paper loses to Scissors.'
    }
    else if (computerChoice == 'ROCK' && humanChoice == 'SCISSORS') {
        computerScore++
        result ='You lose! Scissors lose to Rock.'
    }
    else if (computerChoice == 'PAPER' && humanChoice =='ROCK') {
        computerScore++
        result ='You lose! Rock loses to Paper.'
    }
    else if (computerChoice == humanChoice) {
        result ='It\'s a tie!'
    }
    
    // display result
    document.getElementById('result').textContent = result;

    // display score
    document.getElementById('score').textContent= `Score: You: ${humanScore}, Computer: ${computerScore}`;
}

// event listeners for buttons
document.getElementById('rock').addEventListener('click', function() {
    playRound('ROCK', getComputerChoice());
})
document.getElementById('paper').addEventListener('click', function() {
    playRound('PAPER', getComputerChoice());
})
document.getElementById('scissors').addEventListener('click', function() {
    playRound('SCISSORS', getComputerChoice());
})


function playGame() {
    let keepPlaying = true;

    while (keepPlaying) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore} `)

        // ask if player wants another round
        keepPlaying = confirm('Do you want to play another round?')
    }

    console.log('Final Score:');
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('Congratulations, You won!')
    }
    else if (humanScore < computerScore) {
        console.log('You lose, better luck next time')
    }
    else if (humanScore == computerScore) {
        console.log('It\'s a Draw!')
    };
}

playGame();

