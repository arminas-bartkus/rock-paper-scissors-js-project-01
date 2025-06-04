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

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors")
let btnContainer = document.querySelector("#container")


btnContainer.addEventListener('click', function(event) {
    
console.log(event);

    // let target = event.target;

    switch(target.id) {
        case "rock":
            console.log("Rock picked");
            break
        case "paper":
            console.log("Paper picked");
            break
        case "scissors":
            console.log("Scissors");
            break
            
    }

});



// Human Choice 
// let getHumanChoice = () => {
//     let humanChoice = prompt("Rock, Paper, or Scissors?");
//     humanChoice = humanChoice.toLowerCase();
//     return humanChoice
// }

// One round of Rock paper scissors
function playround(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("Draw, you both picked " + humanChoice)
        return
    }

    else if (humanChoice == "rock") {

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

    if (humanWon === true) {
                console.log("You Win! " + humanChoice + " beats " + computerChoice);
                ++humanScore        
            }

    else {
                console.log("You Lose! " + computerChoice + " beats " + humanChoice);
                ++computerScore
            }       
        

}

// // 5 games total logic
// for (currentGame; currentGame < maxGames; currentGame++) {

//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();

//         playround(humanChoice, computerChoice[1]);
// }

let winnerMessage = (humanScore == computerScore) ? ("It's a draw with " + humanScore + " point(s) each") :
        humanScore < computerScore ? ("The computer wins with " + computerScore + " points") :
        humanScore > computerScore ? ("The human wins with " + humanScore + " points") : null;


console.log(winnerMessage);