let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user");
const compscore = document.querySelector("#comp");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const radidx = Math.floor(Math.random() * 3);
    return options[radidx];
}
const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again";
    msg.style.backgroundColor = "#081f31";
}
const showWinner = (userwin, userChoice, compchoice) => {
    if (userwin) {
        msg.innerText = `You win!  Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
        user++;
        userscore.innerText = user;
    } else {
        msg.innerText = `You lose.  ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "orchid";
        comp++;
        compscore.innerText = comp;
    }
}
const playGame = (userChoice) => {
    const compchoice = genCompChoice();

    if (userChoice === compchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compchoice === "rock" ? true : false;
        } else if (userChoice === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compchoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
