function getComputerChoice() {
    const rock = "rock"
    const paper = "paper"
    const scissors = "scissors"
    const randomNumber = Math.floor(Math.random() * 3)

    if(randomNumber == 0) {
        return rock
    } else if(randomNumber == 1) {
        return paper
    } else if(randomNumber == 2) {
        return scissors
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");

    if(choice != null) {
        choice = choice.toLowerCase();
    } else {
        console.log("Prompt cancelled or no input.");
    }

    if(choice == "rock") {
        return "rock"
    } else if(choice == "paper") {
        return "paper"
    } else if(choice == "scissors") {
        return "scissors"
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let game_winner = "";

    function playRound() {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
    
        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
            return "draw";
        }
    
        const winningConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
    
        if (winningConditions[humanChoice] === computerChoice) {
            console.log(`${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}! Human wins the round!`);
            return "human";
        } else {
            console.log(`${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}! The Computer wins the round!`);
            return "computer";
        }
    }    

    for(let i = 0; i < 5; i++) {
        let winner = playRound();

        if(winner == "computer") {
            computerScore++;
        } else if(winner == "human") {
            humanScore++;
        }
    }

    if(humanScore > computerScore) {
        game_winner = "Human";
    } else if(humanScore < computerScore) {
        game_winner = "Computer";
    }

    console.log("Human scored - " + humanScore + "   Computer scored - " + computerScore);
    
    if(game_winner == 0) {
        console.log("It's a draw 5 times in a row!")
    } else {
        console.log("The winner is " + game_winner);
    }
}

// playGame()
