playGame();

function playGame() {
    const values = {
        rock: 'rock',
        paper: 'paper',
        scissors: 'scissors',
    };

    const players = {
        none: 'none',
        human: 'human',
        computer: 'computer',
    };

    const scores = {
        humanScore: 0,
        computerScore: 0,
    };

    const getHumanChoice = () => prompt('rock, paper or scissors ?');

    const sanitizeHumanChoice = humanChoice => humanChoice.toLowerCase();

    const getComputerChoice = () => {
        const random = Math.floor(Math.random() * 3);
        if (random === 0) {
            return values.rock;
        } else if (random === 1) {
            return values.paper;
        } else {
            return values.scissors;
        }
    }

    const logRoundResults = (winner, humanSelection, computerSelection) => {
        if (winner === players.none) {
            console.log('Round result: tie!');
        } else if (winner === players.human) {
            console.log(`Round result: you win! ${humanSelection} beats ${computerSelection}`);
        } else {
            console.log(`Round result: you lose! ${computerSelection} beats ${humanSelection}`);
        }
    };

    const updateScores = winner => {
        if (winner === players.human) {
            scores.humanScore++;
        }
        if (winner === players.computer) {
            scores.computerScore++;
        }
    }

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            return players.none;
        } else if (humanChoice === values.rock) {
            return computerChoice === values.paper ? players.computer : players.human;
        } else if (humanChoice === values.paper) {
            return computerChoice === values.rock ? players.human : players.computer;
        } else {
            return computerChoice === values.rock ? players.computer : players.human;
        }
    }

    const logGameResults = () => {
        if (scores.humanScore === scores.computerScore) {
            console.log('Game result: tie!');
        } else if (scores.humanScore > scores.computerScore) {
            console.log(`Game result: you win! ${scores.humanScore} to ${scores.computerScore}`);
        } else {
            console.log(`Game result: you lose! ${scores.humanScore} to ${scores.computerScore}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const sanitizedHumanSelection = sanitizeHumanChoice(humanSelection);
        const computerSelection = getComputerChoice();
        const winner = playRound(sanitizedHumanSelection, computerSelection);
        updateScores(winner);
        logRoundResults(winner, sanitizedHumanSelection, computerSelection);
    }

    logGameResults();
}