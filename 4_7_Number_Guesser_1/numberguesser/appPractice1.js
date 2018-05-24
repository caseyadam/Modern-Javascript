// Application picks a number between 1 and 10
// User enters a guess and clicks Submit
// If incorrect, message says the number of guesses left out of 3 (red)
// If correct, message says the number (green)
// If the user never guesses right, it displays the right number. (red)
// At the end, the user can't enter numbers anymore
// Submit button changes to 'Try Again' and resets the challenge

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // VALIDATE USER ENTERS CORRECT VALUE
  if(isNaN(guess) || guess < min || guess > max){
    message.textContent('Please enter a number.');
  }
  // CHECK IF WON & DISPLAY WINNING NUMBER
  if(guess === winningNum){
    setMessage(`You win! Winning number was ${winningNum}.`);
  } else {
  // DECREMENT GUESSES
  guessesLeft -= 1;
  // ANY GUESSES LEFT?
  if(guessesLeft === 0){
    // GAME OVER
    gameOver(){

    }
  } else{
    // WRONG, GUESS AGAIN
    setMessage(){

    }
  }


  }

});


//SET MESSAGE
function setMessage(msg, color){
  
};

// GAME OVER
function gameOver(won, msg){

};



// WHAT DONT I GET
// 1. How do I decrement the guess left and store the value?
// - Use an assignment operator


// *** While I did generate a random number between 1 and 10, I did not do it like he did.
// *** He sets Let variables to the min, max, winningNumber function, and guesses left.
// *** You can get the click button function working without needing to generate a random number.
// *** Note that function runs on click not submit. Its not a form.
// *** Remember you must run a function for each result. You cannot just .textContent a message into the HTML.
