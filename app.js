let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".info");
let userscore=document.querySelector(".userscore");
let compscore=document.querySelector(".compscore");
let computerchoices=["rock","paper","scissor"];
let userwin=0;
let compwin=0;
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let userChoice=choice.getAttribute("id");
       checkwinner(userChoice);
    })
});
const compwinner=(userChoice,compChoice)=>{
    msg.innerText=`You lose! ${compChoice} beats ${userChoice}, Try again`;
    msg.style.backgroundColor="red";
    compwin+=1;
    compscore.innerText=compwin;
}
const userwinner=(userChoice,compChoice)=>{
    msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userwin+=1;
    userscore.innerText=userwin;
}
const checkwinner=(userChoice)=>{
    const index=compChoice();
    let computerChoice=computerchoices[index];
    if(userChoice===computerChoice){
       msg.innerText="Game was draw!";
       msg.style.backgroundColor="black";
    }
    else{
        if(userChoice==="rock"){
            if(computerChoice==="paper"){
                  compwinner(userChoice,computerChoice);
            }
            else{
                userwinner(userChoice,computerChoice);
            }
        }
        else if(userChoice==="paper"){
            if(computerChoice==="scissor"){
                compwinner(userChoice,computerChoice);
          }
          else{
              userwinner(userChoice,computerChoice);
          }
        }
        else
        {
          if(computerChoice==="rock"){
                compwinner(userChoice,computerChoice);
          }
          else{
              userwinner(userChoice,computerChoice);
          }
        }
    }
    
    
}
const compChoice=()=>{
    return Math.floor(Math.random()*3);
}