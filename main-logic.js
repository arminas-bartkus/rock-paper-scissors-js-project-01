

// Computer Choice

function getComputerChoice () {
    
    let initialRandomNumber = Math.floor((Math.random())*100); 

    if (initialRandomNumber == 0) {
        getComputerChoice()
    }
    else {
 
            let message = (initialRandomNumber <= 33) ? "Rock" :
    (initialRandomNumber > 33 && initialRandomNumber <= 66) ? "Scissors" :
    (initialRandomNumber > 66 && initialRandomNumber <= 99) ? "Paper" : null ;
 
        return [initialRandomNumber, message]
    }

}
// console.log(getComputerChoice());

// Human Choice 


let getHumanChoice = () => {
    let humanChoice = prompt("What is your Choice?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}
 console.log(getHumanChoice());
