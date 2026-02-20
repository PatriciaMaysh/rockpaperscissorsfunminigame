const game = ['rock', 'scissors', 'paper']
function play (userChoice) {
    const j = Math.floor (Math.random () * (game.length));

    const computerChoice = game[j];
    
    document.getElementById ("user").textContent = "Your choice:" + userChoice;

    document.getElementById ("computer").textContent = "Computer choice:" + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {

        result = "It's a draw!";

    } 

    else if (
        (userChoice === "rock"  && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        result = "You win! 🎉";

    } 

    else {

        result = "Computer wins 😢";
    
    }

    document.getElementById ("results").textContent = result;

}