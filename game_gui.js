// initialize points for global access
let playerPoints = 0;
let computerPoints = 0;

// capitalize the first letter of a string
function capitalize(string) {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// make the computer pick a random play ('rock', 'paper' or 'scissors'), and return that value.
function computerPlay() {
    let plays = ['rock', 'paper', 'scissors'];
    return plays[Math.floor(Math.random() * plays.length)];
}

function displayResult(result) {
    document.querySelector('.result').textContent = result;
}

function displayPoints(winner) {
    document.querySelector(`.${winner}-points`).textContent = `${capitalize(winner)}: ${winner === 'player' ? playerPoints : computerPoints}`;
}

function checkWinStatus() {
    if (computerPoints >= 5) {
        return 'Computer has won the game!';
    } else if (playerPoints >= 5) {
        return 'Player has won the game!';
    } else {
        return false;
    }
}

// prompt the user to input their play
document.querySelector('.btn-rock').addEventListener('click', () => {
    if (checkWinStatus()) return;
    let result = playRound('rock', computerPlay());
    displayResult(result);
});

document.querySelector('.btn-paper').addEventListener('click', () => {
    if (checkWinStatus()) return;
    let result = playRound('paper', computerPlay());
    displayResult(result);
});

document.querySelector('.btn-scissors').addEventListener('click', () => {
    if (checkWinStatus()) return;
    let result = playRound('scissors', computerPlay());
    displayResult(result);
});

document.querySelector('.reset').addEventListener('click', () => {
    playerPoints = 0;
    computerPoints = 0;
    displayPoints('player');
    displayPoints('computer');
    displayResult('Make a play, any play!');
});
// using the computer's play and the player's play, check which player won based on their values (rock beats scissors, scissors beats paper, paper beats rock)
function playRound(playerSelection, computerSelection) {
    // return value announcing the winner, and what each player chose (ex: 'Computer won! Rock beats scissors.')
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
        playerPoints++;
        displayPoints('player');
        return checkWinStatus() || `Player won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        return checkWinStatus() || 'It\'s a tie!';
    } else {
        computerPoints++;
        displayPoints('computer');
        return checkWinStatus() || `Computer won! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    }
}
    // if (playerPoints > computerPoints) {
    //     return 'Player has won the game!';
    // } else if (playerPoints < computerPoints) {
    //     return 'Computer has won the game!';
    // } else {
    //     return 'Tie game!';
    // }
