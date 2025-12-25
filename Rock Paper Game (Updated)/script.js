let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");
let result = document.querySelector("#result");
let userCount = document.querySelector("#user");
userCount.textContent = 0;
let computerCount = document.querySelector("#computer");
computerCount.textContent = 0;


let choice = ['rock','paper','scissor'];


rockBtn.addEventListener("click",function()
{
    gameLogic('rock');
});

paperBtn.addEventListener("click",function()
{
    gameLogic('paper');
});

scissorBtn.addEventListener("click",function()
{
    gameLogic('scissor');
});

function gameLogic(userChoice){
  let  computerChoice = choice[Math.floor(Math.random()*3)];



if(userChoice==='rock'&& computerChoice==='paper')
{
    result.textContent = " Computer wins ";
    computerCount.textContent++;
}

if(userChoice==='rock' && computerChoice==='scissor')
{
    result.textContent =" User wins";
    userCount.textContent++;
}

if(userChoice==='paper' && computerChoice==='rock')
{
    result.textContent="user wins";
    userCount.textContent++;
}

if(userChoice === 'paper' && computerChoice === 'scissor')
{
    result.textContent = " computer wins";
    computerCount.textContent ++;
}

if(userChoice === 'scissor' && computerChoice === 'rock')
{
    result.textContent = " computer wins";
    computerCount.textContent ++;
}

if(userChoice === 'scissor' && computerChoice === 'paper')
{
    result.textContent = " user wins";
    userCount.textContent ++;
}

if(userChoice ===  computerChoice )
{
    result.textContent = " Draw ";
    
}

}
