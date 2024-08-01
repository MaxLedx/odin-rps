
playGame();

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 1 / 3) {
        return "rock";
    } else if (randomNumber <= 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        const input = prompt('rock, paper, scissors ?').toLowerCase();
        if (input === 'rock' || input === 'paper' || input === 'scissors') {
            return input;
        }
    }
}

function playRound(humanChoice, computerChoice) {
    const lowerHumanChoice = humanChoice.toLowerCase();
    const lowerComputerChoice = computerChoice.toLowerCase();
    if (lowerHumanChoice === lowerComputerChoice) {
        console.log(`Tie! ${lowerHumanChoice} equals ${lowerComputerChoice}`);
        return 'none';
    } else if (lowerHumanChoice === 'rock' && lowerComputerChoice === 'paper') {
        console.log(`You lose! ${lowerComputerChoice} beats ${lowerHumanChoice}`);
        return 'computer';
    } else if (lowerHumanChoice === 'rock' && lowerComputerChoice === 'scissors') {
        console.log(`You win! ${lowerHumanChoice} beats ${lowerComputerChoice}`);
        return 'human';
    } else if (lowerHumanChoice === 'paper' && lowerComputerChoice === 'rock') {
        console.log(`You win! ${lowerHumanChoice} beats ${lowerComputerChoice}`);
        return 'human';
    } else if (lowerHumanChoice === 'paper' && lowerComputerChoice === 'scissors') {
        console.log(`You lose! ${lowerComputerChoice} beats ${lowerHumanChoice}`);
        return 'computer';
    } else if (lowerHumanChoice === 'scissors' && lowerComputerChoice === 'rock') {
        console.log(`You lose! ${lowerComputerChoice} beats ${lowerHumanChoice}`);
        return 'computer';
    } else if (lowerHumanChoice === 'scissors' && lowerComputerChoice === 'paper') {
        console.log(`You win! ${lowerHumanChoice} beats ${lowerComputerChoice}`);
        return 'human';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const winner = playRound(humanChoice, computerChoice);
        if (winner === 'human') {
            humanScore++;
        }
        if (winner === 'computer') {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log('You win the game!')
    } else if (humanScore < computerScore) {
        console.log('You lose the game!')
    } else {
        console.log('Tie game!');
    }
}