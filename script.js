function getComputerChoice() { // getting computer choice
    const randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) {
        return "rock";
    } else if(randomNumber == 1) {
        return "paper";
    } else if(randomNumber == 2) {
        return "scissors";
    }
}

function checkWinner(computerChoice, playerChoice) { // checking the winner
    if(computerChoice === playerChoice) {
        return "draw";
    } else if(
        (computerChoice === "rock" && playerChoice === "paper") || 
        (computerChoice === "paper" && playerChoice === "scissors") || 
        (computerChoice === "scissors" && playerChoice === "rock")
    ) { 
        return "player"; 
    } else {
        return "computer";
    }
}


const rockImg = document.getElementById("rock-img");
const paperImg = document.getElementById("paper-img");
const scissorsImg = document.getElementById("scissors-img");

const images = [rockImg, paperImg, scissorsImg];

let playerScore = document.querySelector(".score--player-span");
let computerScore = document.querySelector(".score--computer-span");


images.forEach((image) => {
    image.addEventListener("click", function() {
        const computerChoice = getComputerChoice();
        let playerChoice = "";

        let playerPick = document.querySelector(".player--pick");
        let computerPick = document.querySelector(".computer--pick");

        let playerLastPick = document.querySelector(".player--pick-last");
        let computerLastPick = document.querySelector(".computer--pick-last");

        switch(image.id) {  // assigns player pick to a variable
            case "rock-img": 
                playerChoice = "rock";
                break;
            case "paper-img":
                playerChoice = "paper";
                break;
            case "scissors-img":
                playerChoice = "scissors";
                break;
        }

        const winner = checkWinner(computerChoice, playerChoice);

        if(winner === "player") { // updates scores
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else if(winner === "computer") {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        } 

        // updates picks/last picks
        if(computerPick.textContent !== "Computer last pick" && playerPick.textContent !== "Your pick") {
            playerLastPick.textContent = playerPick.textContent;
            computerLastPick.textContent = computerPick.textContent;
        }
        playerPick.textContent = playerChoice;
        computerPick.textContent = computerChoice;
    })
})