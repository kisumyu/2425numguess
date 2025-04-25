// Generate a random number between 1 and 100
let randomNumber = genRandom(1,100);
// Initialize the number of attempts to 0
let attempts = 0;
//array***************************
let inputNumbers = []

// Get references to the HTML elements
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");


// Add an event listener to the submit button
submitButton.addEventListener("click", function() {
  // Get the user's guess from the input field
  const guess = Number(guessInput.value);


  // Check if the guess is valid
  if ( isInputValid(guess) == false ) {
    message.innerText = "Please enter a valid number between 1 and 50.";
  } else {
    // Increase the number of attempts
    attempts = attempts + 1;
    //assign input number to array
    inputNumbers.push(guess);
    updateTable();
    document.getElementById('guess').value = '';

      // Check if the guess is correct
      if (guess === randomNumber) {
        message.innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
      changeBackground("lime");
        submitButton.disabled = true;
        document.getElementById('playAgain').style.display = 'block'; 
      } else if (guess > randomNumber && attempts < 7) {
        message.innerText = "Too high! Guess a lower number.";
      } else if (guess < randomNumber && attempts < 7) {
        message.innerText = "Too low! Guess a higher number.";
      }
      else{
        message.innerText = `Game Over. Answer is ${randomNumber}.`;
        document.getElementById('playAgain').style.display = 'block'; 
        randomNumber = genRandom(1,100);
        attempts = 0;

    }
  }
});

//Add an event listener to the reset button (game reset)
resetButton.addEventListener("click", function() {
  // Reset the game
  randomNumber = genRandom(1, 100);
  attempts = 0;
  inputNumbers = []; 
  guessInput.value = '';
  message.innerText = '';
  updateTable(); 
  submitButton.disabled = false;
});

//whole gamepage restart
document.getElementById('playAgain').addEventListener("click", function() {
    changeBackground("url('https://media2.giphy.com/media/3ohs4ucXR6NYRxmpTa/giphy.gif')");
    randomNumber = genRandom(1, 100);
    attempts = 0;
    inputNumbers = []; 
    guessInput.value = '';
    message.innerText = '';
    updateTable(); 
    submitButton.disabled = false;
    this.style.display = 'none'; 
});