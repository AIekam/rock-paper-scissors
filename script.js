function getComputerChoice() { // Getting computer choice
    const randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) {
        return "rock";
    } else if(randomNumber == 1) {
        return "paper";
    } else if(randomNumber == 2) {
        return "scissors";
    }
}

function checkWinner(computerChoice, humanChoice) { // Checking the winner
    if(computerChoice === humanChoice) {
        return "draw";
    } else if(
        (computerChoice === "rock" && humanChoice === "paper") || 
        (computerChoice === "paper" && humanChoice === "scissors") || 
        (computerChoice === "scissors" && humanChoice === "rock")
    ) { 
        return "human"; 
    } else {
        return "computer";
    }
}


const rockImg = document.getElementById("rock-img");
const paperImg = document.getElementById("paper-img");
const scissorsImg = document.getElementById("scissors-img");

const images = [rockImg, paperImg, scissorsImg];


images.forEach((image) => {
    image.addEventListener("click", function() {
        const computerChoice = getComputerChoice();
        let humanChoice = "";

        switch(image.id) {
            case "rock-img": 
                humanChoice = "rock";
                break;
            case "paper-img":
                humanChoice = "paper";
                break;
            case "scissors-img":
                humanChoice = "scissors";
                break;
        }

        const winner = checkWinner(computerChoice, humanChoice);
        console.log(winner);
    })
})

