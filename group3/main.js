// Generate a random number between 1 and 100
let randomNumber = genRandom(1,100);

// Initialize the number of attempts to 0
let attempts = 0;
let j = 10 ;
let temp = 1;
let high = 50;
var  bo=[];
let x = 0;
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
    message.innerText = "BRUH";
    changeBackground('https://i.pinimg.com/originals/56/a6/14/56a614261d423da1825452363174c685.gif')
    changemessage("black");
    disappear();
  
  } else {
    changeBackground("https://i.pinimg.com/736x/6f/0c/7d/6f0c7dd236a49fef3d2c7ad9def7f87c.jpg");
    changemessage("white");
    appear();
   attempts=attempts+1;
    j = 10- attempts;
    // Increase the number of attempts
    // Check if the guess is correct
  

    if (j<=0) { 
      message.innerText = "no more! the answer is " + randomNumber;
      changeBackground('https://i.pinimg.com/originals/a7/96/9a/a7969ab3a56c6101af08b56a0cb674e1.gif'); // Change to your image URL!
      submitButton.disabled = true;
      changemessage("darkred");
      disappear();
    }
    else{
      bo[x]=guess;
      if (guess>randomNumber){
        high=bo[x]; 
      }
      else{
       temp=bo[x];
      }
      x=x+1;
       
     
    if (guess === randomNumber) {
      message.innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
      disappear();
      changeBackground('https://i.pinimg.com/originals/23/1f/9c/231f9c7f8892c629ee880cd26a3e2eb1.gif');
      submitButton.disabled = true;
      changemessage("darkgreen");
    } else if (guess > randomNumber) {
      message.innerText ="Too high!The range is"+ temp +" to"+high+".you still have " + j+" attempts";
    } else {
      message.innerText = "Too Low !The range is"+ temp +" to"+high+".you still have " + j+" attempts";
      
    }}
  }
    
}
);

// Add an event listener to the reset button
resetButton.addEventListener("click", function() {
  // Reset the game
  randomNumber = genRandom();
  changeBackground("https://i.pinimg.com/736x/6f/0c/7d/6f0c7dd236a49fef3d2c7ad9def7f87c.jpg");
  changemessage("brown");
  attempts = 0;
  guessInput.value = "";
  message.innerText = "";
  submitButton.disabled = false;
  appear();
  bo = []; // Reset the array
  temp = 1;
  high = 50;
    j = 10;
    x = 0;
});