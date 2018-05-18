/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer upon losing
- Let player choose to play again
*/

// Game values
// Note you don't have to put a ; after every variable. Rather you can use a comma until the last one.
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
// This allows you to update the text with javascript in the min and max spans
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess button clicked
guessBtn.addEventListener('click', function(){
  // Because the value entered by the user becomes a string, we use parseInt to change it into a number
  // If you console log the number, you will see it is black which means its a string
  let guess = parseInt(guessInput.value);
  // Validate input
  // Not only do we want to see if the number is correct, we want to make sure the field isn't blank, the number isn't less than the min-number or higher than the max number.
  // Note you cannot put 'guess ==== NaN' in the if statement. There is a function that checks called isNan().
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  //Check if the user won
  if(guess === winningNum){
    // Game over - won
    // This data gets passed into the gameOver function below if the user wins
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
    // This code below is optimized by the code above
    // // Disable input
    // guessInput.disabled = true;
    // // Change border color
    // guessInput.style.borderColor = 'green';
    // // You Won! message
    // // Here we call set message too but we pass in different info to the setMessage function
    // setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

  } else {
    // User guessed wrong number so subtract one chance
    // This is a short hand way of writing 'guessLeft = guessesLeft -1'
    guessesLeft -= 1;
    // Now we want to check if there are any guesses left
    if(guessesLeft === 0){
      // Game over: Lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
      // This code below is optimized by the code above
      // // Game over: Lost
      // // Disable input
      // guessInput.disabled = true;
      // // Change border color
      // guessInput.style.borderColor = 'red';
      // // Set message
      // setMessage(`Game over, you lost. The correct number was ${winningNum}`, 'red');
    } else{
      // Change border color
      guessInput.style.borderColor = 'red';
      // Set text color
      message.style.color = color;
      // Clear Input
      guessInput.value = '';
      // Tell user it's the wrong number
      setMessage(`Guess is not correct. ${guessesLeft} guesses left.`, 'red')
    }
  }
}

// Error message
// Note we can't set the color style for both correct and incorrect answers here (For ex. message.style.color = 'red';)
// To solve this we pass in a variable called "color" that is defined above where it says 'red'
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

// Game over
// This is created to optimize some of the repetitive code
function gameOver(won, msg){
  // Here we define the color depending on a win or loss
  let color;
  // if won then green else red
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg);
}
