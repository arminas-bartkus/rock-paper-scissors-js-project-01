let humanScore = 0;
let computerScore = 0;

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
getComputerChoice();

// Human Choice 


let getHumanChoice = () => {
    let humanChoice = prompt("What is your Choice?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice

}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playround(humanChoice, computerChoice[1]);

// One round of Rock paper scissors

function playround(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("Draw, you both picked " + humanChoice + computerChoice)
    }

    else if (humanChoice == "rock") {

            if (computerChoice == "scissors"){
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
        }
            else {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        }
    }
    else if (humanChoice == "scissors") {

            if (computerChoice == "paper") {
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
        }
            else {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        }
        }
    else if (humanChoice == "paper") {

            if (computerChoice == "rock") {
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
        }
            else {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        }

        }
    }
