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

// prompt the user to input their play
function userPlay() {
    let invalidPlay = true;
    let play = '';
    // makes sure user picks valid play (rock, paper or scissors)
    while (invalidPlay) {
        // lowercase user input for case insensitivity
        play = prompt('What will you choose: Rock, Paper, or Scissors?', '').toLowerCase().trim();
        if (play === 'rock' || play === 'paper' || play === 'scissors') {
            invalidPlay = false;
        }
    }
    // return user play
    return play.toLowerCase().trim();
}
// using the computer's play and the player's play, check which player won based on their values (rock beats scissors, scissors beats paper, paper beats rock)
function playRound(playerSelection, computerSelection) {
    // return value announcing the winner, and what each player chose (ex: 'Computer won! Rock beats scissors.')
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
        return `Player won! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else {
        return `Computer won! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    }
}
// play the game 5 times in function game()
function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(userPlay(), computerPlay());

        // display the value returned on who won
        console.log(result);

        // tally up the points
        if (result.slice(0, 6) === 'Player') {
            playerPoints++;
        } else if (result.slice(0, 8) === 'Computer') {
            computerPoints++;
        }
    }
    // choose the final winner based on who won the most rounds (or tie if they have the same wins)
    if (playerPoints > computerPoints) {
        return 'Player has won the game!';
    } else if (playerPoints < computerPoints) {
        return 'Computer has won the game!';
    } else {
        return 'Tie game!';
    }
}

// Print the results of the overall game result
console.log(game());
