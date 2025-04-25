// Best attempt array
let best = [];

// Generate a random number between 1 and 100
let randomNumber = genRandom(1, 100);

// Initialize the number of attempts to 0
let attempts = 0;

// Get references to the HTML elements
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");
const statsButton = document.getElementById("stats");

// Add an event listener to the submit button
submitButton.addEventListener("click", function() {
  // Get the user's guess from the input field
  const guess = Number(guessInput.value);

  // Check if the guess is valid
  if (!isInputValid(guess)) {
    message.innerText = "Please enter a valid number between 1 and 20.";
  } else {
    // Increase the number of attempts
    attempts += 1;

    // Check if the guess is correct
    if (guess === randomNumber) {
      message.innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
      changeBackground('lightgreen');
      best.push(attempts);
      submitButton.disabled = true;
    } else if (guess > randomNumber) {
      message.innerText = "Too high! Guess a lower number.";
    } else {
      message.innerText = "Too low! Guess a higher number.";
    }
  }
});

// Add an event listener to the reset button
resetButton.addEventListener("click", function() {
  // Reset the game
  randomNumber = genRandom(1, 100); // Ensure parameters are passed
  attempts = 0;
  guessInput.value = "";
  message.innerText = "";
  submitButton.disabled = false;
});

statsButton.addEventListener("click", function() {
  let bestScore = best.length > 0 ? Math.min(...best) : "(no attempts recorded)";
  message.innerText = `Your best score is ${bestScore} attempts.`;
});
