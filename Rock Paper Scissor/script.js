  let rock =  document.querySelector("#rock");
  let paper = document.querySelector("#paper");
  let scissor = document.querySelector("#scissor");
  let result = document.querySelector("#result");
  let user = document.querySelector("#user");
  user.textContent = 0;
  
  let comp = document.querySelector("#cmp");
  comp.textContent=0;
  let computerChoice;
  let choice = ['rock','paper','scissor']; //player-choice

  
  rock.addEventListener("click",function()
{
   
   game('rock');

 
});

paper.addEventListener("click",function()
{
    
    game('paper');
});

scissor.addEventListener("click",function()
{
    
    game('scissor');
});

function game(playerChoice)
  {
      computerChoice = choice[Math.floor(Math.random()*3)];
      if(playerChoice==='rock' && computerChoice==='paper')
{
    result.textContent = "You lose , Paper wins";
    comp.textContent++;
        
}

if(playerChoice==='paper' && computerChoice ==='rock')
{
    result.textContent = "You win , Rock lose";
    user.textContent ++;
}

if(playerChoice==='scissor' && computerChoice ==='paper')
{
    result.textContent="You win, Paper lose";
     user.textContent ++;
}

if(playerChoice==='paper' && computerChoice === 'scissor')
{
    result.textContent = "You lose, Scissor wins";
     comp.textContent ++;
}

if(playerChoice==='rock' && computerChoice==='scissor')
{
    result.textContent = "You win , Scissor lose ";
     user.textContent ++;
}
if(playerChoice==='scissor' && computerChoice==='rock')
{
    result.textContent = "You lose , Rock wins ";
     comp.textContent ++;
}
 if(playerChoice==='paper' && computerChoice === 'paper')
{
    result.textContent = "It's a tie";
     
}
if(playerChoice==='rock' && computerChoice === 'rock')
{
    result.textContent = "It's a tie";
     
}
if(playerChoice==='scissor' && computerChoice === 'scissor')
{
    result.textContent = "It's a tie";
     
}

  }



 