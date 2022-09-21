let r = "rock";
let p = "paper";
let s = "scissors";
let playerScore = 0;
let computerScore = 0;
console.log(playerScore)
console.log(computerScore)

function computerPlay() {

    computerSelection = [r, p, s];
    random = Math.floor(Math.random() * computerSelection.length);
    console.log('The computer plays ' + computerSelection[random] + '!');
    return computerSelection[random];
}

function playerPlay() {

    playerSelection = prompt("What do you want to play?");
    

    if (playerSelection.toLowerCase() == r) {

        console.log('The human plays ' + playerSelection + '!');
        return playerSelection;

    }
    
    if (playerSelection.toLowerCase() == p ) {

        console.log('The human plays ' + playerSelection + '!');
        return playerSelection;

    }
    

    if (playerSelection.toLowerCase() == s) {

        console.log('The human plays ' + playerSelection + '!');
        return playerSelection;
    }
}

function playRound(playerSelection, computerSelection) {

    let computerRound = computerPlay();
    let playerRound = playerPlay();

    if (computerRound == playerRound) {

        console.log("It's a tie!")
        playerScore = ++playerScore;
        computerScore = ++computerScore;
    }  

    else if (computerRound == r) {

        if (playerRound == p) {
            
        console.log("You win! Paper beats rock!")
        playerScore = ++playerScore;
        }

        if (playerRound == s) {

        console.log("You lose, human! Rock beats scissors!")
        computerScore = ++computerScore;
        }
    }
    
    else if (computerRound == p) {

        if (playerRound == r) {
                console.log("You lose, Human! Paper beats rock!")
                computerScore = ++computerScore;
            }
        if (playerRound == s) {

                console.log("You win! Scissors beat paper")
                playerScore = ++playerScore;
            }
    }
    
    else if (computerRound == s) {

        if (playerRound == p) {
            
            console.log("You lose, Human! Scissors beats paper!")
            computerScore = ++computerScore;
        }

        if (playerRound == r) {
            console.log("You win! Rock beats scissors")
            playerScore = ++playerScore;
    }

    else {
            console.log("Error");

        }

} 
}

function playGame(computerRound, playerRound) {
    for (let i = 1; i < 6; i++) {
        console.log("Round " +i)
        playRound()
        console.log(playerScore)
        console.log(computerScore)
    }
    } 


function declareWinner() {
    if (playerScore > computerScore) {
        console.log ("You win, human! Enjoy it while you can!");
    } 

    else if (playerScore == computerScore) {
        console.log ("It's a tie, d!");
    } 
    
    else {
        console.log ("You lost...damn it!");
    }

}

playGame()
declareWinner()