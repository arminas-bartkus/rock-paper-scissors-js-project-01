let humanScore = 0;
let computerScore = 0;
let humanWon = false;

let currentGame = 0;
const maxGames = 5;

// Computer Choice
function getComputerChoice() {
    
    let initialRandomNumber = Math.floor((Math.random())*100); 

    if (initialRandomNumber == 0) {
        getComputerChoice()
    }
    else {
 
            let computerChoice = (initialRandomNumber <= 33) ? "rock" :
    (initialRandomNumber > 33 && initialRandomNumber <= 66) ? "scissors" :
    (initialRandomNumber > 66 && initialRandomNumber <= 99) ? "paper" : null ;
 
        return [initialRandomNumber, computerChoice]
    }

}

btnContainer = document.querySelector("#container");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");


let scoreRecord = document.querySelector("#scoreRecord");

let humanScoreDiv = document.querySelector("#humanScore");
let compScoreDiv = document.querySelector("#compScore")

btnContainer.addEventListener("click", function (event) {

    if (currentGame < maxGames) {
        ++currentGame
        let target = event.target;
        computerChoice = getComputerChoice()
        computerChoice = computerChoice[1];
    
        switch (target.id) {
            case "rock": playround(target.id, computerChoice);
            break   
            case "paper": playround(target.id, computerChoice);
            break
            case "scissors": playround(target.id, computerChoice);
            break
        }
    if (currentGame == maxGames) {

        let winnerMessage = (humanScore == computerScore) ? ("It's a draw with " + humanScore + " point(s) each") :
        humanScore < computerScore ? ("The computer wins with " + computerScore + " points") :
        humanScore > computerScore ? ("The human wins with " + humanScore + " points") : null;
        
        console.log(winnerMessage);
    }
    }
});


// One round of Rock paper scissors
function playround(humanChoice, computerChoice) {


    // if (humanChoice == computerChoice) {
    //     console.log("Draw, you both picked " + humanChoice)
    //     return
    // }

    if (humanChoice == "rock") {

            if (computerChoice == "scissors"){
            humanWon = true;
        }
            else {
            humanWon = false;
        }
    }
    else if (humanChoice == "scissors") {

            if (computerChoice == "paper") {
            humanWon = true;
        }
            else {
            humanWon = false;
        }
        }
    else if (humanChoice == "paper") {

            if (computerChoice == "rock") {
            humanWon = true;
        }
            else {
            humanWon = false;
        }

        }

        listItem = document.createElement("li");
        scoreRecord.appendChild(listItem);

    if (humanWon === true) {
                listItem.textContent = ("You Win! " + humanChoice + " beats " + computerChoice);
                ++humanScore
                humanScoreDiv.textContent = humanScore; 
                compScoreDiv.textContent = computerScore;     
            }

    else {
                listItem.textContent = ("You Lose! " + computerChoice + " beats " + humanChoice);
                ++computerScore
                humanScoreDiv.textContent = humanScore; 
                compScoreDiv.textContent = computerScore;   
            }       

        }