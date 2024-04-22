let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

 

const generateCompChoice = ()=>{
    const options = ["rock","scissors","paper"];
    const randInd =  Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame =() =>{
   
    msg.innerText = "DRAW Play Again!!"
    msg.style.backgroundColor= "purple";
};
const showWinner=(userWin, userChoice, compChoice) =>{
    if(userWin) { 
     userScore++;
     userScorePara.innerText = userScore;
    
     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
     msg.style.backgroundColor= "green";
     } else{
       
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
     }
};

const playGame= (userChoice)=>{
    console.log("user Choice = ", userChoice);
    const compChoice = generateCompChoice();
    console.log("comp Choice = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
     } else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin =  compChoice === "paper" ? false : true;
            
        } else if(userChoice === "paper"){
            userWin =  compChoice === "scissors" ? false : true;
            
        } else{
            userWin =  compChoice === "rock" ? false : true;
            
        };
        showWinner(userWin,userChoice,compChoice);
     }

};


 
choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       
        playGame(userChoice);
    });
});