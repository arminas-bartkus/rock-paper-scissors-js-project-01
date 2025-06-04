let humanScore = 0;
let computerScore = 0;
let humanWon = false;

let currentGame = 0;
const maxGames = 5;



let value = "";
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

btnContainer.addEventListener("click", function (event) {

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


        // switch (target.id) {
        //     case humanChoice = "rock":
        //         return humanChoice
        //     case humanChoice = "paper":
        //         break
        //     case humanChoice = "scissors":
        //         break
        // }
    
    
    });


// Human Choice 
// let getHumanChoice = (str) => {

//     let humanChoice = str;
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

// // // 5 games total logic
// // for (currentGame; currentGame < maxGames; currentGame++) {

// //         let humanChoice = getHumanChoice();
// //         let computerChoice = getComputerChoice();

// //         playround(humanChoice, computerChoice[1]);
// // }

// let winnerMessage = (humanScore == computerScore) ? ("It's a draw with " + humanScore + " point(s) each") :
//         humanScore < computerScore ? ("The computer wins with " + computerScore + " points") :
//         humanScore > computerScore ? ("The human wins with " + humanScore + " points") : null;


// console.log(winnerMessage);