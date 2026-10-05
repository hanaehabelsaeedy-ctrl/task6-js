const secretnum = 7;
let attempts = 5;
let checkBtn = document.getElementById ('check');
let guessinp=document.getElementById("Guess");
const message = document.getElementById("message");
const Attempts = document.getElementById("attempts");
const Game = document.getElementById("game");
let resetBTN = document.getElementById("b2");

checkBtn.addEventListener("click" , function()
{
   const guess = guessinp.value;
   const guessnum = Number(guess);

   if(guess ==="")
   {
    message.textContent = "Enter a number";
    return;
   }

   if(guessnum < 1 || guessnum > 10)
   {
    message.textContent = "Choose a number from 1 to 10";
   }

   if(guessnum === secretnum)
   {
    message.textContent = "Correct!";
    Game.classList.add("win");
    checkBtn.disabled = true;
   }

   else{
    attempts--;
    Attempts.textContent = attempts;
    if(attempts ===0)
    {
        message.textContent ="Game over";
        checkBtn.disabled = true;
        Game.classList.add("lose");

    }
    if(guessnum > secretnum)
    {
        message.textContent = "Too high";
    }

    else
    {
       message.textContent = "Too low";

    }
}
});

function resetgame()
{
    attempts = 5;
    Attempts.textContent = attempts;
    guessinp.value = "";
    message.textContent = "guess from 1 to 10";
    checkBtn.disabled = false;
    Game.classList.remove("win","lose");
}
resetBTN.addEventListener("click",resetgame);
