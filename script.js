// VARIABLE DECLARATIONS

const game = document.querySelector(".game");

const gameContainer = document.querySelector(".game-container");
const gameHeader = document.querySelector(".game-header");


const rockImg = document.getElementById("rock-img");
const paperImg = document.getElementById("paper-img");
const scissorsImg = document.getElementById("scissors-img");


const images = [rockImg, paperImg, scissorsImg];


const playerScore = document.querySelector(".score--player-span");
const computerScore = document.querySelector(".score--computer-span");


const playerPick = document.querySelector(".player--pick");
const computerPick = document.querySelector(".computer--pick");
const playerLastPick = document.querySelector(".player--pick-last");
const computerLastPick = document.querySelector(".computer--pick-last");


const replayContainer = document.querySelector(".replay-container");
const replayButton = document.querySelector(".replay--btn");
const button = document.getElementsByTagName('button');


const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const modalContentText = document.querySelector(".modal-header--text");


const modalLegendPlayerText = document.querySelector(".modal-legend--player-text");
const modalLegendComputerText = document.querySelector(".modal-legend--computer-text");

const overlay = document.createElement('div');

overlay.className = 'overlay';
document.body.appendChild(overlay);


// FUNCTION DECLARATIONS  

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


function showModal(winner) {  // Function to show modal and blur background
    if(winner === "Player Wins!") {
        modalContent.style.boxShadow = "0px 0px 10px 5px #6EEB83";
        modalContentText.style.color = "#6EEB83";
        modalContentText.style.textShadow = "0px 0px 5px #17F43C";
        modalLegendPlayerText.style.textShadow = "0px 0px 5px #17F43C";
        document.body.style.setProperty('--button-hover-bg-color', '#6EEB83');
    } else {
        modalContent.style.boxShadow = "0px 0px 10px 5px #F03A47";
        modalContentText.style.color = "#FF3A47";
        modalContentText.style.textShadow = "0px 0px 5px #CF000E";
        modalLegendComputerText.style.textShadow = "0px 0px 5px #CF000E";
        document.body.style.setProperty('--button-hover-bg-color', '#F03A47');
    }

    game.classList.add('blur', 'pointer-events-off'); // ADDS .blur::before STYLING to the .game div  
    modal.style.display = "block";
    overlay.style.display = "block";

    setTimeout(() => { 
        overlay.style.opacity = 1; 
    }, 10); 

    setTimeout(() => {
        game.classList.add('blur');
    }, 100)
}

function hideModal() {  // Function to hide modal and remove blur
    overlay.style.opacity = 0; // Transition to invisible
    setTimeout(() => {
        overlay.style.display = "none"; // Hide completely after transition
        modal.style.display = "none";
        game.classList.remove('blur', 'pointer-events-off');
    }, 1400); // Wait for the opacity transition to finish   
}


// GAME LOGIC

var playerHistory = [];
var computerHistory = [];

images.forEach((image) => { 
    image.addEventListener("click", function() {
        const computerChoice = getComputerChoice();
        let playerChoice = "";

        switch(image.id) {  //  assigns player choice to a variable
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

        if(winner === "player") { //  updates scores
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else if(winner === "computer") {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        } 

        //  updates picks
        if(computerPick.textContent !== "Computer last pick" && playerPick.textContent !== "Your pick") {
            playerLastPick.textContent = playerPick.textContent;
            computerLastPick.textContent = computerPick.textContent;
        }

        playerPick.textContent = playerChoice; // WRITES PLAYERS PICK TO player--pick div
        computerPick.textContent = computerChoice; // WRITES COMPUTER PICK TO computer--pick div

        if(playerScore.textContent === "1") { 
            modalContentText.textContent = "Player Wins!";
            showModal(modalContentText.textContent);
        } else if(computerScore.textContent === "1") {
            modalContentText.textContent = "Computer Wins!";
            showModal(modalContentText.textContent);
        }
    })
})

//modalContentText.textContent = "Player Wins!";
//showModal(modalContentText.textContent);