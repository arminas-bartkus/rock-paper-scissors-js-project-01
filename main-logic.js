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
 
            let computerChoice = (initialRandomNumber <= 33) ? "Rock" :
    (initialRandomNumber > 33 && initialRandomNumber <= 66) ? "Scissors" :
    (initialRandomNumber > 66 && initialRandomNumber <= 99) ? "Paper" : null ;
 
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

let winnerText = document.querySelector("#winnerText")

btnContainer.addEventListener("click", function (event) {

    if (currentGame < maxGames) {
        ++currentGame
        let target = event.target;
        let newTarget = "";
        computerChoice = getComputerChoice()
        computerChoice = computerChoice[1];
    
        switch (target.id) {
            case "rock": 
            newTarget = target.id.charAt(0).toUpperCase() + target.id.slice(1);
            playround(newTarget, computerChoice);
            break   
            case "paper": 
            newTarget = target.id.charAt(0).toUpperCase() + target.id.slice(1);
            playround(newTarget, computerChoice);
            break
            case "scissors":
            newTarget = target.id.charAt(0).toUpperCase() + target.id.slice(1);
            playround(newTarget, computerChoice);
            break
        }
    if (currentGame == maxGames) {

        let winnerMessage = (humanScore == computerScore) ? ("It's a draw with " + humanScore + " point(s) each") :
        humanScore < computerScore ? ("The computer wins with " + computerScore + " points") :
        humanScore > computerScore ? ("The human wins with " + humanScore + " points") : null;
        
        winnerText.textContent = winnerMessage;
    }
    }
});


// One round of Rock paper scissors
function playround(humanChoice, computerChoice) {

    listItem = document.createElement("li");
    scoreRecord.appendChild(listItem);


     if (humanChoice == computerChoice) {
         listItem.textContent = "Draw, you both picked " + humanChoice;
         return
     }

    if (humanChoice == "Rock") {

            if (computerChoice == "Scissors"){
            humanWon = true;
        }
            else {
            humanWon = false;
        }
    }
    else if (humanChoice == "Scissors") {

            if (computerChoice == "Paper") {
            humanWon = true;
        }
            else {
            humanWon = false;
        }
        }
    else if (humanChoice == "Paper") {

            if (computerChoice == "Rock") {
            humanWon = true;
        }
            else {
            humanWon = false;
        }

        }

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