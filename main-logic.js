let humanScore = 0;
let computerScore = 0;
let humanWon = false;

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

// Human Choice 

    function getHumanChoice() {
    let humanChoice = prompt("What is your Choice?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
    }
// One round of Rock paper scissors
function playround(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("Draw, you both picked " + humanChoice)
        return
    }

    else if (humanChoice == "rock") {

            if (computerChoice == "scissors"){
            ++humanScore
            humanWon = true;
        }
            else {
            ++computerScore
            humanWon = false;
        }
    }
    else if (humanChoice == "scissors") {

            if (computerChoice == "paper") {
            ++humanScore
            humanWon = true;
        }
            else {
            ++computerScore
            humanWon = false;
        }
        }
    else if (humanChoice == "paper") {

            if (computerChoice == "rock") {
            ++humanScore
            humanWon = true;
        }
            else {
            ++computerScore
            humanWon = false;
        }

        }

    if (humanWon === true) {
                console.log("You Win! " + humanChoice + " beats " + computerChoice);
        }

    else {
                console.log("You Lose! " + computerChoice + " beats " + humanChoice);
        }
        

    }

    // 5 games total logic
    let currentGame = 0;
    const maxGames = 5;

    for (currentGame; currentGame < maxGames; currentGame++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playround(humanChoice, computerChoice[1]);
    }


