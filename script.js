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

        switch(humanChoice) {
            case "rock":
                if(computerChoice == "paper") {
                    console.log("Paper beats rock! The Computer wins the round!");
                    winner = "computer"
                    return winner;
                } else if(computerChoice == "rock") {
                    console.log("It's a draw!")
                    break;
                } else if(computerChoice == "scissors") {
                    console.log("Rock beats scissors! Human wins the round!");
                    winner = "human";
                    return winner;
                }
            case "paper":
                if(computerChoice == "paper") {
                    console.log("It's a draw!");
                    break;
                } else if(computerChoice == "rock") {
                    console.log("Paper beats rock! The Computer wins the round!");
                    winner = "computer"
                    return winner;
                } else if(computerChoice == "scissors") {
                    console.log("Rock beats scissors! Human wins the round!");
                    winner = "human";
                    return winner;
                }
            case "scissors":
                if(computerChoice == "scissors") {
                    console.log("It's a draw!");
                    break;
                } else if(computerChoice == "rock") {
                    console.log("Rock beats scissors! The Computer wins the round!");
                    winner = "computer"
                    return winner;
                } else if(computerChoice == "paper") {
                    console.log("Scissors beat paper! Human wins the round!");
                    winner = "human"
                    return winner;
                }
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

playGame()
