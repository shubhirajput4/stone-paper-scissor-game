let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice1");
const mssg = document.querySelector("#mssg"); // Use querySelector to select a single element
const userpara=document.querySelector("#user");
const comppara=document.querySelector("#comp");
// Generate a random computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Corrected "scissor" to "scissors"
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Function for a draw game
const drawgame = () => {
    console.log("Game was draw");
    mssg.innerText = "Game was a draw. Play again!";
    mssg.style.backgroundColor="blue";
};

// Function to show the winner
const showwinner = (userwin,choiceid,comChoice) => {
    if (userwin) {
        user++;
        userpara.innerText=user;
        console.log("You win!");
        mssg.innerText = `You win!. Your ${choiceid} beats ${comChoice}`;
        mssg.style.backgroundColor="green";
    } else {
        comp++;
        comppara.innerText=comp;
        console.log("You lose!");
        mssg.innerText = `You lost. ${comChoice} beats Your ${choiceid}`;
        mssg.style.backgroundColor="red";
    }
};

// Main game logic
const playGame = (choiceid) => {
    console.log("User choice = ", choiceid);

    // Generate computer choice
    const comChoice = genCompChoice();
    console.log("Computer choice = ", comChoice);

    // Check for a draw
    if (choiceid === comChoice) {
        drawgame();
    } else {
        let userwin = true;

        // Determine winner
        if (choiceid === "rock") {
            userwin = comChoice === "paper" ? false : true;
        } else if (choiceid === "paper") {
            userwin = comChoice === "scissors" ? false : true;
        } else {
            userwin = comChoice === "rock" ? false : true;
        }

        showwinner(userwin,choiceid,comChoice);
    }
};

// Add click event listeners to choices
choices.forEach((choice1) => {
    choice1.addEventListener("click", () => {
        const choiceid = choice1.getAttribute("id");
        playGame(choiceid);
    });
});
